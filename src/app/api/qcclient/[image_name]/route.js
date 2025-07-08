import { PrismaClient } from '@/generated/prisma';
const prisma = new PrismaClient();
 
export async function GET(request, { params }) {
  try {
    const organizationId = request.headers.get('x-organization-id');
    if (!organizationId) {
      return new Response(JSON.stringify({ error: 'Organization ID is required' }), { status: 400 });
    }
    const parsedOrgId = parseInt(organizationId, 10);
    if (isNaN(parsedOrgId)) {
      return new Response(JSON.stringify({ error: 'Invalid organization ID' }), { status: 400 });
    }
 
    const { image_name: imageNameParam } = await params;
 
    if (!imageNameParam) {
      return new Response(JSON.stringify({ error: 'image_name is required' }), { status: 400 });
    }
 
        // Query the DB to find records where image_name ends with /imageNameParam
    const submissions = await prisma.formSubmission.findMany({
      where: {
        image_name: { endsWith: `/${imageNameParam}` },
        organizationId: parsedOrgId,
      },
      select: {
        batch_name: true,
        image_name: true,
        level: true,
        field_name: true,
        field_value: true,
      },
    });

    // Also fetch the image record with AI data
    const imageRecord = await prisma.imagecollections.findFirst({
      where: {
        filename: { endsWith: `/${imageNameParam}` },
        organizationId: parsedOrgId,
      },
      select: {
        id: true,
        filename: true,
        batchname: true,
        // ai_extracted_fields: true,
        // ai_confidence_score: true,
        // ai_processing_status: true,
        // ai_document_type: true,
        // ai_model_used: true,
        // ai_processed_at: true,
        // human_verified: true,
        // human_verified_at: true,
        // field_corrections: true,
        ocr_full_text: true,
      },
    });

    if (!submissions || submissions.length === 0) {
      // Even if no submissions, we might have AI data
      if (!imageRecord) {
        return new Response(JSON.stringify({ message: 'No data found for this image' }), { status: 404 });
      }
    }
 
        // Group by level
    const levelsMap = new Map();
    let batchName = imageRecord?.batchname || null;

    if (submissions && submissions.length > 0) {
      submissions.forEach(sub => {
        const { level, field_name, field_value, batch_name } = sub;
        batchName = batchName || batch_name; // Use image record batch name first
        if (!levelsMap.has(level)) {
          levelsMap.set(level, { level, fields: {} });
        }
        levelsMap.get(level).fields[field_name] = field_value;
      });
    }

    const levelsArray = Array.from(levelsMap.values());

    const response = {
      batch: batchName,
      image: `/uploads/${batchName}/${imageNameParam}`,
      levels: levelsArray,
      // Include AI data in response
      data: imageRecord ? [imageRecord] : [],
      // aiData: imageRecord ? {
      //   extractedFields: imageRecord.ai_extracted_fields || {},
      //   confidence: imageRecord.ai_confidence_score || 0,
      //   processingStatus: imageRecord.ai_processing_status,
      //   documentType: imageRecord.ai_document_type,
      //   modelUsed: imageRecord.ai_model_used,
      //   processedAt: imageRecord.ai_processed_at,
      //   humanVerified: imageRecord.human_verified,
      //   humanVerifiedAt: imageRecord.human_verified_at,
      //   fieldCorrections: imageRecord.field_corrections
      // } : null,
    };
 
    return new Response(JSON.stringify(response, null, 2), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
 
  } catch (err) {
    console.error('GET error:', err);
    return new Response(JSON.stringify({ error: err.message }, null, 2), { status: 500 });
  }
}
 
 