import { PrismaClient } from '@/generated/prisma';
import { NextResponse } from 'next/server';
 
const prisma = new PrismaClient();
 
export async function GET(request) {
  try {
    const organizationId = request.headers.get('x-organization-id');
 
    if (!organizationId) {
      return NextResponse.json(
        { error: 'Organization ID is required' },
        { status: 400 }
      );
    }
 
    const users = await prisma.users.findMany({
      where: {
       organizationid: Number(organizationId),
      },
    });
 
    const transformedUsers = users.map((user) => ({
      ...user,
      fullName: user.fulldata?.fullName || null,
      username: user.fulldata?.username || null,
    }));
 
    // Group users by role and count
    const roleCounts = transformedUsers.reduce((acc, user) => {
      const role = user.role || 'Unknown';
      acc[role] = (acc[role] || 0) + 1;
      return acc;
    }, {});

    // return NextResponse.json(transformedUsers);
    return NextResponse.json({
      users: transformedUsers,
      roleCounts, // { admin: 3, viewer: 5, etc. }
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
 