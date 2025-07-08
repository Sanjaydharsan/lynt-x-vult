"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useUser } from "@clerk/nextjs";
import {
  FileText,
  Users,
  Database,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Target,
  Clock,
  DollarSign,
  Zap,
  Crown,
  Shield,
  Eye,
  Server,
  Mail,
  Cloud,
  Globe,
  FolderOpen,
} from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import useUserStore from "@/store/userStore";

const STEPS = [
  {
    id: 1,
    title: "Welcome & Setup",
    icon: Sparkles,
    description: "Get started with your organization",
  },
  {
    id: 2,
    title: "Document Types",
    icon: FileText,
    description: "Choose your processing templates",
  },
  {
    id: 3,
    title: "Team & Roles",
    icon: Users,
    description: "Set up your team structure",
  },
  {
    id: 4,
    title: "Data Sources",
    icon: Database,
    description: "Connect your document sources",
  },
  {
    id: 5,
    title: "Launch Setup",
    icon: Target,
    description: "Review and launch your system",
  },
];

const DOCUMENT_TEMPLATES = [
  {
    id: "1",
    name: "Invoices",
    description: "Standard business invoices with vendor info, amounts, dates",
    fields: 15,
    icon: "📄",
    category: "Financial",
    accuracy: "98.5%",
    volume: "High",
    setup: "2 min",
  },
  {
    id: "2",
    name: "Purchase Orders",
    description: "PO documents with line items and approvals",
    fields: 12,
    icon: "📋",
    category: "Procurement",
    accuracy: "97.8%",
    volume: "Medium",
    setup: "3 min",
  },
  {
    id: "3",
    name: "Legal Contracts",
    description: "Contracts with parties, terms, signatures",
    fields: 20,
    icon: "📜",
    category: "Legal",
    accuracy: "96.2%",
    volume: "Low",
    setup: "5 min",
  },
  {
    id: "4",
    name: "Expense Receipts",
    description: "Receipt scanning for expense management",
    fields: 8,
    icon: "🧾",
    category: "Financial",
    accuracy: "99.1%",
    volume: "High",
    setup: "1 min",
  },
  {
    id: "5",
    name: "Tax Documents",
    description: "W-2, 1099, and other tax forms",
    fields: 25,
    icon: "📊",
    category: "Government",
    accuracy: "96.8%",
    volume: "Seasonal",
    setup: "4 min",
  },
  {
    id: "6",
    name: "Insurance Claims",
    description: "Insurance forms and claim documents",
    fields: 18,
    icon: "🛡️",
    category: "Insurance",
    accuracy: "95.9%",
    volume: "Medium",
    setup: "3 min",
  },
];

const TEAM_ROLES = [
  {
    id: "admin",
    name: "Administrator",
    description: "Full system access and management",
    permissions: ["All permissions"],
    icon: "👑",
    recommended: 1,
  },
  {
    id: "member",
    name: "Member",
    description: "Team oversight and workflow management",
    permissions: ["Process documents", "View assigned batches"],
    icon: "👔",
    recommended: 2,
  },

  {
    id: "processor",
    name: "Data Processor",
    description: "Document processing and data entry",
    permissions: ["Process documents", "View assigned batches"],
    icon: "⚡",
    recommended: 5,
  },
  {
    id: "qc",
    name: "Quality Control",
    description: "Review and validate processed documents",
    permissions: ["Review documents", "Approve/reject batches"],
    icon: "🔍",
    recommended: 2,
  },
  {
    id: "viewer",
    name: "Viewer",
    description: "Read-only access to reports and dashboards",
    permissions: ["View reports", "View dashboards"],
    icon: "👁️",
    recommended: 3,
  },
];

const DATA_SOURCES = [
  {
    id: "ftp",
    name: "FTP Server",
    description: "Automated file monitoring and processing",
    icon: Server,
    setup: "Connect your FTP server",
    features: ["Auto-monitoring", "24/7 processing", "Batch organization"],
  },
  {
    id: "email",
    name: "Email Integration",
    description: "Process attachments from specific addresses",
    icon: Mail,
    setup: "Configure email rules",
    features: ["Smart filtering", "Auto-forwarding", "Attachment extraction"],
  },
  {
    id: "cloud",
    name: "Cloud Storage",
    description: "Google Drive, Dropbox, OneDrive sync",
    icon: Cloud,
    setup: "Connect cloud accounts",
    features: ["Real-time sync", "Folder monitoring", "Version control"],
  },
  {
    id: "api",
    name: "API Integration",
    description: "Programmatic document submission",
    icon: Globe,
    setup: "Generate API keys",
    features: ["REST API", "Webhooks", "Bulk upload"],
  },
];

