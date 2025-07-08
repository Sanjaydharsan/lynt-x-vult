"use client";

import { useEffect, useRef, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "@/components/LoadingSpinner";
import AIAssistant from "./AIAssistant";
import { useGetTemplateById, useGetAllTemplates, useFormSubmission, useAssignImage } from "@/hooks/client";
import useUserStore from "@/store/userStore";

export default function TabSection({ image, assignedlast, completed }) {
  let batchname = "N/A";
  let imagename = "N/A";
  if (image) {
    const parts = image.split("/");
    if (parts.length >= 4) {
      batchname = parts[2];
      imagename = parts[3];
    }
  }
  const [selectedTab, setSelectedTab] = useState(null);
  const [formData, setFormData] = useState({});
  const tabsRef = useRef(null);
  const tabRefs = useRef({});
  const formRef = useRef(null);

  const { organizationid, userid } = useUserStore();
  const { templates, isFetching: isLoadingTabs } = useGetAllTemplates();
  const { template: templateData, isFetching: isLoadingTemplate } = useGetTemplateById(selectedTab?.id);
  const { saveForm, isSaveForm } = useFormSubmission();
  const { assignImage } = useAssignImage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAutoFill = (aiFields) => {
    if (!formRef.current) return;

    const form = formRef.current;
    
    Object.entries(aiFields).forEach(([fieldName, value]) => {
      if (value === null || value === undefined) return;

      const input = form.querySelector(`[name="${fieldName}"]`);
      if (input) {
        if (input.type === 'checkbox') {
          input.checked = Boolean(value);
          input.dispatchEvent(new Event('change', { bubbles: true }));
        } else if (input.type === 'radio') {
          const radioInput = form.querySelector(`[name="${fieldName}"][value="${value}"]`);
          if (radioInput) {
            radioInput.checked = true;
            radioInput.dispatchEvent(new Event('change', { bubbles: true }));
          }
        } else {
          const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLInputElement.prototype,
            'value'
          )?.set || Object.getOwnPropertyDescriptor(
            window.HTMLTextAreaElement.prototype,
            'value'
          )?.set;
          
          if (nativeInputValueSetter) {
            nativeInputValueSetter.call(input, String(value));
          } else {
            input.value = String(value);
          }
          
          input.dispatchEvent(new Event('input', { bubbles: true }));
          input.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }
    });

    console.log('✅ Auto-filled form with AI data:', aiFields);
  };

  useEffect(() => {
    if (templates?.length > 0) {
      const initialTab = assignedlast?.templateId && assignedlast?.userId === userid
        ? templates.find(tab => tab.id === assignedlast.templateId && !completed.includes(tab.id))
        : templates.find(tab => !completed.includes(tab.id)) || templates[0];

      setSelectedTab(initialTab);

      if (userid && initialTab?.id) {
        assignImage({
          templateId: initialTab.id,
          userId: userid,
          organizationId: organizationid
        }, {
          onError: (error) => {
            console.error("assignImage error:", error);
          },
        });
      }
    }
  }, [templates, assignImage, assignedlast, userid, organizationid]);

  useEffect(() => {
    if (templates?.length > 0 && assignedlast && assignedlast?.userId === userid) {
      const newTab = templates.find(tab => tab.id === assignedlast.templateId && !completed.includes(tab.id));
      if (newTab && selectedTab?.id !== newTab.id) {
        setSelectedTab(newTab);
        tabRefs.current[newTab.id]?.scrollIntoView({ behavior: "smooth", inline: "center" });
      }
    }
  }, [assignedlast, templates, selectedTab, userid]);

  const handleTabClick = (tabId) => {
    const tabElement = tabRefs.current[tabId];
    tabElement?.scrollIntoView({ behavior: "smooth", inline: "center" });
    const selected = templates?.find((tab) => tab.id === tabId);
    if (selected && !completed.includes(tabId) && assignedlast?.templateId === tabId && assignedlast?.userId === userid) {
      setSelectedTab(selected);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = formRef.current;
    const fieldsData = {};

    const radioGroups = new Set();
    templateData?.templateFields?.forEach((field) => {
      if (field.type === "radio" && field.properties?.groupLabel) {
        radioGroups.add(field.properties.groupLabel);
        fieldsData[field.properties.groupLabel] = "";
      }
    });

    const elements = form.querySelectorAll("input, textarea, select");
    elements.forEach((element) => {
      const label = element.name;
      if (!label) return;

      if (element.type === "checkbox") {
        fieldsData[label] = element.checked;
      } else if (element.type === "radio") {
        if (element.checked) {
          fieldsData[label] = element.value;
        }
      } else {
        fieldsData[label] = element.value;
      }
    });

    const currentIndex = templates?.findIndex((tab) => tab.id === selectedTab?.id);
    let nextTab = null;
    if (currentIndex !== -1 && currentIndex + 1 < templates?.length) {
      for (let i = currentIndex + 1; i < templates.length; i++) {
        if (!completed.includes(templates[i].id)) {
          nextTab = templates[i];
          break;
        }
      }
    }

    const formDataObject = {
      image_name: image || "N/A",
      batch_name: batchname,
      level: selectedTab?.id || "Default Level",
      user_id: userid || "user_001",
      organization_id: organizationid || null,
      fields: fieldsData,
      next_level: nextTab ? nextTab.id : 0,
    };

    setFormData(formDataObject);

    saveForm(formDataObject, {
      onSuccess: (response) => {
        form.reset();

        if (nextTab && !completed.includes(nextTab.id)) {
          setSelectedTab(nextTab);
          tabRefs.current[nextTab.id]?.scrollIntoView({ behavior: "smooth", inline: "center" });
        }
        setIsSubmitting(false);
      },
      onError: (error) => {
        console.error("saveForm error:", error);
        setIsSubmitting(false);
      },
    });
  };

  const renderField = (field) => {
    const { type, properties, children } = field;

    switch (type) {
      case "text-input":
        return (
          <div className="mb-6">
            <Label htmlFor={properties.label} className="text-gray-700 font-medium text-sm mb-2 block">
              {properties.label}
              {properties.required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            <Input
              id={properties.label}
              name={properties.label}
              type="text"
              placeholder={properties.placeholder}
              required={properties.required}
              className="mt-1 bg-white border-gray-300 h-12 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {properties.helpText && (
              <p className="text-sm text-gray-500 mt-2">{properties.helpText}</p>
            )}
          </div>
        );

      case "textarea":
        return (
          <div className="mb-6">
            <Label htmlFor={properties.label} className="text-gray-700 font-medium text-sm mb-2 block">
              {properties.label}
              {properties.required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            <Textarea
              id={properties.label}
              name={properties.label}
              placeholder={properties.placeholder}
              rows={properties.rows || 4}
              required={properties.required}
              className="mt-1 bg-white border-gray-300 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y min-h-[100px]"
            />
            {properties.helpText && (
              <p className="text-sm text-gray-500 mt-2">{properties.helpText}</p>
            )}
          </div>
        );

      case "select":
        return (
          <div className="mb-6">
            <Label htmlFor={properties.label} className="text-gray-700 font-medium text-sm mb-2 block">
              {properties.label}
              {properties.required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            <Select name={properties.label} required={properties.required}>
              <SelectTrigger id={properties.label} className="mt-1 bg-white border-gray-300 h-12 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <SelectValue placeholder={properties.placeholder} />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {properties.options?.map((option, index) => (
                  <SelectItem key={index} value={option} className="text-base">
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {properties.helpText && (
              <p className="text-sm text-gray-500 mt-2">{properties.helpText}</p>
            )}
          </div>
        );

      case "checkbox":
        return (
          <div className="mb-6">
            <div className="flex items-start">
              <Checkbox
                id={properties.label}
                name={properties.label}
                defaultChecked={properties.checked}
                required={properties.required}
                className="border-gray-300 mt-1"
              />
              <Label htmlFor={properties.label} className="ml-3 text-gray-700 font-medium text-sm leading-relaxed">
                {properties.label}
                {properties.required && <span className="text-red-500 ml-1">*</span>}
              </Label>
            </div>
          </div>
        );

      case "radio":
        return (
          <div className="mb-6">
            <Label className="text-gray-700 font-medium text-sm mb-3 block">
              {properties.groupLabel}
              {properties.required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            <RadioGroup
              required={properties.required}
              className="mt-1 space-y-3"
              name={properties.groupLabel}
            >
              {properties.options?.map((option, index) => (
                <div key={index} className="flex items-center">
                  <RadioGroupItem
                    value={option}
                    id={`${properties.groupLabel}-${index}`}
                    className="border-gray-300"
                  />
                  <Label htmlFor={`${properties.groupLabel}-${index}`} className="ml-3 text-gray-700 text-sm">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case "date":
        return (
          <div className="mb-6">
            <Label htmlFor={properties.label} className="text-gray-700 font-medium text-sm mb-2 block">
              {properties.label}
              {properties.required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            <Input
              id={properties.label}
              name={properties.label}
              type="date"
              required={properties.required}
              className="mt-1 bg-white border-gray-300 h-12 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        );

      case "time":
        return (
          <div className="mb-6">
            <Label htmlFor={properties.label} className="text-gray-700 font-medium text-sm mb-2 block">
              {properties.label}
              {properties.required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            <Input
              id={properties.label}
              name={properties.label}
              type="time"
              required={properties.required}
              className="mt-1 bg-white border-gray-300 h-12 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        );

      case "number":
        return (
          <div className="mb-6">
            <Label htmlFor={properties.label} className="text-gray-700 font-medium text-sm mb-2 block">
              {properties.label}
              {properties.required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            <Input
              id={properties.label}
              name={properties.label}
              type="number"
              placeholder={properties.placeholder}
              min={properties.min}
              max={properties.max}
              required={properties.required}
              className="mt-1 bg-white border-gray-300 h-12 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        );

      case "email":
        return (
          <div className="mb-6">
            <Label htmlFor={properties.label} className="text-gray-700 font-medium text-sm mb-2 block">
              {properties.label}
              {properties.required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            <Input
              id={properties.label}
              name={properties.label}
              type="email"
              placeholder={properties.placeholder}
              required={properties.required}
              className="mt-1 bg-white border-gray-300 h-12 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        );

      case "tel":
        return (
          <div className="mb-6">
            <Label htmlFor={properties.label} className="text-gray-700 font-medium text-sm mb-2 block">
              {properties.label}
              {properties.required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            <Input
              id={properties.label}
              name={properties.label}
              type="tel"
              placeholder={properties.placeholder}
              required={properties.required}
              className="mt-1 bg-white border-gray-300 h-12 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        );

      case "title":
        return (
          <div className="mb-4">
            <h2 className={`font-semibold ${properties.size === "large" ? "text-xl" : "text-lg"} text-gray-800`}>
              {properties.text}
            </h2>
          </div>
        );

      case "child-builder":
        return (
          <div className="mb-4">
            <h3 className="text-md font-semibold mb-2 text-gray-800">
              {properties.title}
            </h3>
            <div
              className="p-4 border rounded bg-gray-50"
              style={{
                display: properties.layout === "grid" ? "grid" : "flex",
                flexDirection: properties.layout === "stack" ? "column" : "row",
                flexWrap: properties.layout === "flex" ? "wrap" : undefined,
                gridTemplateColumns: properties.layout === "grid" ? `repeat(${properties.gridCols}, 1fr)` : undefined,
                gap: properties.gap ? `${properties.gap}px` : "16px",
              }}
            >
              {children?.map((child) => (
                <div
                  key={child.id}
                  style={{
                    flex: properties.layout === "flex" ? "1 1 0" : undefined,
                    minWidth: properties.layout === "flex" ? "200px" : undefined,
                  }}
                >
                  {renderField(child)}
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-full bg-white relative">
      {isLoadingTabs && <LoadingSpinner />}
      {!isLoadingTabs && templates?.length === 0 && (
        <div className="flex flex-col items-center justify-center h-full text-gray-500 p-8">
          <svg className="w-16 h-16 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-center">No templates available</p>
          <p className="text-sm text-gray-400 mt-2">Templates will appear here when configured</p>
        </div>
      )}
      
      {templates?.length > 0 && (
        <Tabs
          value={selectedTab?.id || templates[0].id}
          onValueChange={handleTabClick}
          className="flex flex-col h-full"
        >
          <div className="border-b bg-gray-50 p-4">
            <div ref={tabsRef} className="overflow-x-auto whitespace-nowrap no-scrollbar scroll-smooth">
              <TabsList className="inline-flex w-max gap-2 bg-transparent">
                {templates?.map((tab) => {
                  const isCompleted = completed.includes(tab.id);
                  const isAssigned = assignedlast?.templateId === tab.id && assignedlast?.userId === userid;
                  const isDisabled = isCompleted || !isAssigned;

                  return (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className="flex-shrink-0 whitespace-nowrap px-4 py-2 rounded-lg bg-white data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-600 border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      ref={(el) => (tabRefs.current[tab.id] = el)}
                      disabled={isDisabled}
                    >
                      {tab.name}
                      {isCompleted && <span className="ml-2 text-green-500">✓</span>}
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {templates.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="h-full m-0">
                {isLoadingTemplate && selectedTab?.id === tab.id ? (
                  <div className="flex items-center justify-center h-full">
                    <LoadingSpinner />
                  </div>
                ) : (
                  selectedTab?.id === tab.id && templateData && (
                    <div className="p-6 h-full">
                      <div className="mb-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-2">{templateData.name}</h2>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span>Batch: {batchname}</span>
                          <span>•</span>
                          <span>Document: {imagename}</span>
                        </div>
                      </div>
                      
                      <form ref={formRef} onSubmit={handleSubmit} className="space-y-1">
                        {templateData.templateFields && templateData.templateFields.length > 0 ? (
                          templateData.templateFields.map((field) => (
                            <div key={field.id}>
                              {renderField(field)}
                            </div>
                          ))
                        ) : (
                          <div className="text-center py-12 text-gray-500">
                            <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <p>No fields configured for this template</p>
                          </div>
                        )}
                        
                        {templateData.templateFields && templateData.templateFields.length > 0 && (
                          <div className="sticky bottom-0 bg-white border-t pt-6 mt-8">
                            <div className="flex items-center justify-between">
                              <div className="text-sm text-gray-500">
                                Template: {templateData.name}
                              </div>
                              <Button 
                                type="submit" 
                                disabled={isSubmitting || isSaveForm}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 h-12 text-base font-medium shadow-lg"
                              >
                                {isSubmitting || isSaveForm ? (
                                  <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing...
                                  </>
                                ) : (
                                  'Submit & Continue'
                                )}
                              </Button>
                            </div>
                          </div>
                        )}
                      </form>
                    </div>
                  )
                )}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      )}
    </div>
  );
}