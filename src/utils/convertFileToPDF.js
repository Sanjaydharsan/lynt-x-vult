import libre from 'libreoffice-convert';
import { PDFDocument } from 'pdf-lib';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs/promises';
import { promisify } from 'util';

libre.convertAsync = promisify(libre.convert);

export async function convertFileToPDF(inputPath, originalFilename, outputDir = null) {
  const ext = path.extname(originalFilename).toLowerCase();
  const baseName = path.parse(originalFilename).name;
  const finalOutputDir = outputDir || path.dirname(inputPath);
  const outputPDFPath = path.join(finalOutputDir, `${baseName}.pdf`);

  try {
    if (ext === '.pdf') {
      return inputPath; 
    }

    if (['.png', '.jpg', '.jpeg', '.tiff', '.tif'].includes(ext)) {
      const pdfDoc = await PDFDocument.create();

      let processedBuffer;
      let image;

      if (ext === '.png') {
        processedBuffer = await sharp(inputPath).toBuffer();
        image = await pdfDoc.embedPng(processedBuffer);
      } else if (['.jpg', '.jpeg'].includes(ext)) {
        processedBuffer = await sharp(inputPath).toBuffer();
        image = await pdfDoc.embedJpg(processedBuffer);
      } else if (['.tif', '.tiff'].includes(ext)) {
        processedBuffer = await sharp(inputPath).jpeg().toBuffer();
        image = await pdfDoc.embedJpg(processedBuffer);
      } else {
        throw new Error(`Unsupported image format: ${ext}`);
      }

      const page = pdfDoc.addPage([image.width, image.height]);
      page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });

      const pdfBytes = await pdfDoc.save();
      await fs.writeFile(outputPDFPath, pdfBytes);
      return outputPDFPath;
    }

    if (['.docx', '.pptx', '.txt', '.doc', '.ppt', '.odt', '.ods'].includes(ext)) {
      const fileBuffer = await fs.readFile(inputPath);
      const pdfBuf = await libre.convertAsync(fileBuffer, '.pdf', undefined);
      await fs.writeFile(outputPDFPath, pdfBuf);
      return outputPDFPath;
    }

    throw new Error(`Unsupported file type: ${ext}`);
  } catch (err) {
    console.error(`Conversion failed for ${originalFilename}:`, err);
    return null;
  }
}
