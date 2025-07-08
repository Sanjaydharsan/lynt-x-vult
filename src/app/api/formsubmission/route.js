import { PrismaClient } from "@/generated/prisma";
import { logUserAction } from "../services/logservice";
const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const organizationId = request.headers.get("x-organization-id");

    if (!organizationId) {
      return new Response(
        JSON.stringify({ error: "Required headers missing" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const orgId = parseInt(organizationId);

    // Step 1: Get all batches for this organization
    const batches = await prisma.batch.findMany({
      where: { organizationId: orgId },
      orderBy: { id: "desc" },
    });

    // Step 2: Fetch imagecollections for each batch
    const results = await Promise.all(
      batches.map(async (batch) => {
        const images = await prisma.imagecollections.findMany({
          where: {
            batchname: batch.batchname,
            organizationId: orgId,
          },
        });

        return {
          ...batch,
          images,
        };
      })
    );

    // Step 3: Compute summary counts
    let totalImageCollections = 0;
    let processedCount = 0;
    let notProcessedCount = 0;
    let processedTodayCount = 0;
    let totalQcImageCollections = 0;
    let completedQcImageCollections = 0;
    let approvedImageCollections = 0;
    let rejectedImageCollections = 0;

    // Get today's start and end time
    const now = new Date();
    const startOfToday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );
    const endOfToday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    );
    results.forEach((batch) => {
      batch.images.forEach((image) => {
        totalImageCollections++;

        const status = image.status?.toLowerCase();

        if (status === "processed") {
          processedCount++;

          const processedDate = image.processed_date
            ? new Date(image.processed_date)
            : null;
          if (
            processedDate &&
            processedDate >= startOfToday &&
            processedDate < endOfToday
          ) {
            processedTodayCount++;
          }
        } else if (status === "not processed") {
          // Explicitly check for "not processed"
          notProcessedCount++;
        }

        if (status === "approve") {
          approvedImageCollections++;
        }

        if (status === "reject") {
          rejectedImageCollections++;
        }

        if (image.qcimagestatus === false) {
          totalQcImageCollections++;
        }

        if (image.qcimagestatus === true) {
          completedQcImageCollections++;
        }
      });
    });
    const pendingQcImageCollections = Math.max(
      totalQcImageCollections - completedQcImageCollections,
      0
    );

    // Step 4: Return the response
    return new Response(
      JSON.stringify({
        summary: {
          totalImageCollections,
          processedCount,
          notProcessedCount,
          processedTodayCount,
          totalQcImageCollections,
          completedQcImageCollections,
          pendingQcImageCollections,
          approvedImageCollections,
          rejectedImageCollections,
        },
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Error:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}

function parseJsonArrayOrEmpty(value) {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function pushToJsonArray(existing, newItem) {
  const arr = parseJsonArrayOrEmpty(existing);

  const exists = arr.some(
    (item) =>
      item &&
      typeof item === "object" &&
      item.userId === newItem.userId &&
      item.templateId === newItem.templateId
  );

  if (!exists) {
    arr.push(newItem);
  }

  return JSON.stringify(arr);
}

export async function POST(request) {
  try {
    const organizationId = request.headers.get("x-organization-id");
    const userId = request.headers.get("x-user-id");
    const role = request.headers.get("x-role");

    if (!organizationId || !userId || !role) {
      return new Response(
        JSON.stringify({ error: "Required headers missing" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const parsedOrganizationId = parseInt(organizationId, 10);
    if (isNaN(parsedOrganizationId)) {
      return new Response(
        JSON.stringify({ error: "Organization ID must be a valid integer" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const body = await request.json();
    const { image_name, batch_name, level, next_level, user_id, fields } = body;

    if (
      !image_name ||
      !batch_name ||
      !level ||
      typeof next_level === "undefined" ||
      !user_id ||
      !fields ||
      typeof fields !== "object"
    ) {
      return new Response(
        JSON.stringify({ error: "Missing or invalid input." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const submissions = Object.entries(fields).map(([key, value]) => ({
      image_name,
      batch_name,
      level: String(level),
      user_id,
      organizationId: parsedOrganizationId,
      field_name: key,
      field_value:
        typeof value === "object" ? JSON.stringify(value) : String(value),
    }));

    const result = await prisma.$transaction(async (tx) => {
      const created = await tx.formSubmission.createMany({ data: submissions });

      const imageCollection = await tx.imagecollections.findFirst({
        where: {
          batchname: batch_name,
          image: image_name,
          userid: user_id,
          imagestatus: false,
        },
      });

      if (!imageCollection) {
        throw new Error("No matching image collection found");
      }

      const updateData = {
        processed_date: new Date(),
        status: "processed",
        qcimagestatus: false,
        completed: pushToJsonArray(imageCollection.completed, {
          userId: user_id,
          templateId: level,
        }),
      };

      if (next_level !== 0) {
        updateData.assigned = pushToJsonArray(imageCollection.assigned, {
          userId: user_id,
          templateId: next_level,
        });
      } else {
        updateData.imagestatus = true;
      }

      await tx.imagecollections.update({
        where: { id: imageCollection.id },
        data: updateData,
      });

      await logUserAction({
        userid: userId,
        organizationid: parsedOrganizationId,
        role,
        action: `Submitted form for image '${image_name}' in batch '${batch_name}', level ${level} with ${
          Object.keys(fields).length
        } field(s)`,
      });

      return created;
    });

    return new Response(
      JSON.stringify({
        message: "Form submissions created and image collection updated.",
        count: result.count,
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("POST error:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
