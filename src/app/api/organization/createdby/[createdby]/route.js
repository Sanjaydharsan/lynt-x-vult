import { PrismaClient } from '@/generated/prisma';
import { clerkClient } from '@clerk/clerk-sdk-node';

const prisma = new PrismaClient();

export async function GET(req, { params }) {
  const { createdby } = await params;

  if (!createdby) {
    return new Response(JSON.stringify({ error: 'createdby parameter is required' }), {
      status: 400,
    });
  }

  try {
    const organization = await prisma.organization.findFirst({
      where: { userid:createdby },
    });

    if (!organization) {
      return new Response(JSON.stringify({ message: 'Organization not found' }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(organization), { status: 200 });
  } catch (err) {
    console.error('Error fetching organization:', err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

export async function PATCH(req, { params }) {
  const { createdby } = params;

  if (!createdby) {
    return new Response(JSON.stringify({ error: 'createdby parameter is required' }), { status: 400 });
  }

  try {
    const body = await req.json();
    const { ai_settings, security_settings, createdby: _, ...updateData } = body;

    if (updateData.name) {
      const duplicate = await prisma.organization.findFirst({
        where: {
          name: updateData.name,
          NOT: {
            userid: createdby, 
          },
        },
      });

      if (duplicate) {
        return new Response(
          JSON.stringify({ error: 'Organization name already exists for another user.' }),
          { status: 409 }
        );
      }
    }

    const updated = await prisma.organization.updateMany({
      where: { userid: createdby }, 
      data: updateData,
    });

    if (updated.count === 0) {
      return new Response(JSON.stringify({ message: 'Organization not found' }), { status: 404 });
    }

    const updatedOrg = await prisma.organization.findFirst({
      where: { userid: createdby }, 
    });

    if (!updatedOrg) {
      return new Response(JSON.stringify({ message: 'Organization fetch failed after update' }), { status: 500 });
    }

    const orgId = updatedOrg.id;

    // Upsert ai_settings if provided
    if (ai_settings) {
      await prisma.ai_settings.upsert({
        where: { organizationid: orgId },
        update: ai_settings,
        create: { ...ai_settings, organizationid: orgId },
      });
    }

    // Upsert security_settings if provided
    if (security_settings) {
      await prisma.security_settings.upsert({
        where: { organizationid: orgId },
        update: security_settings,
        create: { ...security_settings, organizationid: orgId },
      });
    }

    if (updatedOrg?.org_id) {
      try {
        await clerkClient.organizations.updateOrganization(updatedOrg.org_id, {
          name: updatedOrg.name,
        });
      } catch (clerkErr) {
        console.error('Failed to update Clerk organization:', clerkErr);
      }
    }

    return new Response(
      JSON.stringify({ message: 'Organization updated', organization: updatedOrg }),
      { status: 200 }
    );
  } catch (err) {
    console.error('Error updating organization:', err);
    return new Response(
      JSON.stringify({ error: (err && err.message) || String(err) || 'Unknown error' }),
      { status: 500 }
    );
  }
}

