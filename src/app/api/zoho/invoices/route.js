import { PrismaClient } from '@/generated/prisma';
import { NextResponse } from 'next/server';
import axios from 'axios';

const prisma = new PrismaClient();

// Fetch Zoho credentials
const getZohoCredentials = async (organizationid) => {
  return prisma.zohotoken.findFirst({ where: { organizationid } });
};

// Refresh access token
const refreshAccessToken = async (refresh_token, client_id, client_secret) => {
  const response = await axios.post('https://accounts.zoho.in/oauth/v2/token', null, {
    params: {
      refresh_token,
      client_id,
      client_secret,
      grant_type: 'refresh_token',
    },
  });
  return response.data.access_token;
};

// Fetch all invoices
const fetchAllInvoices = async (accessToken, organizationId) => {
  return axios.get('https://www.zohoapis.in/books/v3/invoices', {
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
    },
    params: {
      organization_id: organizationId,
      sort_column: 'date',
      sort_order: 'D',
    },
  });
};

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const organizationid = searchParams.get('organizationid');

    if (!organizationid) {
      return NextResponse.json({ error: 'Missing organizationid' }, { status: 400 });
    }

    const creds = await getZohoCredentials(organizationid);
    if (!creds) {
      return NextResponse.json({ error: 'Zoho credentials not found' }, { status: 404 });
    }

    let accessToken = creds.accesstoken;
    const orgId = creds.zohoorgid;

    try {
      const response = await fetchAllInvoices(accessToken, orgId);
      return NextResponse.json({ success: true, invoices: response.data.invoices ?? [] });
    } catch (error) {
      if (error.response?.data?.code === 57) {
        const newToken = await refreshAccessToken(
          creds.refreshtoken,
          creds.clientid,
          creds.clientsecret
        );

        await prisma.zohotoken.update({
          where: { id: creds.id },
          data: { accesstoken: newToken, updatedat: new Date() },
        });

        accessToken = newToken;

        const retry = await fetchAllInvoices(accessToken, orgId);
        return NextResponse.json({ success: true, invoices: retry.data.invoices ?? [] });
      }

      return NextResponse.json({
        success: false,
        message: 'Failed to fetch invoices',
        error: error.response?.data || error.message,
      }, { status: 500 });
    }
  } catch (err) {
    console.error('Unexpected error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
