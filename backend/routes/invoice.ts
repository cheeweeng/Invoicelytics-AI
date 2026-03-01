import { Router } from 'express';
import { GoogleGenAI, Type } from '@google/genai';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

const router = Router();

// Get API key from environment (loaded by server.ts)
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error('❌ GEMINI_API_KEY is not set!');
  process.exit(1);
}

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey });

const extractSchema = z.object({
  base64Data: z.string().min(1),
  mimeType: z.enum(['application/pdf', 'image/png', 'image/jpeg']),
  fileName: z.string().optional(),
});

const INVOICE_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    invoiceNumber: { type: Type.STRING, description: "Invoice number" },
    date: { type: Type.STRING, description: "Date YYYY-MM-DD" },
    vendorName: { type: Type.STRING, description: "Vendor name" },
    totalAmount: { type: Type.NUMBER, description: "Total amount" },
    currency: { type: Type.STRING, description: "Currency code" },
    category: { type: Type.STRING, description: "Expense category" },
    taxAmount: { type: Type.NUMBER, description: "Tax amount" },
    summary: { type: Type.STRING, description: "Brief summary" },
    paymentTerms: { type: Type.STRING, description: "Payment terms" },
  },
  required: ["invoiceNumber", "date", "vendorName", "totalAmount", "currency", "category", "paymentTerms"],
};

router.post('/extract', async (req, res) => {
  const requestId = uuidv4();
  
  try {
    const validation = extractSchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ 
        error: 'Invalid input', 
        details: validation.error.errors 
      });
    }

    const { base64Data, mimeType, fileName } = validation.data;

    const sizeInBytes = Buffer.byteLength(base64Data, 'base64');
    if (sizeInBytes > 20 * 1024 * 1024) {
      return res.status(413).json({ error: 'File too large (max 20MB)' });
    }

    console.log(`[${requestId}] Processing invoice...`);

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: {
        parts: [
          {
            inlineData: { mimeType, data: base64Data },
          },
          {
            text: "Analyze this invoice and extract key data points.",
          },
        ],
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: INVOICE_SCHEMA,
        temperature: 0.1,
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from Gemini");
    }

    const data = JSON.parse(text);
    
    console.log(`[${requestId}] Success`);
    res.json({ success: true, data, requestId });

  } catch (error) {
    console.error(`[${requestId}] Failed:`, error);
    res.status(500).json({ 
      error: 'Extraction failed',
      requestId 
    });
  }
});

export default router;