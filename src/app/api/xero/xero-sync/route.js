import { PrismaClient } from '@/generated/prisma';
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import { Blob, FormData } from "formdata-node";
import fetch from "node-fetch";
import { xero } from "@/lib/xeroClient";

export const runtime = "nodejs";


const prisma = new PrismaClient();
const uploadDir = path.join(process.cwd(), "public/uploads");

export async function getValidXeroToken(organizationId) {
  if (!organizationId) throw new Error("Missing organizationId");

  await xero.initialize();

  const tokenRecord = await prisma.xerotoken.findFirst({
    where: { organizationid: organizationId.toString() },
  });

  if (!tokenRecord) {
    throw new Error("No Xero token found for this organization");
  }

  const { tenantid, accesstoken, refreshtoken, expiresat } = tokenRecord;
  const isExpired = !expiresat || new Date(expiresat) < new Date();

  if (!isExpired) {
    xero.setTokenSet({
      access_token: accesstoken,
      refresh_token: refreshtoken,
      expires_at: expiresat ? new Date(expiresat).getTime() / 1000 : undefined,
    });
    return { tenantId: tenantid, accessToken: accesstoken };
  }

  // 🔁 Refresh logic
  try {
    const newTokenSet = await xero.refreshWithRefreshToken(
      process.env.XERO_CLIENT_ID,
      process.env.XERO_CLIENT_SECRET,
      refreshtoken
    );

    xero.setTokenSet(newTokenSet);

    await prisma.xerotoken.update({
      where: { id: tokenRecord.id },
      data: {
        accesstoken: newTokenSet.access_token,
        refreshtoken: newTokenSet.refresh_token,
        expiresat: new Date(newTokenSet.expires_at * 1000).toISOString(),
      },
    });

    return {
      tenantId: tenantid,
      accessToken: newTokenSet.access_token,
    };
  } catch (error) {
    //Detect invalid refresh (expired/revoked)
    if (error.response?.data?.error === 'invalid_grant' || error.response?.data?.error === 'invalid_client') {
      const reconnectUrl = `/api/xero/start?organizationId=${organizationId}`;
      throw {
        type: "reauth_required",
        message: "Xero token invalid. Please reconnect your Xero account.",
        redirectUrl: reconnectUrl,
      };
    }

    throw error;
  }
}


async function fetchInvoices(_accessToken, tenantId) {
  const response = await xero.accountingApi.getInvoices(tenantId);
  return response.body.invoices || [];
}


async function fetchInvoicePdf(invoiceId, _accessToken, tenantId) {
  const pdfResponse = await xero.accountingApi.getInvoiceAsPdf(tenantId, invoiceId);
  return pdfResponse.body;
}


async function savePdfLocally(batchName, filename, pdfBuffer) {
  const folderPath = path.join(uploadDir, batchName);
  await fs.mkdir(folderPath, { recursive: true });
  const filePath = path.join(folderPath, filename);
  await fs.writeFile(filePath, pdfBuffer);
  return { filePath, filename };
}

async function uploadToOrdersCreation({ batchName, filename, pdfBuffer, organizationId }) {
  const formData = new FormData();
  formData.append("batchName", batchName);
  formData.append("method", "xero");
  formData.append("file", new Blob([pdfBuffer]), filename);

  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
   console.log("apiUrl1", process.env.NEXT_PUBLIC_API_BASE_URL)
  console.log("apiUrl", apiUrl)
  const res = await fetch(`${apiUrl}/orders-creation`, {
    method: "POST",
    headers: { "x-organization-id": organizationId.toString() },
    body: formData,
  });
  return res.ok ? await res.json() : { error: await res.text() };
}

export async function POST(req) {
  const { organizationId } = await req.json();

  try {
    const { accessToken, tenantId } = await getValidXeroToken(organizationId);

    const invoices = await fetchInvoices(accessToken, tenantId);
    if (!invoices.length) {
      return NextResponse.json({ success: true, message: "No invoices to sync." });
    }

    const uploads = [];
    for (const invoice of invoices) {
      const batchName = invoice.contact?.name || invoice.reference || invoice.invoiceNumber || `Invoice-${invoice.invoiceID.slice(0, 8)}`;
      const filename = `${invoice.invoiceNumber || invoice.invoiceID}.pdf`;
      const pdfBuffer = await fetchInvoicePdf(invoice.invoiceID, accessToken, tenantId);
      const { filename: savedFilename } = await savePdfLocally(batchName, filename, pdfBuffer);

      const uploadResult = await uploadToOrdersCreation({
        batchName,
        filename: savedFilename,
        pdfBuffer,
        organizationId,
      });

      uploads.push({
        invoiceId: invoice.invoiceID,
        batchName,
        filename: savedFilename,
        uploadResult,
      });
    }

    return NextResponse.json({ success: true, uploads });
  } catch (err) {
    console.error("Xero sync error:", err);
     if (err.type === "reauth_required") {
      return NextResponse.json(
        {
          error: err.message,
          redirectUrl: err.redirectUrl,
        },
        { status: 401 }
      );
    }
    return NextResponse.json({ error: "Failed to sync invoices from Xero." }, { status: 500 });
  }
}
