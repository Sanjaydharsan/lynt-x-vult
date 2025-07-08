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

    const batches = await prisma.batch.findMany({
      where: {
        organizationId: Number(organizationId),
      },
    });

    const enrichedBatches = await Promise.all(
      batches.map(async (batch) => {
        const imagecollection = await prisma.imagecollections.findMany({
          where: {
            batchname: batch.batchname,
          },
        });

        // Calculate total progress for the batch
        const totalImages = imagecollection.length;
        let totalProgress = 0;

        imagecollection.forEach((img) => {
          if (img.imagestatus === true && img.qcimagestatus === true) {
            totalProgress += 100;
          } else if (img.imagestatus === true && img.qcimagestatus === false) {
            totalProgress += 50;
          }
          // if both false, add 0 (no need explicitly)
        });

        const batchProgress = totalImages > 0 ? Math.round(totalProgress / totalImages) : 0;

        return {
          ...batch,
          imagescount: totalImages,
          progress: batchProgress, // <-- This is what you need
          imagecollection, // optional, remove if not needed in response
        };
      })
    );

    return NextResponse.json(enrichedBatches, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}