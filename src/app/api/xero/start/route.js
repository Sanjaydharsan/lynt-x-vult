import { NextResponse } from "next/server";
import { xero } from "@/lib/xeroClient";

export const runtime = "nodejs";

export async function GET(request) {
  const url = new URL(request.url);
  const organizationId = url.searchParams.get("organizationId");
  const redirectTo = url.searchParams.get("redirectTo") || "/settings";


  if (!organizationId) {
    return NextResponse.json({ error: "organizationId required" }, { status: 400 });
  }

  const state = organizationId; 

  const consentUrl = await xero.buildConsentUrl({
    prompt: "consent",
    state, 
  });

const response = NextResponse.redirect(consentUrl);

  response.cookies.set("organizationId", organizationId, {
    path: "/",
    httpOnly: true,
    secure: false, 
    sameSite: "lax",
  });

  response.cookies.set("redirectTo", redirectTo, {
  path: "/",
  httpOnly: true,
  secure: true,
  sameSite: "lax",
});

  return response;
}
