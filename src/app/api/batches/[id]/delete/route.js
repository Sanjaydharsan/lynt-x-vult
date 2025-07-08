import { PrismaClient } from '@/generated/prisma'
import { NextResponse } from 'next/server';


const prisma = new PrismaClient();

export async function PUT(req, { params }) {
  const { id } = params;

  try {
    const batch = await prisma.batch.update({
      where: { id: parseInt(id) },
      data: { isactive: false },
    });

    return NextResponse.json(batch, { status: 200 });
  } catch (error) {
    console.error("Deactivate error:", error);
    return NextResponse.json({ error: 'Failed to deactivate batch' }, { status: 500 });
  }
}