const getTemplateIcon = (name) => {
  const icons = {
    "standard invoice": "📄",
    "legal contract": "📜",
    agreement: "🤝",
    "kyc form": "🧾",
    receipt: "🧾",
    license: "📑",
  };

  return icons[name.toLowerCase().trim()] || "📁"; // Default icon
};

const getTemplateDescription = (name) => {
  const descriptions = {
    "standard invoice":
      "Standard business invoice with vendor details, dates, and totals",
    "legal contract":
      "Legally binding agreements outlining terms and obligations",
    agreement: "Mutual agreements between parties with defined conditions",
    "kyc form": "Know Your Customer form used for identity verification",
    receipt: "Proof of payment or transaction acknowledgment",
    license: "Government or institutional license document",
  };

  return (
    descriptions[name.toLowerCase().trim()] || `${name} details and information`
  );
};

export default function EnhancedOnboarding() {
  const searchParams = useSearchParams();
  const stepParam = parseInt(searchParams.get("step") || "1", 10);
  const [currentStep, setCurrentStep] = useState(stepParam);
  const [tempOrgId, setTempOrgId] = useState("");
  const [syncMethods, setSyncMethods] = useState([]);
  const [message, setMessage] = useState("");

  const { user, isLoaded } = useUser();

  const [documentTemplates, setDocumentTemplates] = useState([]);
  const [isTemplatesLoading, setIsTemplatesLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const progress = (currentStep / STEPS.length) * 100;

  const [formData, setFormData] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("onboardingFormData");
      if (saved) return JSON.parse(saved);
    }
    return {
      name: "",
      industry: "",
      company_size: "",
      expected_monthly_volume: "",
      phone: "",
      primary_use_case: "",
      expected_time_case: "",
      implementation_time_line: "",
      templateid: [],
      team_role: [],
      team_size: "",
      from_email: "",
      to_email: "",
      host: "",
      port: "",
      username: "",
      password: "",
      ftppath: "",
      ocr: 1,
    };
  });
  useEffect(() => {
    if (isLoaded && user) {
      setFormData((prev) => ({
        ...prev,
        email: user.emailAddresses?.[0]?.emailAddress || prev.email,
      }));
    }
  }, [isLoaded, user]);

  const [zohoForm, setZohoForm] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("zohoFormData");
      if (saved) return JSON.parse(saved);
    }
    return {
      zohoorgid: "",
      clientid: "",
      clientsecret: "",
    };
  });

  const teamSize = parseInt(formData.team_size) || 0;

  useEffect(() => {
    const existingOrgId = localStorage.getItem("tempOrgId");
    if (!existingOrgId) {
      const newId = uuidv4();
      localStorage.setItem("tempOrgId", newId);
      setTempOrgId(newId);
    } else {
      setTempOrgId(existingOrgId);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("onboardingFormData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem("zohoFormData", JSON.stringify(zohoForm));
  }, [zohoForm]);

  useEffect(() => {
    const stepFromQuery = parseInt(searchParams.get("step") || "1", 10);
    if (stepFromQuery >= 1 && stepFromQuery <= STEPS.length) {
      setCurrentStep(stepFromQuery);
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/template", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-organization-id": "0",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setDocumentTemplates(data);
        } else {
          console.error("Failed to fetch templates");
        }
      } catch (error) {
        console.error("Error fetching templates:", error);
      } finally {
        setIsTemplatesLoading(false);
      }
    };

    fetchTemplates();
  }, []);

  const updateFormData = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleConnectXero = () => {
    const tempOrgId = localStorage.getItem("tempOrgId");
    // const url = `/api/xero/start?organizationId=${tempOrgId}`;
    const redirectTo = `/onboarding?step=4`;
    const url = `/api/xero/start?organizationId=${tempOrgId}&redirectTo=${encodeURIComponent(
      redirectTo
    )}`;
    window.location.href = url;
  };

  const handleZohoInputChange = (e) => {
    const { name, value } = e.target;
    setZohoForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleConnectZoho = async () => {
    const tempOrgId = localStorage.getItem("tempOrgId");
    const redirectTo = `/onboarding?step=4`;
    const payload = {
      organizationid: tempOrgId.toString(),
      redirectTo,
      ...zohoForm,
    };
    try {
      const res = await fetch("/api/zoho/save-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.auth_url) {
        localStorage.setItem("zohoRedirectTo", redirectTo);
        window.location.href = data.auth_url;
      } else {
        setMessage(data.error || "Error saving token");
        toast.error(data.error || "Error saving token");
      }
    } catch (error) {
      console.error("Error connecting to Zoho:", error);
      setMessage("Unexpected error occurred");
      toast.error("Unexpected error occurred");
    }
  };

  const handleNext = () => {
    if (currentStep < STEPS.length) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleFinish = async () => {
    setIsLoading(true);
    try {
      const userId = useUserStore.getState().userid || "";
      const tempOrgId = localStorage.getItem("tempOrgId");
      const email = user?.emailAddresses?.[0]?.emailAddress || "";
      const payload = {
        ...formData,
        email,
        userid: userId,
        random_org_id: tempOrgId,
      };
      const response = await fetch("/api/organization", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        localStorage.removeItem("tempOrgId");
        localStorage.removeItem("onboardingFormData");
        localStorage.removeItem("zohoFormData");
        setFormData({
          name: "",
          industry: "",
          company_size: "",
          expected_monthly_volume: "",
          phone: "",
          primary_use_case: "",
          expected_time_case: "",
          implementation_time_line: "",
          templateid: [],
          team_role: [],
          team_size: "",
          from_email: "",
          to_email: "",
          host: "",
          port: "",
          username: "",
          password: "",
          ftppath: "",
          ocr: 1,
        });
        setZohoForm({
          zohoorgid: "",
          clientid: "",
          clientsecret: "",
        });
        router.push("/dashboard?onboarding=complete&welcome=true");
      }
    } catch (error) {
      console.error("Onboarding error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Welcome to Lynt-X AI
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Transform your document processing with AI-powered automation.
                Let's set up your organization for success.
              </p>
            </div>

            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Organization Details
                    </h3>

                    <div>
                      <Label
                        htmlFor="orgName"
                        className="text-sm font-semibold text-gray-700 mb-2 block"
                      >
                        Organization Name *
                      </Label>
                      <Input
                        id="orgName"
                        value={formData.name}
                        onChange={(e) => updateFormData("name", e.target.value)}
                        placeholder="Acme Corporation"
                        className="h-12 text-lg border-2 focus:border-blue-500"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-semibold text-gray-700 mb-2 block">
                          Industry
                        </Label>
                        <select
                          className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 text-lg"
                          value={formData.industry}
                          onChange={(e) =>
                            updateFormData("industry", e.target.value)
                          }
                        >
                          <option value="">Select Industry</option>
                          <option value="financial">Financial Services</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="retail">Retail & E-commerce</option>
                          <option value="technology">Technology</option>
                          <option value="government">Government</option>
                          <option value="legal">Legal Services</option>
                          <option value="insurance">Insurance</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <Label className="text-sm font-semibold text-gray-700 mb-2 block">
                          Company Size
                        </Label>
                        <select
                          className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 text-lg"
                          value={formData.company_size}
                          onChange={(e) =>
                            updateFormData("company_size", e.target.value)
                          }
                        >
                          <option value="">Select Size</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-1000">201-1,000 employees</option>
                          <option value="1000+">1,000+ employees</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-semibold text-gray-700 mb-2 block">
                        Expected Monthly Volume
                      </Label>
                      <select
                        className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 text-lg"
                        value={formData.expected_monthly_volume}
                        onChange={(e) =>
                          updateFormData(
                            "expected_monthly_volume",
                            e.target.value
                          )
                        }
                      >
                        <option value="">Select Volume</option>
                        <option value="<1000">Less than 1,000 documents</option>
                        <option value="1000-5000">
                          1,000 - 5,000 documents
                        </option>
                        <option value="5000-20000">
                          5,000 - 20,000 documents
                        </option>
                        <option value="20000+">20,000+ documents</option>
                      </select>
                    </div>

                    <div>
                      <Label
                        htmlFor="orgEmail"
                        className="text-sm font-semibold text-gray-700 mb-2 block"
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="orgEmail"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          updateFormData("email", e.target.value)
                        }
                        placeholder="contact@acme.com"
                        className="h-12 text-lg border-2 focus:border-blue-500"
                        disabled
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="orgPhone"
                        className="text-sm font-semibold text-gray-700 mb-2 block"
                      >
                        Phone Number *
                      </Label>
                      <Input
                        id="orgPhone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          updateFormData("phone", e.target.value)
                        }
                        placeholder="+1 (555) 123-4567"
                        className="h-12 text-lg border-2 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="lg:border-l lg:pl-8 space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      What are your goals?
                    </h3>

                    <div>
                      <Label className="text-sm font-semibold text-gray-700 mb-2 block">
                        Primary Use Case
                      </Label>
                      <select
                        className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 text-lg"
                        value={formData.primary_use_case}
                        onChange={(e) =>
                          updateFormData("primary_use_case", e.target.value)
                        }
                      >
                        <option value="">Select Use Case</option>
                        <option value="invoice-processing">
                          Invoice Processing
                        </option>
                        <option value="contract-management">
                          Contract Management
                        </option>
                        <option value="expense-automation">
                          Expense Automation
                        </option>
                        <option value="compliance-documentation">
                          Compliance Documentation
                        </option>
                        <option value="data-migration">Data Migration</option>
                        <option value="workflow-automation">
                          Workflow Automation
                        </option>
                      </select>
                    </div>

                    <div>
                      <Label className="text-sm font-semibold text-gray-700 mb-2 block">
                        Expected Time Savings
                      </Label>
                      <select
                        className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 text-lg"
                        value={formData.expected_time_case}
                        onChange={(e) =>
                          updateFormData("expected_time_case", e.target.value)
                        }
                      >
                        <option value="">Select Savings Goal</option>
                        <option value="25%">25% time reduction</option>
                        <option value="50%">50% time reduction</option>
                        <option value="75%">75% time reduction</option>
                        <option value="90%">90% automation</option>
                      </select>
                    </div>

                    <div>
                      <Label className="text-sm font-semibold text-gray-700 mb-2 block">
                        Implementation Timeline
                      </Label>
                      <select
                        className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 text-lg"
                        value={formData.implementation_time_line}
                        onChange={(e) =>
                          updateFormData(
                            "implementation_time_line",
                            e.target.value
                          )
                        }
                      >
                        <option value="">Select Timeline</option>
                        <option value="immediate">Start immediately</option>
                        <option value="1-week">Within 1 week</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="3-months">Within 3 months</option>
                      </select>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200">
                      <div className="flex items-center gap-3 mb-3">
                        <DollarSign className="w-6 h-6 text-green-600" />
                        <h4 className="font-semibold text-gray-900">
                          Estimated ROI
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Based on similar organizations, you could save up to{" "}
                        <span className="font-bold text-green-600">
                          $15,000/month
                        </span>{" "}
                        in processing costs.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 2:
        return (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Choose Your Document Types
              </h2>
              <p className="text-lg text-gray-600">
                Select the types of documents you'll be processing with AI
              </p>
            </div>

            {isTemplatesLoading ? (
              <div className="text-center text-gray-500 py-12">
                Loading templates...
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {documentTemplates?.templates?.map((template) => {
                    const isSelected = formData.templateid.includes(
                      template.id
                    );

                    const handleSelect = () => {
                      const updatedTemplates = isSelected
                        ? formData.templateid.filter((t) => t !== template.id)
                        : [...formData.templateid, template.id];

                      setFormData((prev) => ({
                        ...prev,
                        templateid: updatedTemplates,
                      }));
                    };

                    return (
                      <Card
                        key={template.id}
                        className={`cursor-pointer transition-all duration-300 hover:scale-105 border-2 ${
                          isSelected
                            ? "border-blue-500 bg-blue-50 shadow-lg"
                            : "border-gray-200 hover:border-gray-300 shadow-md"
                        }`}
                        onClick={handleSelect}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <span className="text-3xl">
                              {getTemplateIcon(template.name)}
                            </span>
                            <div className="flex gap-2">
                              <Badge variant="outline" className="text-xs">
                                {template.category || "General"}
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                {template.volume || "Low"}
                              </Badge>
                            </div>
                          </div>

                          <h3 className="font-bold text-lg text-gray-900 mb-2">
                            {template.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-4">
                            {template.description ||
                              getTemplateDescription(template.name)}
                          </p>

                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-500">
                                {template._count?.templateFields || 0} fields
                              </span>
                              <span className="text-green-600 font-semibold">
                                {template.accuracy || "N/A"}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <Clock className="w-3 h-3" />
                              <span>{template.setup || "N/A"} setup</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                <Card className="border-dashed border-2 border-gray-300">
                  <CardContent className="p-8 text-center">
                    <FolderOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                      Need a Custom Template?
                    </h3>
                    <p className="text-gray-500 mb-4">
                      We can create custom templates for your specific document
                      types
                    </p>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        );

      case 3:
        return (
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Set Up Your Team
              </h2>
              <p className="text-lg text-gray-600">
                Define roles and expected team size for optimal workflow
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Team Roles */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Team Roles</h3>
                <div className="space-y-4">
                  {TEAM_ROLES.map((role) => {
                    const isSelected = formData.team_role.includes(role.id);
                    const updatedRoles = isSelected
                      ? formData.team_role.filter((r) => r !== role.id)
                      : [...formData.team_role, role.id];

                    return (
                      <Card
                        key={role.id}
                        className={`cursor-pointer transition-all border-2 ${
                          isSelected
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() =>
                          updateFormData("team_role", updatedRoles)
                        }
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start gap-4">
                            <span className="text-2xl">{role.icon}</span>
                            <div className="flex-1">
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="font-semibold text-gray-900">
                                  {role.name}
                                </h4>
                                <Badge variant="outline" className="text-xs">
                                  Rec: {role.recommended}
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">
                                {role.description}
                              </p>
                              <div className="flex flex-wrap gap-1">
                                {role.permissions
                                  .slice(0, 2)
                                  .map((perm, idx) => (
                                    <Badge
                                      key={idx}
                                      variant="secondary"
                                      className="text-xs"
                                    >
                                      {perm}
                                    </Badge>
                                  ))}
                                {role.permissions.length > 2 && (
                                  <Badge
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    +{role.permissions.length - 2} more
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Team Size Planning */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Team Size Planning
                </h3>
                <Card>
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <Label className="text-sm font-semibold text-gray-700 mb-2 block">
                        Expected Team Size
                      </Label>
                      <Input
                        type="number"
                        value={formData.team_size}
                        onChange={(e) =>
                          updateFormData("team_size", e.target.value)
                        }
                        placeholder="5"
                        className="h-10"
                      />
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Recommended Structure
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Administrators</span>
                          <span className="font-semibold">1-2</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Data Processors</span>
                          <span className="font-semibold">
                            {Math.max(1, Math.floor(formData.team_size * 0.6))}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Quality Control</span>
                          <span className="font-semibold">
                            {Math.max(1, Math.floor(formData.team_size * 0.2))}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Managers</span>
                          <span className="font-semibold">
                            {Math.max(1, Math.floor(formData.team_size * 0.2))}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-600" />
                    Data Sources & Integrations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="border border-gray-200">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <Server className="w-6 h-6 text-blue-600" />
                            <div>
                              <h4 className="font-semibold">FTP Server</h4>
                              <p className="text-sm text-gray-500">
                                Automated file monitoring
                              </p>
                            </div>
                          </div>
                          <Badge>Active</Badge>
                        </div>
                        <Button variant="outline" className="w-full">
                          Configure FTP
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="border border-gray-200">
                      <CardContent className="p-4 space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Mail className="w-6 h-6 text-green-600" />
                            <div>
                              <h4 className="font-semibold">
                                Email Integration
                              </h4>
                              <p className="text-sm text-gray-500">
                                Process email attachments
                              </p>
                            </div>
                          </div>
                          <Badge>Active</Badge>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <Label className="block text-sm font-medium text-gray-700 mb-1">
                              From Email
                            </Label>
                            <Input
                              placeholder="you@example.com"
                              value={formData.from_email}
                              onChange={(e) =>
                                updateFormData("from_email", e.target.value)
                              }
                            />
                          </div>
                          <div>
                            <Label className="block text-sm font-medium text-gray-700 mb-1">
                              To Email
                            </Label>
                            <Input
                              placeholder="destination@example.com"
                              value={formData.to_email}
                              onChange={(e) =>
                                updateFormData("to_email", e.target.value)
                              }
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border border-gray-200">
                      <CardContent className="p-4 space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 text-blue-600 font-bold text-xl">
                              🧾
                            </div>
                            <div>
                              <h4 className="font-semibold">
                                Xero Integration
                              </h4>
                              <p className="text-sm text-gray-500">
                                Sync with Xero account
                              </p>
                            </div>
                          </div>
                          <Badge>In Active</Badge>
                        </div>
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={handleConnectXero}
                        >
                          Connect Xero Account
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="border border-gray-200">
                      <CardContent className="p-4 space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 text-purple-600 font-bold text-xl">
                              🔐
                            </div>
                            <div>
                              <h4 className="font-semibold">
                                Zoho Integration
                              </h4>
                              <p className="text-sm text-gray-500">
                                Connect your Zoho account
                              </p>
                            </div>
                          </div>
                          <Badge>In Active</Badge>
                        </div>

                        <div className="space-y-3">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label className="text-sm font-medium text-gray-700 mb-1 block">
                                Zoho Org ID
                              </Label>
                              <Input
                                name="zohoorgid"
                                placeholder="your-org-id"
                                value={zohoForm.zohoorgid}
                                onChange={handleZohoInputChange}
                              />
                            </div>
                            <div>
                              <Label className="text-sm font-medium text-gray-700 mb-1 block">
                                Client ID
                              </Label>
                              <Input
                                name="clientid"
                                placeholder="your-client-id"
                                value={zohoForm.clientid}
                                onChange={handleZohoInputChange}
                              />
                            </div>
                          </div>
                          <div>
                            <Label className="text-sm font-medium text-gray-700 mb-1 block">
                              Client Secret
                            </Label>
                            <Input
                              name="clientsecret"
                              placeholder="your-client-secret"
                              value={zohoForm.clientsecret}
                              onChange={handleZohoInputChange}
                            />
                          </div>
                        </div>

                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={handleConnectZoho}
                        >
                          Connect Zoho Account
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>FTP Management</CardTitle>
                </CardHeader>

                {/* <FTPManagement /> */}
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <Label htmlFor="host" className="text-sm font-medium">
                        Host
                      </Label>

                      <input
                        placeholder="Enter FTP host"
                        value={formData.host}
                        onChange={(e) => updateFormData("host", e.target.value)}
                        className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="port" className="text-sm font-medium">
                        Port
                      </Label>
                      <input
                        placeholder="Enter FTP port"
                        value={formData.port}
                        onChange={(e) => updateFormData("port", e.target.value)}
                        class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="username" className="text-sm font-medium">
                        Username
                      </Label>
                      <input
                        placeholder="Enter FTP username"
                        value={formData.username}
                        onChange={(e) =>
                          updateFormData("username", e.target.value)
                        }
                        class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="password" className="text-sm font-medium">
                        Password
                      </Label>
                      <input
                        type="password"
                        placeholder="Enter FTP password"
                        value={formData.password}
                        onChange={(e) =>
                          updateFormData("password", e.target.value)
                        }
                        class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="ftppath" className="text-sm font-medium">
                        FTP Path
                      </Label>
                      <input
                        placeholder="Enter FTP path"
                        value={formData.ftppath}
                        onChange={(e) =>
                          updateFormData("ftppath", e.target.value)
                        }
                        class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mt-6">
                      <input
                        type="checkbox"
                        id="ocr"
                        checked={formData.ocr}
                        onChange={(e) => updateFormData("ocr", e.target.value)}
                        className="form-checkbox"
                      />
                      <label htmlFor="ocr" className="text-sm font-medium">
                        Enable OCR
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="flex space-x-2">
              {STEPS.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                      currentStep === step.id
                        ? "bg-blue-600 text-white shadow-lg scale-110"
                        : currentStep > step.id
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      step.id
                    )}
                  </div>
                  {index < STEPS.length - 1 && (
                    <div
                      className={`w-12 h-1 mx-2 rounded transition-all ${
                        currentStep > step.id ? "bg-green-500" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <Progress value={progress} className="max-w-md mx-auto mb-4" />

          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {STEPS[currentStep - 1].title}
          </h1>
          <p className="text-gray-600">{STEPS[currentStep - 1].description}</p>
        </div>

        {/* Content */}
        <div className="mb-12">{renderStepContent()}</div>

        {/* Navigation */}
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <Button
            variant="outline"
            onClick={handlePrev}
            disabled={currentStep === 1}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </Button>

          <div className="text-sm text-gray-500">
            Step {currentStep} of {STEPS.length}
          </div>

          {currentStep === STEPS.length ? (
            <Button
              onClick={handleFinish}
              disabled={isLoading}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex items-center gap-2"
            >
              {isLoading ? "Setting up..." : "Launch System"}
              <Target className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
            >
              Next Step
              <ArrowRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
