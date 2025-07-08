import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";
import formidable from "formidable";
import { Readable } from "stream";
import fs from "fs/promises";
import path from "path";
import { convertFileToPDF } from "@/utils/convertFileToPDF";
import { extractTextFromImage } from "@/utils/azureOcr";
import { createNotification } from "@/lib/services/notificationService";

const prisma = new PrismaClient();

function extractFieldsFromOCR(ocrText = "") {
  const cleaned = ocrText.replace(/\s+/g, " ").trim();

  const vendorName =
    cleaned.match(/Vendor[:\s]*([A-Za-z0-9\s]+)/i)?.[1]?.trim() ?? null;

  const invoiceDate =
    cleaned.match(/Date[:\s]*(\d{4}-\d{2}-\d{2})/)?.[1] ??
    cleaned.match(/(\w+\s\d{1,2},\s\d{4})/)?.[0];

  const invoiceDateParsed = invoiceDate
    ? new Date(Date.parse(invoiceDate))
    : null;

  const totalAmount =
    parseFloat(
      cleaned
        .match(/Total Amount[:\s]*\$?([\d,]+\.\d{2})/i)?.[1]
        ?.replace(/,/g, "")
    ) ??
    parseFloat(
      cleaned.match(/TOTAL[:\s]*\$?([\d,]+\.\d{2})/i)?.[1]?.replace(/,/g, "")
    ) ??
    0;

  // Line item block
  const lineItemMatch = cleaned.match(
    /(Professional Services|Software Development|Consulting|Training|Technical Support|Equipment Rental)\s+(\d+)\s*\$?([\d,.]+)\s*\$?([\d,.]+)/i
  );

  const description = lineItemMatch?.[1]?.trim() ?? null;
  const quantity = parseInt(lineItemMatch?.[2]) || null;
  const unitPrice = parseFloat(lineItemMatch?.[3]?.replace(/,/g, "")) || null;

  return {
    description,
    quantity,
    unit_price: unitPrice,
    total_amount: totalAmount,
    gl_code: null,
    vendor_name: vendorName,
    invoice_date: invoiceDateParsed,
    due_date: null,
    ocr_confidence: 0.95,
  };
}

