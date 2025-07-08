"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, Sparkles, Copy, RefreshCw, AlertTriangle, CheckCircle } from "lucide-react";

export default function AIAssistant({ 
  imageName, 
  batchName, 
  onAutoFill, 
  templateFields = [] 
}) {
  const [aiData, setAiData] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch AI data for current image
  useEffect(() => {
    if (imageName && batchName && imageName !== 'N/A' && batchName !== 'N/A') {
      fetchAIData();
    } else {
      // Clear AI data if no valid image is assigned
      setAiData(null);
      setError(null);
      setIsLoading(false);
    }
  }, [imageName, batchName]);

  const fetchAIData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Try multiple filename variations (PDF, TIF, etc.)
      const fileVariations = [
        imageName,
        imageName.replace('.pdf', '.TIF'),
        imageName.replace('.PDF', '.TIF'),
        imageName.replace('.tif', '.TIF'),
        imageName.replace('.TIF', '.pdf')
      ];
      
      let data = null;
      let lastError = null;
      
      for (const fileName of fileVariations) {
        try {
          const response = await fetch(`/api/qcclient/${fileName}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'x-organization-id': organizationId,
              'x-user-id': userId,
              'x-role': role,
            },
          });

          if (response.ok) {
            data = await response.json();
            if (data && data.data && data.data.length > 0) {
              break; // Found valid data, stop trying
            }
          } else {
            lastError = await response.text();
          }
        } catch (err) {
          lastError = err.message;
          continue; // Try next variation
        }
      }
      
      if (!data || !data.data || data.data.length === 0) {
        throw new Error(lastError || 'No AI data found for this document');
      }
      
      // Extract AI data from the image record
      const imageRecord = data.data && data.data.length > 0 ? data.data[0] : null;
      
      if (imageRecord && imageRecord.ai_extracted_fields) {
        setAiData({
          extractedFields: imageRecord.ai_extracted_fields,
          confidence: imageRecord.ai_confidence_score || 0,
          documentType: imageRecord.ai_document_type,
          processedAt: imageRecord.ai_processed_at,
          status: imageRecord.ai_processing_status,
          modelUsed: imageRecord.ai_model_used
        });
      } else {
        setAiData(null);
      }
    } catch (err) {
      console.error('Error fetching AI data:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAutoFill = () => {
    if (aiData && aiData.extractedFields && onAutoFill) {
      onAutoFill(aiData.extractedFields);
    }
  };

  const handleReprocess = async () => {
    try {
      setIsLoading(true);
      
      // Get organization ID from localStorage
      const organizationId = localStorage.getItem('organizationid');
      const userId = localStorage.getItem('userid');
      const role = localStorage.getItem('user_role');
      
      if (!organizationId) {
        throw new Error('Organization ID not found. Please refresh the page.');
      }
      
      const response = await fetch('/api/ai-extraction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-organization-id': organizationId,
          'x-user-id': userId,
          'x-role': role,
        },
        body: JSON.stringify({
          batchNames: [batchName],
          forceReprocess: true,
          organizationId: parseInt(organizationId, 10)
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to reprocess AI extraction: ${errorText}`);
      }

      const result = await response.json();
      console.log('AI reprocessing result:', result);
      
      // Refresh AI data after reprocessing
      setTimeout(() => {
        fetchAIData();
      }, 2000);
      
    } catch (err) {
      console.error('Error reprocessing AI:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 80) return "bg-green-100 text-green-800 border-green-200";
    if (confidence >= 50) return "bg-yellow-100 text-yellow-800 border-yellow-200";
    return "bg-red-100 text-red-800 border-red-200";
  };

  const getConfidenceIcon = (confidence) => {
    if (confidence >= 80) return <CheckCircle className="w-4 h-4" />;
    if (confidence >= 50) return <AlertTriangle className="w-4 h-4" />;
    return <AlertTriangle className="w-4 h-4" />;
  };

  if (isLoading) {
    return (
      <Card className="mb-4 border-blue-200 bg-blue-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            AI Assistant
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <RefreshCw className="w-4 h-4 animate-spin" />
            Processing AI extraction...
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="mb-4 border-red-200 bg-red-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-red-600" />
            AI Assistant Error
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-red-600 mb-2">{error}</p>
          <Button 
            onClick={fetchAIData} 
            size="sm" 
            variant="outline"
            className="text-red-600 border-red-300 hover:bg-red-100"
          >
            <RefreshCw className="w-3 h-3 mr-1" />
            Retry
          </Button>
        </CardContent>
      </Card>
    );
  }

  // Show waiting state when no image is assigned
  if (!imageName || !batchName || imageName === 'N/A' || batchName === 'N/A') {
    return (
      <Card className="mb-4 border-blue-200 bg-blue-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            AI Assistant
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-4">
            <div className="flex items-center justify-center gap-2 text-sm text-blue-600 mb-2">
              <div className="animate-pulse w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="animate-pulse w-2 h-2 bg-blue-400 rounded-full" style={{animationDelay: '0.2s'}}></div>
              <div className="animate-pulse w-2 h-2 bg-blue-400 rounded-full" style={{animationDelay: '0.4s'}}></div>
            </div>
            <p className="text-sm text-blue-700">Waiting for document assignment...</p>
            <p className="text-xs text-blue-600 mt-1">AI will analyze fields once a document is loaded</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!aiData || !aiData.extractedFields || Object.keys(aiData.extractedFields).length === 0) {
    return (
      <Card className="mb-4 border-gray-200 bg-gray-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gray-600" />
            AI Assistant
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">No AI data available for this document</p>
            <Button 
              onClick={handleReprocess} 
              size="sm" 
              variant="outline"
              disabled={isLoading}
            >
              <RefreshCw className="w-3 h-3 mr-1" />
              Process with AI
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-4 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="pb-2 cursor-pointer hover:bg-blue-100/50 transition-colors">
            <CardTitle className="text-sm flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                AI Assistant
                <Badge 
                  className={`text-xs ${getConfidenceColor(aiData.confidence)}`}
                  variant="outline"
                >
                  {getConfidenceIcon(aiData.confidence)}
                  {aiData.confidence}% confident
                </Badge>
              </div>
              {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </CardTitle>
          </CardHeader>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <CardContent>
            <div className="space-y-3">
              {/* Document Info */}
              <div className="flex items-center gap-4 text-xs text-gray-600 bg-white/50 rounded p-2">
                <span>Document: {aiData.documentType || 'Unknown'}</span>
                <span>Model: {aiData.modelUsed || 'GPT-4'}</span>
                {aiData.processedAt && (
                  <span>Processed: {new Date(aiData.processedAt).toLocaleString()}</span>
                )}
              </div>

              {/* Extracted Fields */}
              <div className="space-y-2">
                <h4 className="text-xs font-medium text-gray-700">Extracted Fields:</h4>
                <div className="bg-white/70 rounded p-3 space-y-2 max-h-48 overflow-y-auto">
                  {Object.entries(aiData.extractedFields).map(([fieldName, value]) => {
                    // Check if this field exists in template
                    const templateField = templateFields.find(f => f.label === fieldName);
                    const isValidField = !!templateField;
                    
                    return (
                      <div 
                        key={fieldName} 
                        className={`flex justify-between items-center text-xs p-2 rounded border ${
                          isValidField 
                            ? 'border-green-200 bg-green-50' 
                            : 'border-gray-200 bg-gray-50'
                        }`}
                      >
                        <span className="font-medium text-gray-700 truncate mr-2">
                          {fieldName}:
                        </span>
                        <span className="text-gray-600 flex-1 text-right truncate">
                          {value || 'N/A'}
                        </span>
                        {isValidField && (
                          <CheckCircle className="w-3 h-3 text-green-600 ml-1 flex-shrink-0" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <Button 
                  onClick={handleAutoFill}
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
                >
                  <Copy className="w-3 h-3 mr-1" />
                  Auto-Fill Form
                </Button>
                <Button 
                  onClick={handleReprocess}
                  size="sm"
                  variant="outline"
                  disabled={isLoading}
                >
                  <RefreshCw className="w-3 h-3 mr-1" />
                  Reprocess
                </Button>
              </div>

              {/* Confidence Indicator */}
              <div className="text-xs text-gray-500 text-center pt-1">
                {aiData.confidence >= 80 && "✅ High confidence - Review and submit"}
                {aiData.confidence >= 50 && aiData.confidence < 80 && "⚠️ Medium confidence - Please verify all fields"}
                {aiData.confidence < 50 && "❌ Low confidence - Manual entry recommended"}
              </div>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
} 