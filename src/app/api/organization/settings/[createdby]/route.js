import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function GET(req, { params }) {
  const { createdby } = params;

  if (!createdby) {
    return new Response(
      JSON.stringify({ error: "createdby parameter is required" }),
      { status: 400 }
    );
  }

  try {
    const organization = await prisma.organization.findFirst({
      where: { userid: createdby },
    });

    if (!organization) {
      return new Response(
        JSON.stringify({ message: "Organization not found" }),
        { status: 404 }
      );
    }

    const [ai_settings, security_settings] = await Promise.all([
      prisma.ai_settings.findUnique({
        where: { organizationid: organization.id },
      }),
      prisma.security_settings.findUnique({
        where: { organizationid: organization.id },
      }),
    ]);

    return new Response(
      JSON.stringify({
        ...organization,
        ai_settings,
        security_settings,
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Error fetching organization data:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Internal server error" }),
      { status: 500 }
    );
  }
}