export async function PATCH(request, { params }) {
  try {
    const id = params.orderid;
    const body = await request.json();
    const { isdelete } = body;

    if (typeof isdelete !== "boolean") {
      return NextResponse.json(
        { error: "Invalid or missing 'isdelete' in request body" },
        { status: 400 }
      );
    }

    const organizationId = request.headers.get("x-organization-id");
    if (!organizationId) {
      return NextResponse.json(
        { error: "Organization ID is required" },
        { status: 400 }
      );
    }

    // Validate batch existence before updating
    const batch = await prisma.batch.findUnique({
      where: {
        id: id,
      },
    });

    if (!batch) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    if (batch.organizationid !== organizationId) {
      return NextResponse.json(
        { error: "Unauthorized: Order does not belong to this organization" },
        { status: 403 }
      );
    }

    await prisma.batch.update({
      where: { id: id },
      data: { isdelete },
    });

    const deletedImages = await prisma.imagecollection.updateMany({
      where: {
        batchid: id,
        organizationid: organizationId,
        isdelete: false,
      },
      data: { isdelete: true },
    });

    const uploadsRoot = path.join(process.cwd(), "public/uploads");
    const batchFolder = path.join(uploadsRoot, batch.batchname);

    try {
      await fs.rm(batchFolder, { recursive: true, force: true });
    } catch (err) {
      if (err.code !== "ENOENT")
        console.error("Error deleting batch folder:", batchFolder, err);
    }

    // Create notification
    const userId = request.headers.get("x-user-id");
    if (userId) {
      try {
        const action = isdelete ? "soft-deleted" : "restored";
        const message = `Order ${batch.batchname} ${action} with ${deletedImages.count} invoice(s) affected.`;

        await createNotification({
          organizationId,
          userId,
          role: "admin",
          message,
          url: `/notifications`,
          type: "error",
        });
      } catch (err) {
        console.error("❌ Notification creation failed:", err);
      }
    } else {
      console.error("User ID is missing from headers");
    }

    return NextResponse.json(
      {
        success: true,
        imagesSoftDeleted: deletedImages.count,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in PATCH /orders-creation/[id]:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};

function parseForm(req) {
  return new Promise((resolve, reject) => {
    const form = formidable({ multiples: true });
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

function webRequestToNodeRequest(webRequest) {
  const readable = Readable.from(webRequest.body);
  readable.headers = {};
  for (const [key, value] of webRequest.headers.entries()) {
    readable.headers[key.toLowerCase()] = value;
  }
  readable.method = webRequest.method;
  return readable;
}

export async function PUT(request, context) {
  const { orderid } = await context.params;

  try {
    const nodeReq = webRequestToNodeRequest(request);
    const { fields, files } = await parseForm(nodeReq);
    
    const newBatchName = fields.batchname?.[0] || null;
    const isdelete = fields.isdelete?.[0] === "true";
    const removeImageNames = Array.isArray(fields.removeImages)
      ? fields.removeImages
      : fields.removeImages
      ? [fields.removeImages]
      : [];
    const addImages = Array.isArray(files.addImages)
      ? files.addImages
      : files.addImages
      ? [files.addImages]
      : [];
    const method = fields.method?.[0] || null;
    const organizationId = request.headers.get("x-organization-id");

    if (!organizationId) {
      return NextResponse.json(
        { error: "Organization ID is required" },
        { status: 400 }
      );
    }

    const batch = await prisma.batch.findUnique({ where: { id: orderid } });
    if (!batch || batch.organizationid !== organizationId) {
      return NextResponse.json(
        { error: "Order not found or unauthorized" },
        { status: 404 }
      );
    }

    const oldBatchName = batch.batchname;
    const uploadsRoot = path.join(process.cwd(), "public/uploads");
    const oldFolderPath = path.join(uploadsRoot, oldBatchName);
    const newFolderPath = newBatchName
      ? path.join(uploadsRoot, newBatchName)
      : oldFolderPath;

    const prismaUpdates = [];

    if (newBatchName && oldBatchName !== newBatchName) {
      try {
        await fs.rename(oldFolderPath, newFolderPath);
      } catch (err) {
        if (err.code === "ENOENT") {
          return NextResponse.json(
            { error: "Old folder does not exist" },
            { status: 400 }
          );
        }
        return NextResponse.json(
          { error: "Failed to rename folder" },
          { status: 500 }
        );
      }

      prismaUpdates.push(
        prisma.batch.update({
          where: { id: orderid },
          data: { batchname: newBatchName },
        })
      );

      const images = await prisma.imagecollection.findMany({
        where: {
          batchid: orderid,
          organizationid: organizationId,
          isdelete: false,
        },
      });

      const updateImagePromises = images.map((img) =>
        prisma.imagecollection.update({
          where: { id: img.id },
          data: {
            batchname: newBatchName,
            imagepath: img.imagepath.replace(
              `/${oldBatchName}/`,
              `/${newBatchName}/`
            ),
            pdfconvert: img.pdfconvert?.replace(
              `/${oldBatchName}/`,
              `/${newBatchName}/`
            ),
          },
        })
      );

      await Promise.all(updateImagePromises);
    }

    let removedCount = 0;

    if (removeImageNames.length > 0) {
      const imagesToRemove = await prisma.imagecollection.findMany({
        where: {
          batchid: orderid,
          id: { in: removeImageNames },
          organizationid: organizationId,
          isdelete: false,
        },
      });

      for (const img of imagesToRemove) {
        const localImagePath = path.join(
          process.cwd(),
          "public",
          "uploads",
          img.batchname,
          img.imagename
        );
        const localPdfPath = img.pdfconvert
          ? path.join(process.cwd(), "public", img.pdfconvert)
          : null;

        // Delete image file
        try {
          await fs.unlink(localImagePath);
        } catch (err) {
          if (err.code !== "ENOENT")
            console.error("Error deleting image file:", localImagePath, err);
        }

        // Delete converted PDF if it exists
        if (localPdfPath) {
          try {
            await fs.unlink(localPdfPath);
          } catch (err) {
            if (err.code !== "ENOENT")
              console.error("Error deleting PDF file:", localPdfPath, err);
          }
        }
      }

      // Soft-delete from database
      const deleteResult = await prisma.imagecollection.updateMany({
        where: {
          batchid: orderid,
          id: { in: removeImageNames },
          organizationid: organizationId,
          isdelete: false,
        },
        data: { isdelete: true },
      });

      removedCount = deleteResult.count;
    }

    const allExistingImages = await prisma.imagecollection.findMany({
      where: {
        imagename: {
          in: addImages.map((f) => f.originalFilename),
        },
        isdelete: false,
      },
      select: { imagename: true },
    });

    const existingGlobalNames = new Set(
      allExistingImages.map((img) => img.imagename)
    );
    const skippedImages = [];
    let addedCount = 0;

    for (const file of addImages) {
      const imageName = file.originalFilename;

      if (existingGlobalNames.has(imageName)) {
        skippedImages.push({
          imagename: imageName,
          message: `Image '${imageName}' already exists. Skipping upload.`,
        });
        continue;
      }

      const fileBuffer = await fs.readFile(file.filepath);
      await fs.mkdir(newFolderPath, { recursive: true });

      const uploadPath = path.join(newFolderPath, imageName);
      await fs.writeFile(uploadPath, fileBuffer);

      let ocrText = "";
      try {
        ocrText = (await extractTextFromImage(uploadPath)) || "";
      } catch (err) {
        console.error("OCR extraction failed:", err);
      }

      const convertedPDFPath = await convertFileToPDF(uploadPath, imageName);
      const pdfRelativePath = convertedPDFPath
        ? convertedPDFPath
            .replace(path.join(process.cwd(), "public"), "")
            .replace(/\\/g, "/")
        : null;

      const imageRecord = await prisma.imagecollection.create({
        data: {
          batchid: orderid,
          imagename: imageName,
          batchname: newBatchName || oldBatchName,
          organizationid: organizationId,
          imagepath: `/uploads/${newBatchName || oldBatchName}/${imageName}`,
          pdfconvert: pdfRelativePath,
          ocrtext: ocrText,
          method,
        },
      });

      const parsedFields = extractFieldsFromOCR(ocrText);

      await prisma.imageCollectionField.create({
        data: {
          imageId: imageRecord.id,
          ...parsedFields,
        },
      });

      addedCount++;
    }

    // Execute batch updates (batch rename, if any)
    if (prismaUpdates.length > 0) await Promise.all(prismaUpdates);

    // Create notification
    const userId = request.headers.get("x-user-id");
    if (userId) {
      let messageParts = [];
      if (newBatchName && oldBatchName !== newBatchName) {
        messageParts.push(`Order renamed from ${oldBatchName} to ${newBatchName}`);
      }
      if (addedCount > 0) {
        messageParts.push(`${addedCount} invoice(s) added`);
      }
      if (removedCount > 0) {
        messageParts.push(`${removedCount} invoice(s) removed`);
      }
      if (messageParts.length > 0) {
        try {
          const message =
            messageParts.length > 1
              ? `Order ${newBatchName || oldBatchName} updated: ${messageParts.join(", ")}.`
              : `Order ${newBatchName || oldBatchName} updated: ${messageParts[0]}.`;

          await createNotification({
            organizationId,
            userId,
            role: "admin",
            message,
            url: `/notifications`,
            type: "success",
          });
        } catch (err) {
          console.error("❌ Notification creation failed:", err);
        }
      } else {
        console.log("No changes made to batch; no notification created.");
      }
    } else {
      console.error("User ID is missing from headers");
    }

    return NextResponse.json({
      success: true,
      renamed: !!newBatchName && oldBatchName !== newBatchName,
      newBatchName: newBatchName || oldBatchName,
      imagesAdded: addedCount,
      imagesRemoved: removedCount,
      skipped: skippedImages,
    });
  } catch (err) {
    console.error("PUT /api/orders/{orderid} error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
