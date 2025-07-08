import { PrismaClient } from '@/generated/prisma';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req, { params }) {
  const { organizationid } = params;

  if (!organizationid) {
    return NextResponse.json({ error: 'organizationid is required' }, { status: 400 });
  }

  try {
    const teammembers = await prisma.teammember.findMany({
      where: {
        organizationid: parseInt(organizationid),
      },
    });

    return NextResponse.json(teammembers, { status: 200 });
  } catch (err) {
    console.error('Error fetching teammembers:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
