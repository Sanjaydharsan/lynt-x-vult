import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";
import { xero } from "@/lib/xeroClient";

export const runtime = "nodejs";

const prisma = new PrismaClient();
async function saveXeroTokens({ tokenSet, tenantId, organizationId }) {
  if (!tokenSet || !tenantId || !organizationId) {
    throw new Error("Missing data for saving Xero token");
  }

  const expiresAt = tokenSet.expires_at
    ? new Date(tokenSet.expires_at * 1000).toISOString()
    : null;

  const existing = await prisma.xerotoken.findFirst({
    where: { organizationid: organizationId.toString() },
  });

  if (existing) {
    await prisma.xerotoken.update({
      where: { id: existing.id },
      data: {
        tenantid: tenantId,
        accesstoken: tokenSet.access_token,
        refreshtoken: tokenSet.refresh_token,
        expiresat: expiresAt,
      },
    });
  } else {
    await prisma.xerotoken.create({
      data: {
        organizationid: organizationId.toString(),
        tenantid: tenantId,
        accesstoken: tokenSet.access_token,
        refreshtoken: tokenSet.refresh_token,
        expiresat: expiresAt,
      },
    });
  }
}
export async function GET(request) {
  try {
    const callbackUrl = request.url;
    const urlObj = new URL(callbackUrl);
    const code = urlObj.searchParams.get("code");
    
    const organizationId = request.cookies.get("organizationId")?.value;
    const redirectTo = request.cookies.get("redirectTo")?.value || "/settings";

    if (!organizationId) {
      return NextResponse.json(
        { error: "Missing organizationId (state)" },
        { status: 400 }
      );
    }

    const tokenSet = await xero.apiCallback(callbackUrl, {
      state: organizationId,
    }); 
    xero.setTokenSet(tokenSet);

    const tenants = await xero.updateTenants();
    if (!tenants?.length) {
      return NextResponse.json(
        { error: "No Xero tenants returned" },
        { status: 400 }
      );
    }
    const tenantId = tenants[0].tenantId;

    await saveXeroTokens({ tokenSet, tenantId, organizationId });

    const successHtml = `
  <html>
    <head>
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background-color: #f9fafb;
          color: #111827;
        }
        h3 {
          font-size: 1.5rem;
          font-weight: 600;
        }
      </style>
    </head>
    <body>
      <div>
        <h3>Xero connected successfully!</h3>
      </div>
      <script>window.location = "${redirectTo}";</script>
    </body>
  </html>
`;

    return new NextResponse(successHtml, {
      headers: { "Content-Type": "text/html" },
    });
  } catch (err) {
    // console.error("Xero callback error:", err?.response?.data || err.message || err);
    return NextResponse.json(
      { error: "Xero callback failed." },
      { status: 500 }
    );
  }
}
