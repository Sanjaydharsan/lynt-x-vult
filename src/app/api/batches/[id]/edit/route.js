import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { convertFileToPDF } from "@/utils/convertFileToPDF";

const prisma = new PrismaClient();

export async function PUT(request, { params }) {
  const batchId = Number(params.id);

  try {
    const formData = await request.formData();

    const batchname = formData.get("batchname");
    const method = formData.get("method");

    if (!batchname) {
      return NextResponse.json(
        { error: "Batch name is required" },
        { status: 400 }
      );
    }

    const removeDocuments = formData.getAll("removeDocuments").map(Number);
    const uploadedFiles = formData.getAll("addDocuments");

    // 1. Update batch
    const updatedBatch = await prisma.batch.update({
      where: { id: batchId },
      data: {
        batchname,
        method: method || undefined,
        updatedat: new Date(),
      },
    });

    // 2. Soft delete removed documents
    if (removeDocuments.length > 0) {
      await prisma.imagecollections.updateMany({
        where: { id: { in: removeDocuments } },
        data: {
          isactive: false,
          updatedat: new Date(),
        },
      });
    }

    // 3. Handle uploads
    const uploadDir = path.join(process.cwd(), "public/uploads", batchname);
    await mkdir(uploadDir, { recursive: true });

    for (const file of uploadedFiles) {
      if (!file || typeof file === "string") continue;

      try {
        const buffer = Buffer.from(await file.arrayBuffer());
        const originalFilename = file.name;
        const originalPath = path.join(uploadDir, originalFilename);

        // Save original file
        await writeFile(originalPath, buffer);

        // Convert to PDF
        const pdfOutputPath = await convertFileToPDF(originalPath, originalFilename);
        const imageUrl = pdfOutputPath
          ? `/uploads/${batchname}/${path.basename(pdfOutputPath)}`
          : `/uploads/${batchname}/${originalFilename}`;

        await prisma.imagecollections.create({
          data: {
            batchname,
            filename: originalFilename,
            imagename: originalFilename,
            image: imageUrl,
            status: "new",
            isactive: true,
            organizationId: updatedBatch.organizationId,
            createdat: new Date(),
            updatedat: new Date(),
          },
        });

        console.log("✅ Uploaded and converted:", imageUrl);
      } catch (err) {
        console.error("❌ Failed to process file:", err);
      }
    }

    return NextResponse.json(
      { message: "Batch updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Edit batch error:", error);
    return NextResponse.json(
      { error: "Failed to update batch" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
