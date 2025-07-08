import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const runtime = "nodejs";

import formidable from "formidable";
import fs from "fs/promises";
import path from "path";
import { Readable } from "stream";
import { convertFileToPDF } from "@/utils/convertFileToPDF";
import { extractTextFromImage } from "@/utils/azureOcr";
// import { createNotification } from "@/lib/services/notificationService";

export const config = {
  api: {
    bodyParser: false,
  },
};

function webStreamToNodeReadable(webStream) {
  return Readable.from(webStream);
}

async function parseForm(req) {
  const uploadsDir = path.join(process.cwd(), "public/uploads");
  await fs.mkdir(uploadsDir, { recursive: true });

  const form = formidable({
    uploadDir: uploadsDir,
    keepExtensions: true,
    multiples: true,
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

// function extractFieldsFromOCR_old(ocrText = "") {
//   const vendorName = ocrText.match(/Vendor[:\s]+([^\n]+)/i)?.[1]?.trim() || null;
//   const invoiceDate = ocrText.match(/Date[:\s]+(\d{4}-\d{2}-\d{2})/)?.[1] || null;
//   const dueDate = ocrText.match(/Due Date[:\s]+(\d{4}-\d{2}-\d{2})/)?.[1] || null;
//   const totalAmount = parseFloat(ocrText.match(/Total Amount[:\s]+([\d.,]+)/i)?.[1]?.replace(/,/g, "") || 0);

//   const itemMatch = ocrText.match(/(Professional Services|Description)[:\s]*(.*?)\s+(\d+)\s+([\d.]+)\s+([\d.]+)/i);
//   const description = itemMatch?.[1] || null;
//   const quantity = parseInt(itemMatch?.[3]) || null;
//   const unitPrice = parseFloat(itemMatch?.[4]) || null;

//   return {
//     description,
//     quantity,
//     unit_price: unitPrice,
//     total_amount: totalAmount,
//     gl_code: null,
//     vendor_name: vendorName,
//     invoice_date: invoiceDate ? new Date(invoiceDate) : null,
//     due_date: dueDate ? new Date(dueDate) : null,
//     ocr_confidence: 0.95,
//   };
// }

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
      cleaned.match(/Total Amount[:\s]*\$?([\d,]+\.\d{2})/i)?.[1]?.replace(/,/g, "")
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


export async function POST(request) {
  try {
    const nodeReadable = webStreamToNodeReadable(request.body);
    const req = Object.assign(nodeReadable, {
      headers: Object.fromEntries(request.headers.entries()),
    });

    const { fields, files } = await parseForm(req);

    const batchName = Array.isArray(fields.batchName)
      ? fields.batchName[0]
      : fields.batchName;

    const method = Array.isArray(fields.method)
      ? fields.method[0]
      : fields.method || "direct_method";

    if (!batchName) {
      return NextResponse.json(
        { success: false, error: "Order name is required" },
        { status: 400 }
      );
    }

    const uploadedFiles = Array.isArray(files.file)
      ? files.file
      : files.file
      ? [files.file]
      : [];
    if (!uploadedFiles.length) {
      return NextResponse.json(
        { success: false, error: "No files uploaded" },
        { status: 400 }
      );
    }

        const organizationIdHeader = request.headers.get("x-organization-id");

if (!organizationIdHeader) {
  return NextResponse.json(
    { error: "Organization ID is required" },
    { status: 400 }
  );
}

const organizationId = parseInt(organizationIdHeader, 10);

if (isNaN(organizationId)) {
  return NextResponse.json(
    { error: "Invalid Organization ID" },
    { status: 400 }
  );
}


    let batch = await prisma.batch.findFirst({
      where: { batchname: batchName, organizationId: organizationId },
    });

    if (!batch) {
      batch = await prisma.batch.create({
        data: {
          batchname: batchName,
          organizationId: organizationId,
          method: method,
        },
      });
    }

    const batchDir = path.join(process.cwd(), "public/uploads", batchName);
    await fs.mkdir(batchDir, { recursive: true });

   const allExistingImages = await prisma.imagecollections.findMany({
where: {
  imagename: {
    in: uploadedFiles.map((f) => f.originalFilename),
  },
  isactive: true,
},
  select: { imagename: true },
});
const existingGlobalNames = new Set(
  allExistingImages.map((img) => img.imagename)
);

const filteredFiles = uploadedFiles.filter(
  (file) => !existingGlobalNames.has(file.originalFilename)
);
    if (filteredFiles.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "No new images to upload.",
        },
        { status: 400 }
      );
    }


    const results = [];
    const skippedImages = [];

    for (const file of uploadedFiles) {
      const imageName = file.originalFilename;

      if (existingGlobalNames.has(imageName)) {
        skippedImages.push({
          imagename: imageName,
          message: `Image '${imageName}' already exists. Skipping upload.`,
        });
        continue;
      }

      const finalFilePath = path.join(batchDir, imageName);
      await fs.rename(file.filepath, finalFilePath);

      let ocrText = "";
      try {
        ocrText = (await extractTextFromImage(finalFilePath)) || "";
        console.log("OCR extraction successful:", ocrText);
      } catch (e) {
        console.error("OCR extraction failed:", e);
        ocrText = "";
      }

      console.log("ocrText", ocrText);

      const pdfOutputPath = await convertFileToPDF(
          finalFilePath,
          imageName
        );

      try {
        await prisma.imagecollections.create({
          data: {
            batchname: batchName,
            // method: method,
            imagename: imageName,
            filename: `${batchName}/${imageName}`,
            image: pdfOutputPath
              ? `/uploads/${batchName}/${path.basename(pdfOutputPath)}`
              : null,
            organizationId: organizationId,
            ocr_full_text: ocrText,
            status: 'not processed',
          },
        });

        const parsedFields = extractFieldsFromOCR(ocrText);


        // Populate results array for response
        // results.push({
        //   imagename: imageName,
        //   imagepath: `/uploads/${batchName}/${imageName}`,
        //   pdfconvert: pdfOutputPath
        //     ? `/uploads/${batchName}/${path.basename(pdfOutputPath)}`
        //     : null,
        // });
      } catch (err) {
        console.error("Error saving image or fields:", err);
        continue; // Skip to next file if there's an error
      }
    }

    // Create notification once after processing all files
    // const userId = req.headers["x-user-id"];
    // if (userId) {
    //   try {
    //     await createNotification({
    //       organizationId,
    //       userId,
    //       role: "admin",
    //       message: `New order ${batchName} created with ${results.length} invoice(s).`,
    //       url: `/notifications`,
    //       type: "success",
    //     });
    //   } catch (err) {
    //     console.error("❌ Notification creation failed:", err);
    //   }
    // } else {
    //   console.error("User ID is missing from headers");
    // }

    return NextResponse.json({
      success: true,
      batch: batchName,
      uploaded: results,
      skipped: skippedImages,
    });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const organizationIdHeader = request.headers.get("x-organization-id");

if (!organizationIdHeader) {
  return NextResponse.json(
    { error: "Organization ID is required" },
    { status: 400 }
  );
}

const organizationId = parseInt(organizationIdHeader, 10);

if (isNaN(organizationId)) {
  return NextResponse.json(
    { error: "Invalid Organization ID" },
    { status: 400 }
  );
}


    const batches = await prisma.batch.findMany({
      where: {
        isdelete: false,
        organizationId: organizationId,
      },
      include: {
        imagecollection: {
          where: {
            isdelete: false,
          },
        },
        _count: {
          select: {
            imagecollection: {
              where: {
                isdelete: false, 
              },
            },
          },
        },
      },
    });

    const result = batches.map((batch) => ({
      ...batch,
      imagescount: batch._count.imagecollection,
    }));

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Error fetching batch data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
