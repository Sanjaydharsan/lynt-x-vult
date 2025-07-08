import { PrismaClient } from '@/generated/prisma';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { code, organizationid } = await req.json();

    if (!code || !organizationid) {
      return NextResponse.json({ error: "Missing code or organizationid" }, { status: 400 });
    }

    // Find the zohotoken row using organizationid
    const tokenRecord = await prisma.zohotoken.findFirst({
      where: { organizationid },
    });

    if (!tokenRecord) {
      return NextResponse.json({ error: "No Zoho credentials found for this organization" }, { status: 404 });
    }

    const { clientid, clientsecret } = tokenRecord;

    const form = new URLSearchParams({
      code,
      client_id: clientid,
      client_secret: clientsecret,
      redirect_uri: "http://localhost:3001/zoho/callback",
      grant_type: "authorization_code",
    });

    const zohoRes = await fetch("https://accounts.zoho.in/oauth/v2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: form.toString(),
    });

    const data = await zohoRes.json();

    if (!zohoRes.ok) {
      console.error("Zoho response error:", data);
      return NextResponse.json({ error: data }, { status: zohoRes.status });
    }

    // Update tokens in DB
    await prisma.zohotoken.update({
      where: { id: tokenRecord.id },
      data: {
        accesstoken: data.access_token,
        refreshtoken: data.refresh_token,
        updatedat: new Date(),
      },
    });

    return NextResponse.json({
      message: "Tokens saved to database successfully.",
      ...data,
    });

  } catch (err) {
    console.error("Token exchange failed:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
