import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
const prisma = new PrismaClient();

export async function POST(req) {
  const body = await req.json();
  const { user } = body;
// console.log("user", user)
  if (!user || !user.id) {
    return NextResponse.json({ error: 'User data required' }, { status: 400 });
  }

  try {
    const email = user.emailAddresses?.[0]?.emailAddress || 'null';
   // const organizationId = user.publicMetadata?.organizationId || null;
    // const role = user.publicMetadata?.role || 'admin';
    const role = user?.organizationMemberships[0]?.role === 'org:member'? 'user':'admin';
    let organizationId = null;

    const organizationIdFromUser = user.publicMetadata?.organization || null;


    if(organizationIdFromUser){
      

      const result_query = await prisma.$queryRaw`SELECT id FROM "Organization" WHERE "Org_ID" = ${organizationIdFromUser} LIMIT 1`;

      const organization = result_query[0];


        if (organization) {
            organizationId = organization.id;
            
          } else {
            console.warn(`Organization with Org_ID ${organizationIdFromUser} not found.`);
          }
        }
    


    const result = await prisma.users.upsert({
      where: { id: user.id },
      update: {
        email,
        fulldata: user,
        // organizationId
      },
      create: {
        id: user.id,
        email,
        fulldata: user,
        // organizationId,
        role,
      },
    });

    return NextResponse.json({ success: true, user: result });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

