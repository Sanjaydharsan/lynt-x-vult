
import axios from "axios";
import fs from "fs/promises";

console.log("OCR Endpoint:", process.env.AZURE_OCR_ENDPOINT);
console.log("OCR Key:", process.env.AZURE_OCR_KEY ? "[MASKED]" : "undefined");



const endpoint = process.env.AZURE_OCR_ENDPOINT;
const apiKey = process.env.AZURE_OCR_KEY;

export async function extractTextFromImage(filePath) {
  const imageBuffer = await fs.readFile(filePath);

  try {
    const response = await axios.post(
      `${endpoint}/vision/v3.2/read/analyze`,
      imageBuffer,
      {
        headers: {
          "Content-Type": "application/octet-stream",
          "Ocp-Apim-Subscription-Key": apiKey,
        },
      }
    );

    const operationLocation = response.headers["operation-location"];

    let result = null;
    for (let i = 0; i < 10; i++) {
      await new Promise((r) => setTimeout(r, 2000));
      const statusRes = await axios.get(operationLocation, {
        headers: { "Ocp-Apim-Subscription-Key": apiKey },
      });

      if (statusRes.data.status === "succeeded") {
        result = statusRes.data.analyzeResult.readResults
          .map((r) => r.lines.map((l) => l.text).join("\n"))
          .join("\n");
        break;
      } else if (statusRes.data.status === "failed") {
        throw new Error("OCR failed");
      }
    }

    return result || "OCR result not available";
  } catch (err) {
    console.error("Azure OCR Error:", err.message);
    return null;
  }
}
