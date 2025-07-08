import { PrismaClient } from '@/generated/prisma';
import { NextResponse } from 'next/server';
import axios from 'axios';

const prisma = new PrismaClient();

// 🔧 Fetch Zoho credentials
const getZohoCredentials = async (organizationid) => {
  console.log('🔍 Fetching Zoho credentials for organizationid:', organizationid);
  return prisma.zohotoken.findFirst({ where: { organizationid } });
};

// 🔄 Refresh token if expired
const refreshAccessToken = async (refresh_token, client_id, client_secret) => {
  try {
    console.log('🔄 Refreshing Zoho access token');
    const response = await axios.post('https://accounts.zoho.in/oauth/v2/token', null, {
      params: {
        refresh_token,
        client_id,
        client_secret,
        grant_type: 'refresh_token',
      },
    });
    return response.data.access_token;
  } catch (error) {
    console.error('❌ Token refresh error:', error.response?.data || error.message);
    throw new Error('Failed to refresh access token. Please verify refresh_token, client_id, and client_secret.');
  }
};

// 📥 Download PDF invoice
const fetchInvoicePdf = async (invoiceId, token, orgId) => {
  const url = `https://www.zohoapis.in/books/v3/invoices/${invoiceId}`;
  console.log('📡 Downloading invoice from:', url);
  console.log('🏢 Zoho Organization ID:', orgId);
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Zoho-oauthtoken ${token}`,
        Accept: 'application/pdf',
      },
      params: {
        organization_id: orgId,
      },
      responseType: 'arraybuffer',
    });

    // Validate response is PDF
    const contentType = response.headers['content-type'];
    if (!contentType.includes('application/pdf')) {
      throw new Error(`Expected PDF, got ${contentType}`);
    }

    return response;
  } catch (error) {
    // Parse Buffer to JSON for error responses
    let errorData = error.response?.data;
    if (errorData instanceof Buffer) {
      try {
        errorData = JSON.parse(errorData.toString());
      } catch (parseError) {
        console.error('❌ Failed to parse error response:', parseError);
      }
    }
    console.error('❌ Fetch PDF error:', errorData || error.message);
    throw errorData || error;
  }
};

// ✅ API Route
export async function GET(req, { params }) {
  try {
    const invoiceid = params?.id || params?.invoiceid; // Handle both 'id' and 'invoiceid'
    const { searchParams } = new URL(req.url);
    const organizationid = searchParams.get('organizationid');

    console.log('🗂️ Invoice ID:', invoiceid);
    console.log('🏢 Organization ID:', organizationid);
    console.log('📌 Request URL:', req.url);

    if (!invoiceid || !organizationid) {
      return NextResponse.json(
        { success: false, message: 'Missing invoiceid or organizationid' },
        { status: 400 }
      );
    }

    const creds = await getZohoCredentials(organizationid);
    if (!creds) {
      return NextResponse.json(
        { success: false, message: 'Zoho credentials not found' },
        { status: 404 }
      );
    }

    let accessToken = creds.accesstoken;
    const orgId = creds.zohoorgid;
    console.log('🔑 Access Token:', accessToken.slice(0, 10) + '...');

    try {
      const pdfResponse = await fetchInvoicePdf(invoiceid, accessToken, orgId);
      return new NextResponse(pdfResponse.data, {
        status: 200,
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `inline; filename=invoice_${invoiceid}.pdf`,
        },
      });
    } catch (error) {
      const code = error.code || error.response?.data?.code;
      const message = error.message || error?.data?.message;

      console.error('❌ Zoho API error:', { code, message });

      if (code === 57) {
        console.warn('⚠️ Access token expired or unauthorized. Attempting refresh...');
        try {
          const newToken = await refreshAccessToken(
            creds.refreshtoken,
            creds.clientid,
            creds.clientsecret
          );

          await prisma.zohotoken.update({
            where: { id: creds.id },
            data: { accesstoken: newToken, updatedat: new Date() },
          });

          console.log('🔑 New Access Token:', newToken.slice(0, 10) + '...');
          const retryResponse = await fetchInvoicePdf(invoiceid, newToken, orgId);
          return new NextResponse(retryResponse.data, {
            status: 200,
            headers: {
              'Content-Type': 'application/pdf',
              'Content-Disposition': `inline; filename=invoice_${invoiceid}.pdf`,
            },
          });
        } catch (refreshError) {
          let refreshErrorData = refreshError.response?.data;
          if (refreshErrorData instanceof Buffer) {
            try {
              refreshErrorData = JSON.parse(refreshErrorData.toString());
            } catch (parseError) {
              console.error('❌ Failed to parse refresh error:', parseError);
            }
          }
          console.error('❌ Refresh error:', refreshErrorData || refreshError.message);
          return NextResponse.json(
            {
              success: false,
              message: 'Failed to refresh token and fetch invoice PDF',
              error: refreshErrorData?.message || refreshError.message,
            },
            { status: 500 }
          );
        }
      }

      // Handle other Zoho-specific errors
      const errorMessages = {
        5: 'Invalid URL or invoice ID. Please verify the invoice ID exists in the organization.',
        57: 'Authorization error. Please verify the access token has the ZohoBooks.invoices.READ scope and the user has permission to access invoice PDFs.',
        1001: 'Invalid invoice ID',
        1002: 'Permission denied to access invoice',
        4000: 'Invalid organization ID',
        1050: 'API rate limit exceeded',
      };

      return NextResponse.json(
        {
          success: false,
          message: 'Failed to fetch invoice PDF',
          error: errorMessages[code] || message || 'Unknown error',
        },
        { status: error.response?.status || 500 }
      );
    }
  } catch (err) {
    console.error('❌ Unexpected error:', err);
    return NextResponse.json(
      { success: false, message: 'Internal Server Error', error: err.message },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}