import { NextResponse } from "next/server";
import {
  loadTokens,
  requireConnection,
  xero,
} from "@/lib/xeroClient";

export const runtime = "nodejs";

export async function GET() {
  try {
    loadTokens();                          
    const tenantId = requireConnection(); 

    const result = await xero.accountingApi.getInvoices(tenantId);
    return NextResponse.json(result.body.invoices);
  } catch (err) {
    console.error("❌ Xero fetch error:", err?.response?.data || err.message);
    return NextResponse.json(
      { error: "Failed to fetch invoices." },
      { status: err.message === "Not connected to Xero" ? 401 : 500 },
    );
  }
}
