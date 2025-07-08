import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Document type detection based on template fields

const detectDocumentType = (templateFields) => {
  const fieldNames = templateFields.map(f => f.label.toLowerCase());
  if (fieldNames.some(name => name.includes('invoice') || name.includes('bill'))) {
    return 'invoice';
  } else if (fieldNames.some(name => name.includes('contract') || name.includes('agreement'))) {
    return 'contract';
  } else if (fieldNames.some(name => name.includes('receipt'))) {
    return 'receipt';
  } else if (fieldNames.some(name => name.includes('po') || name.includes('purchase'))) {
    return 'purchase_order';
  }
  return 'document';
};

// Calculate confidence score based on AI response
const calculateConfidenceScore = (extractedFields, ocrText) => {
  if (!extractedFields || Object.keys(extractedFields).length === 0) {
    return 0;
  }

  let totalFields = Object.keys(extractedFields).length;
  let filledFields = Object.values(extractedFields).filter(value => 
    value !== null && value !== undefined && value !== ''
  ).length;

  // Base confidence on fill rate
  let confidence = (filledFields / totalFields) * 100;

  // Adjust based on text length (more text usually means better extraction)
  if (ocrText.length > 1000) {
    confidence = Math.min(confidence + 10, 100);
  } else if (ocrText.length < 200) {
    confidence = Math.max(confidence - 20, 0);
  }

  return Math.round(confidence);
};

// Main field extraction function
export async function extractFieldsFromOCR(ocrText, templateFields) {
  if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY.includes('your-openai-api-key')) {
    console.warn('⚠️ OpenAI API key not configured, skipping AI extraction');
    return { extractedFields: {}, confidence: 0 };
  }

  if (!ocrText || !templateFields || templateFields.length === 0) {
    console.warn('⚠️ Missing OCR text or template fields for AI extraction');
    return { extractedFields: {}, confidence: 0 };
  }

  try {
    const documentType = detectDocumentType(templateFields);
    
    // Build field list with descriptions
    const fieldList = templateFields.map(field => {
      const properties = typeof field.properties === 'string' 
        ? JSON.parse(field.properties) 
        : field.properties || {};
      
      return {
        name: field.label,
        type: field.type,
        description: properties.description || properties.placeholder || '',
        required: properties.required || false
      };
    });

    // Create structured prompt
    const prompt = `
Extract the following fields from this ${documentType} document. Return ONLY valid JSON.

FIELDS TO EXTRACT:
${fieldList.map(f => 
  `- "${f.name}" (${f.type}): ${f.description} ${f.required ? '[REQUIRED]' : '[OPTIONAL]'}`
).join('\n')}

EXTRACTION RULES:
- Use exact field names as JSON keys
- If a field is not found or unclear, use null
- For dates: use YYYY-MM-DD format
- For amounts: use numbers without currency symbols or commas
- For text: extract exactly as written, trim whitespace
- For emails: ensure proper email format
- For phone numbers: include area code if available

DOCUMENT TEXT:
${ocrText.substring(0, 4000)} ${ocrText.length > 4000 ? '...[truncated]' : ''}

Return JSON only, no explanations:`;

    console.log('🤖 Sending request to OpenAI for field extraction...');
    
    const response = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4o",
      messages: [
        {
          role: "system", 
          content: `You are a highly accurate document processing AI specializing in ${documentType} data extraction. Extract fields precisely and return only valid JSON. Never include explanations or markdown formatting.`
        },
        {
          role: "user", 
          content: prompt
        }
      ],
      temperature: parseFloat(process.env.OPENAI_TEMPERATURE) || 0.1,
      max_tokens: 1500,
      response_format: { type: "json_object" }
    });

    const aiResponse = response.choices[0].message.content;
    console.log('✅ OpenAI response received');
    
    // Parse and validate JSON response
    let extractedFields = {};
    try {
      extractedFields = JSON.parse(aiResponse);
      console.log('📋 Extracted fields:', Object.keys(extractedFields));
    } catch (parseError) {
      console.error('❌ Failed to parse AI response as JSON:', parseError);
      return { extractedFields: {}, confidence: 0 };
    }

    // Calculate confidence score
    const confidence = calculateConfidenceScore(extractedFields, ocrText);
    
    console.log(`🎯 Extraction confidence: ${confidence}%`);
    
    return {
      extractedFields,
      confidence,
      documentType,
      processingTime: new Date().toISOString(),
      model: process.env.OPENAI_MODEL || "gpt-4o"
    };

  } catch (error) {
    console.error('🔥 AI Field Extraction Error:', error);
    
    // Return empty result on error
    return {
      extractedFields: {},
      confidence: 0,
      error: error.message
    };
  }
}

// Helper function to merge AI fields with manual corrections
export function mergeFieldsWithCorrections(aiFields, manualCorrections) {
  return {
    ...aiFields,
    ...manualCorrections,
    _metadata: {
      aiGenerated: Object.keys(aiFields),
      humanCorrected: Object.keys(manualCorrections),
      mergedAt: new Date().toISOString()
    }
  };
}

// Validate extracted fields against template
export function validateExtractedFields(extractedFields, templateFields) {
  const validation = {
    valid: true,
    errors: [],
    warnings: []
  };

  templateFields.forEach(field => {
    const properties = typeof field.properties === 'string' 
      ? JSON.parse(field.properties) 
      : field.properties || {};
    
    const value = extractedFields[field.label];
    
    // Check required fields
    if (properties.required && (value === null || value === undefined || value === '')) {
      validation.valid = false;
      validation.errors.push(`Required field "${field.label}" is missing`);
    }
    
    // Type validation
    if (value !== null && value !== undefined && value !== '') {
      if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        validation.warnings.push(`Field "${field.label}" may not be a valid email`);
      }
      
      if (field.type === 'number' && isNaN(parseFloat(value))) {
        validation.warnings.push(`Field "${field.label}" may not be a valid number`);
      }
      
      if (field.type === 'date') {
        try {
          const dateTest = new Date(value);
          if (isNaN(dateTest.getTime())) {
            validation.warnings.push(`Field "${field.label}" may not be a valid date`);
          }
        } catch (dateError) {
          validation.warnings.push(`Field "${field.label}" may not be a valid date`);
        }
      }
    }
  });

  return validation;
}

export default { extractFieldsFromOCR, mergeFieldsWithCorrections, validateExtractedFields }; 