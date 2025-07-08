import { PrismaClient } from '@/generated/prisma';
import { clerkClient } from '@clerk/clerk-sdk-node';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      parentid,
      fullname,
      email,
      organizationid,
      Org_ID,
    } = body;

    if (!parentid || !email || !organizationid) {
      return new Response(JSON.stringify({ error: 'Missing required fields.' }), { status: 400 });
    }

    const existingMember = await prisma.teammember.findFirst({
      where: {
        email,
        organizationid,
      },
    });

    if (existingMember) {
      return new Response(JSON.stringify({ error: 'User with this email already exists in the team.' }), {
        status: 409,
      });
    }

    const newMember = await prisma.teammember.create({
      data: {
        parentid,
        fullname,
        email,
        organizationid,
        status: 'pending',
        Org_ID,
      },
    });

    let invitation;
    try {
      invitation = await clerkClient.organizations.createOrganizationInvitation({
        organizationId: Org_ID,
        emailAddress: email,
        role: 'org:member',
      });
    } catch (clerkErr) {
      await prisma.teammember.delete({
        where: {
          id: newMember.id,
        },
      });
      throw clerkErr;
    }

    return new Response(JSON.stringify({
      db: newMember,
      clerk: {
        invitationId: invitation.id,
        emailAddress: invitation.emailAddress,
      },
    }), { status: 201 });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
