import { PrismaClient } from '@/generated/prisma';
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import { Blob, FormData } from 'formdata-node';
import axios from 'axios';

export const runtime = 'nodejs';

const prisma = new PrismaClient();
const uploadDir = path.join(process.cwd(), 'public/uploads');

// Fetch Zoho credentials
async function getZohoCredentials(organizationId) {
  const tokenRecord = await prisma.zohotoken.findFirst({
    where: { organizationid: String(organizationId) },
  });

  if (!tokenRecord) {
    throw new Error('No Zoho credentials found for this organization');
  }

  return tokenRecord;
}

// Refresh access token if expired
async function refreshAccessToken(refresh_token, client_id, client_secret, organizationId) {
  try {
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
    if (error.response?.data?.error === 'invalid_grant' || error.response?.data?.error === 'invalid_client') {
      throw {
        type: 'reauth_required',
        message: 'Zoho token invalid. Please reconnect your Zoho account.',
        redirectUrl: `/api/zoho/start?organizationId=${organizationId}`,
      };
    }
    throw new Error(`Failed to refresh access token: ${error.response?.data?.error || error.message}`);
  }
}

// Get valid Zoho access token
async function getValidZohoToken(organizationId) {
  if (!organizationId) throw new Error('Missing organizationId');

  const creds = await getZohoCredentials(organizationId);
  const { accesstoken, refreshtoken, clientid, clientsecret, zohoorgid, id } = creds;

  // Test token with a lightweight API call
  try {
    await axios.get('https://www.zohoapis.in/books/v3/organizations', {
      headers: { Authorization: `Zoho-oauthtoken ${accesstoken}` },
      params: { organization_id: zohoorgid },
    });
    return { accessToken: accesstoken, orgId: zohoorgid };
  } catch (error) {
    if (error.response?.data?.code === 57) {
      const newToken = await refreshAccessToken(refreshtoken, clientid, clientsecret, organizationId);

      await prisma.zohotoken.update({
        where: { id },
        data: { accesstoken: newToken, updatedat: new Date() },
      });

      return { accessToken: newToken, orgId: zohoorgid };
    }
    throw error;
  }
}

// Fetch all invoices
async function fetchInvoices(accessToken, orgId) {
  const response = await axios.get('https://www.zohoapis.in/books/v3/invoices', {
    headers: { Authorization: `Zoho-oauthtoken ${accessToken}` },
    params: {
      organization_id: orgId,
      sort_column: 'date',
      sort_order: 'D',
    },
  });
  return response.data.invoices || [];
}

// Fetch invoice PDF
async function fetchInvoicePdf(invoiceId, accessToken, orgId) {
  const response = await axios.get(`https://www.zohoapis.in/books/v3/invoices/${invoiceId}`, {
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      Accept: 'application/pdf',
    },
    params: { organization_id: orgId },
    responseType: 'arraybuffer',
  });

  if (!response.headers['content-type'].includes('application/pdf')) {
    throw new Error(`Expected PDF, got ${response.headers['content-type']}`);
  }

  return response.data;
}

// Save PDF locally
async function savePdfLocally(batchName, filename, pdfBuffer) {
  const folderPath = path.join(uploadDir, batchName);
  await fs.mkdir(folderPath, { recursive: true });
  const filePath = path.join(folderPath, filename);
  await fs.writeFile(filePath, pdfBuffer);
  return { filePath, filename };
}

// Upload to orders creation endpoint
async function uploadToOrdersCreation({ batchName, filename, pdfBuffer, organizationId }) {
  const formData = new FormData();
  formData.append('batchName', batchName);
  formData.append('method', 'zoho');
  formData.append('file', new Blob([pdfBuffer]), filename);

  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const res = await axios.post(`${apiUrl}/orders-creation`, formData, {
    headers: { 'x-organization-id': organizationId },
  });

  return res.data;
}

// API Route Handler
export async function POST(req) {
  try {
    const { organizationId } = await req.json();

    if (!organizationId) {
      return NextResponse.json({ error: 'Missing organizationId' }, { status: 400 });
    }

    const { accessToken, orgId } = await getValidZohoToken(organizationId);
    const invoices = await fetchInvoices(accessToken, orgId);

    if (!invoices.length) {
      return NextResponse.json({ success: true, message: 'No invoices to sync.' });
    }

    const uploads = [];
    for (const invoice of invoices) {
      const batchName =
        invoice.customer_name ||
        invoice.reference_number ||
        invoice.invoice_number ||
        `Invoice-${invoice.invoice_id.slice(0, 8)}`;
      const filename = `${invoice.invoice_number || invoice.invoice_id}.pdf`;
      const pdfBuffer = await fetchInvoicePdf(invoice.invoice_id, accessToken, orgId);
      const { filename: savedFilename } = await savePdfLocally(batchName, filename, pdfBuffer);

      const uploadResult = await uploadToOrdersCreation({
        batchName,
        filename: savedFilename,
        pdfBuffer,
        organizationId,
      });

      uploads.push({
        invoiceId: invoice.invoice_id,
        batchName,
        filename: savedFilename,
        uploadResult,
      });
    }

    return NextResponse.json({ success: true, uploads });
  } catch (err) {
    if (err.type === 'reauth_required') {
      return NextResponse.json(
        { error: err.message, redirectUrl: err.redirectUrl },
        { status: 401 }
      );
    }
    return NextResponse.json(
      { error: err.message || 'Failed to sync invoices from Zoho.' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}