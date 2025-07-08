import { PrismaClient } from "@/generated/prisma";
import { logUserAction } from "../services/logservice";
const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const organizationId = request.headers.get("x-organization-id");
    const userId = request.headers.get("x-user-id");
    const role = request.headers.get("x-role");

    if (!organizationId || !userId || !role) {
      return new Response(
        JSON.stringify(
          {
            error:
              "Required headers missing (x-organization-id, x-user-id, x-role)",
          },
          null,
          2
        ),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const parsedOrganizationId = parseInt(organizationId, 10);
    if (isNaN(parsedOrganizationId)) {
      return new Response(
        JSON.stringify(
          { error: "Organization ID must be a valid integer" },
          null,
          2
        ),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const body = await request.json();
    const { image_name, batch_name, level, user_id, fields, status } = body;

    if (
      !image_name ||
      !batch_name ||
      !level ||
      !user_id ||
      !fields ||
      typeof fields !== "object"
    ) {
      return new Response(
        JSON.stringify(
          { error: "Missing or invalid fields in request body" },
          null,
          2
        ),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const levelString = level;
    const fieldEntries = Object.entries(fields);

    for (const [field_name, field_value] of fieldEntries) {
      await prisma.qcFormSubmission.updateMany({
        where: {
          field_name,
          batch_name,
          image_name,
          level: levelString,
          userid: user_id,
          organizationid: parsedOrganizationId,
          isactive: true,
        },
        data: {
          isactive: false,
        },
      });

      await prisma.qcFormSubmission.create({
        data: {
          image_name,
          batch_name,
          level: levelString,
          userid: user_id,
          field_name,
          field_value,
          organizationid: parsedOrganizationId,
          isactive: true,
        },
      });
    }

    // 🔁 Convert image_name from .pdf to .png for matching imagecollections
    const pngImageName = image_name.replace(/\.pdf$/i, ".png");

    // 🔁 Update imagecollections table
    const imageUpdateResult = await prisma.imagecollections.updateMany({
      where: {
        imagename: pngImageName,
      },
      data: {
        qcimagestatus: true,
        status: status || "approved",
      },
    });

    console.log(`Updated ${imageUpdateResult.count} imagecollections row(s)`);

    if (imageUpdateResult.count === 0) {
      console.warn(
        `⚠️ No imagecollections row matched for update. Check filename (${pngImageName}), batchname (${batch_name}), organizationId (${parsedOrganizationId})`
      );
    }

    await logUserAction({
      userid: userId,
      organizationid: parsedOrganizationId,
      role,
      action: `Submitted QC form for image '${image_name}' in batch '${batch_name}' at level ${levelString}, updated ${fieldEntries.length} field(s)`,
    });

    return new Response(
      JSON.stringify({
        message: "QC form submission and image status updated successfully",
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error in QC form submission:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  } finally {
    await prisma.$disconnect();
  }
}
