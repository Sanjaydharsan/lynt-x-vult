import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Received body:", body);

    const { organizationid, zohoorgid, clientid, clientsecret } = body;

    if (!organizationid || !zohoorgid || !clientid || !clientsecret) {
      console.log("Missing fields");
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // const existingZohoOrg  = await prisma.zohotoken.findFirst({
    //   where: {
    //     zohoorgid,
    //   },
    // });

    // if (existingZohoOrg ) {
    //   return new Response(
    //     JSON.stringify({
    //       error: "Zoho Organization already exists",
    //     }),
    //     {
    //       status: 409,
    //       headers: { "Content-Type": "application/json" },
    //     }
    //   );
    // }

    // // Save to DB
    // const saved = await prisma.zohotoken.create({
    //   data: {
    //     organizationid,
    //     zohoorgid,
    //     clientid,
    //     clientsecret,
    //   },
    // });

    const existingByOrg = await prisma.zohotoken.findFirst({
      where: { organizationid },
    });

    let saved;

    if (existingByOrg) {
      saved = await prisma.zohotoken.update({
        where: { id: existingByOrg.id },
        data: { zohoorgid, clientid, clientsecret },
      });
    } else {
      saved = await prisma.zohotoken.create({
        data: {
          organizationid,
          zohoorgid,
          clientid,
          clientsecret,
        },
      });
    }

    const authUrl = new URL("https://accounts.zoho.com/oauth/v2/auth");
    authUrl.searchParams.set("scope", "ZohoBooks.fullaccess.ALL");
    authUrl.searchParams.set("client_id", clientid);
    authUrl.searchParams.set("state", "testing");
    authUrl.searchParams.set("response_type", "code");
    authUrl.searchParams.set(
      "redirect_uri",
      "http://localhost:3001/zoho/callback"
    );
    authUrl.searchParams.set("access_type", "offline");
    authUrl.searchParams.set("prompt", "consent");

    return new Response(JSON.stringify({ auth_url: authUrl.toString() }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("API Error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
