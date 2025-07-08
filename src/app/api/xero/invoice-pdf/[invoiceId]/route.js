import { NextResponse } from "next/server";
import {
  loadTokens,
  requireConnection,
  xero,
} from "@/lib/xeroClient";

export const runtime = "nodejs";

export async function GET(_req, { params }) {
  try {
    const { invoiceId } = params;
    if (!invoiceId) {
      return NextResponse.json(
        { error: "Invoice ID required" },
        { status: 400 },
      );
    }

    // Make sure token & tenant are in memory
    loadTokens();
    const tenantId = requireConnection(); // throws 401-style error if not set

    const pdfResponse = await xero.accountingApi.getInvoiceAsPdf(
      tenantId,
      invoiceId,
    );

    // pdfResponse.body is binary (Uint8Array)
    return new NextResponse(pdfResponse.body, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename=invoice-${invoiceId}.pdf`,
      },
    });
  } catch (err) {
    console.error("❌ PDF fetch error:", err?.response?.data || err.message || err);
    const status =
      err?.message === "Not connected to Xero"
        ? 401
        : err?.response?.status || 500;
    return NextResponse.json(
      { error: "Failed to fetch invoice PDF" },
      { status },
    );
  }
}
