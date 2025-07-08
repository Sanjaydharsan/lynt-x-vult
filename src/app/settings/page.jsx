"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import useUserStore from "@/store/userStore";
import {
  Settings,
  Shield,
  Key,
  Server,
  Mail,
  Globe,
  Eye,
  EyeOff,
  RefreshCw,
  Save,
  AlertTriangle,
  Info,
  Zap,
  BarChart3,
  HardDrive,
  Monitor,
  Pencil,
} from "lucide-react";
import FTPManagement from "@/components/Settings/FTPManagement";
import {
  useGetOrganization,
  useGetOrganizationSettings,
  useUpdateOrganization,
} from "@/hooks/organization";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useGetZohoToken } from "@/hooks/zoho";
import { useSearchParams } from "next/navigation";
import toast  from "react-hot-toast";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");
  const [showApiKey, setShowApiKey] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { userid, organizationid } = useUserStore();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
 
// const { organization, isLoading: isOrgLoading, isError: isOrgError } = useGetOrganization(userid);
const { organization, isLoading: isOrgLoading, isError } = useGetOrganizationSettings(userid);

const { updateOrganization, isUpdating } = useUpdateOrganization(userid);

const { zohotokens, isLoading: isZohoLoading } = useGetZohoToken(organizationid);
  const [settings, setSettings] = useState({
    general: {
      name: organization?.name || "",
      industry: organization?.industry || "",
      company_size: organization?.company_size || "",
      expected_monthly_volume: organization?.expected_monthly_volume || "",
      email: organization?.email || "",
      phone: organization?.phone || "",
      from_email: organization?.fromemail || "",
      to_email: organization?.toemail || "",
    },
    ai: {
      confidence_threshold: organization?.ai_settings?.confidence_threshold ?? 85,
      auto_approve_results: organization?.ai_settings?.auto_approve_results ?? false,
      enable_batch_processing: organization?.ai_settings?.enable_batch_processing ?? false,
      max_batch_size: organization?.ai_settings?.max_batch_size ?? 1,
      processing_priority: organization?.ai_settings?.processing_priority || "standard",
    },
    notifications: {
      emailAlerts: true,
      batchCompletion: true,
      errorAlerts: true,
      weeklyReports: true,
      systemMaintenance: false,
    },
    security: {
      two_factor_auth: organization?.security_settings?.two_factor_auth ?? false,
      session_timeout_minutes: organization?.security_settings?.session_timeout_minutes ?? 30,
      password_expiry_days: organization?.security_settings?.password_expiry_days ?? 90,
      audit_logging: organization?.security_settings?.audit_logging ?? false,
      api_key: organization?.security_settings?.api_key || generateApiKey(),
    },
    integrations: {
      apiAccess: true,
      webhookUrl: "",
      ftpEnabled: true,
      emailIntegration: false,
      cloudStorage: false,
    },
  });
   
  const [zohoForm, setZohoForm] = useState({
  zohoorgid: zohotokens?.zohoorgid || "",
  clientid: zohotokens?.clientid || "",
  clientsecret: zohotokens?.clientsecret ||"",
});
const [message, setMessage] = useState("");

  useEffect(() => {
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

useEffect(() => {
    if (organization) {
      setSettings((prev) => ({
        ...prev,
        general: {
          name: organization.name || "",
          industry: organization.industry || "",
          company_size: organization.company_size || "",
          expected_monthly_volume: organization.expected_monthly_volume || "",
          email: organization.email || "",
          phone: organization.phone || "",
          from_email: organization?.fromemail || "",
          to_email: organization?.toemail || "",
        },
        ai: {
          confidence_threshold: organization?.ai_settings?.confidence_threshold ?? 85,
          auto_approve_results: organization?.ai_settings?.auto_approve_results ?? false,
          enable_batch_processing: organization?.ai_settings?.enable_batch_processing ?? false,
          max_batch_size: organization?.ai_settings?.max_batch_size ?? 1,
          processing_priority: organization?.ai_settings?.processing_priority || "standard",
        },
        security: {
        two_factor_auth: organization?.security_settings?.two_factor_auth ?? false,
        session_timeout_minutes: organization?.security_settings?.session_timeout_minutes ?? 30,
        password_expiry_days: organization?.security_settings?.password_expiry_days ?? 90,
        audit_logging: organization?.security_settings?.audit_logging ?? false,
        api_key: organization?.security_settings?.api_key || generateApiKey(),
      },
      }));
    }
    if (Array.isArray(zohotokens) && zohotokens.length > 0) {
    const token = zohotokens[0]; 
    setZohoForm({
      zohoorgid: token.zohoorgid || "",
      clientid: token.clientid || "",
      clientsecret: token.clientsecret || "",
    });
  }
  }, [organization, zohotokens]);

  // random apikey - UUID v4 style
  function generateApiKey() {
    return "lx_" + crypto.randomUUID().replace(/-/g, "").slice(0, 32);
  }

  const handleConnectXero = () => {
    const redirectTo = `/settings?tab=integrations`;
    const url = `/api/xero/start?organizationId=${organizationid}&redirectTo=${encodeURIComponent(redirectTo)}`;
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
    const redirectTo = `/settings?tab=integrations`;
    const payload = {
      organizationid: organizationid.toString(),
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

if (isOrgLoading || !userid || isZohoLoading) {
    return <LoadingSpinner />;
  }

  const updateSetting = (category, key, value) => {
    setSettings((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value,
      },
    }));
  };

const handleSaveSettings = () => {
  if (isEditing) {
    const payload = {
      name: settings.general.name,
      industry: settings.general.industry,
      company_size: settings.general.company_size,
      expected_monthly_volume: settings.general.expected_monthly_volume,
      email: settings.general.email,
      phone: settings.general.phone,
      fromemail: settings.general.from_email,
      toemail: settings.general.to_email,

      ai_settings: {
        confidence_threshold: settings.ai.confidence_threshold,
        auto_approve_results: settings.ai.auto_approve_results,
        enable_batch_processing: settings.ai.enable_batch_processing,
        max_batch_size: settings.ai.max_batch_size,
        processing_priority: settings.ai.processing_priority,
      },

      security_settings: {
        two_factor_auth: settings.security.two_factor_auth,
        audit_logging: settings.security.audit_logging,
        session_timeout_minutes: settings.security.session_timeout_minutes,
        password_expiry_days: settings.security.password_expiry_days,
        api_key: settings.security.api_key,
      }
    };

    updateOrganization(payload);
    setIsEditing(false);
  } else {
    setIsEditing(true);
  }
};

  // const handleSoftDelete = () => {
  //   updateOrganization({ isDeleted: true });
  // };

  const renderGeneralTab = () => (
    <div className="space-y-8">
      <Card className="border-0 shadow bg-gradient-to-br from-white to-gray-50">
        <CardContent className="p-8">
          <div className="">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Organization Details
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label
                    htmlFor="orgName"
                    className="text-sm font-semibold text-gray-700 mb-2 block"
                  >
                    Organization Name *
                  </Label>
                  <Input
                    id="orgName"
                    value={settings.general.name}
                    onChange={(e) =>
                      updateSetting("general", "name", e.target.value)
                    }
                    placeholder="Acme Corporation"
                    className="h-12 text-lg border-2 focus:border-blue-500"
                    disabled={!isEditing}
                  />
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
                    value={settings.general.email}
                    onChange={(e) =>
                      updateSetting("general", "email", e.target.value)
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
                    value={settings.general.phone}
                    onChange={(e) =>
                      updateSetting("general", "phone", e.target.value)
                    }
                    placeholder="+1 (555) 123-4567"
                    className="h-12 text-lg border-2 focus:border-blue-500"
                    disabled={!isEditing}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-2 block">
                    Industry
                  </Label>
                  <select
                    className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 text-lg"
                    value={settings.general.industry}
                    onChange={(e) =>
                      updateSetting("general", "industry", e.target.value)
                    }
                    disabled={!isEditing}
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
                    value={settings.general.company_size}
                    onChange={(e) =>
                      updateSetting("general", "company_size", e.target.value)
                    }
                    disabled={!isEditing}
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
                  value={settings.general.expected_monthly_volume}
                  onChange={(e) =>
                    updateSetting(
                      "general",
                      "expected_monthly_volume",
                      e.target.value
                    )
                  }
                  disabled={!isEditing}
                >
                  <option value="">Select Volume</option>
                  <option value="<1000">Less than 1,000 documents</option>
                  <option value="1000-5000">1,000 - 5,000 documents</option>
                  <option value="5000-20000">5,000 - 20,000 documents</option>
                  <option value="20000+">20,000+ documents</option>
                </select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Monitor className="w-5 h-5 text-blue-600" />
            System Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-6 h-6 text-blue-600" />
                <h4 className="font-semibold text-gray-900">System Status</h4>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">
                  All Systems Operational
                </span>
              </div>
            </div>
            {/* <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <HardDrive className="w-6 h-6 text-green-600" />
                <h4 className="font-semibold text-gray-900">Storage Used</h4>
              </div>
              <div className="text-2xl font-bold text-green-600">2.4 GB</div>
              <div className="text-sm text-gray-600">of 100 GB</div>
            </div> */}
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className="w-6 h-6 text-purple-600" />
                <h4 className="font-semibold text-gray-900">API Calls</h4>
              </div>
              <div className="text-2xl font-bold text-purple-600">15,247</div>
              <div className="text-sm text-gray-600">this month</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAITab = () => (
    <div className="space-y-8">
      <Card className="border-0 shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-blue-600" />
            AI Processing Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label>
              AI Confidence Threshold: {settings.ai.confidence_threshold}%
            </Label>
            <input
              type="range"
              min="70"
              max="95"
              value={settings.ai.confidence_threshold}
              onChange={(e) =>
                updateSetting(
                  "ai",
                  "confidence_threshold",
                  parseInt(e.target.value)
                )
              }
              className="w-full mt-2"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>70% (Permissive)</span>
              <span>95% (Strict)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center justify-between">
              <div>
                <Label>Auto-approve high confidence results</Label>
                <p className="text-sm text-gray-500">
                  Automatically approve results above threshold
                </p>
              </div>
              <Switch
                checked={settings.ai.auto_approve_results}
                onCheckedChange={(checked) =>
                  updateSetting("ai", "auto_approve_results", checked)
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>Enable batch processing</Label>
                <p className="text-sm text-gray-500">
                  Process multiple documents simultaneously
                </p>
              </div>
              <Switch
                checked={settings.ai.enable_batch_processing}
                onCheckedChange={(checked) =>
                  updateSetting("ai", "enable_batch_processing", checked)
                }
              />
            </div>
          </div>

          <div>
            <Label htmlFor="maxBatch">Maximum Batch Size</Label>
            <Input
              id="maxBatch"
              type="number"
              value={settings.ai.max_batch_size}
              onChange={(e) =>
                updateSetting("ai", "max_batch_size", parseInt(e.target.value))
              }
              className="mt-2 max-w-xs"
            />
          </div>

          <div>
            <Label htmlFor="priority">Processing Priority</Label>
            <select
              id="priority"
              className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md mt-2"
              value={settings.ai.processing_priority}
              onChange={(e) =>
                updateSetting("ai", "processing_priority", e.target.value)
              }
            >
              <option value="low">Low Priority</option>
              <option value="standard">Standard</option>
              <option value="high">High Priority</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* <Card className="border-0 shadow bg-gradient-to-r from-blue-50 to-purple-50">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Info className="w-6 h-6 text-blue-600" />
            <h4 className="font-semibold text-gray-900">
              AI Performance Insights
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Average Accuracy</p>
              <p className="text-2xl font-bold text-green-600">97.8%</p>
            </div>
            <div>
              <p className="text-gray-600">Processing Speed</p>
              <p className="text-2xl font-bold text-blue-600">2.3s</p>
            </div>
            <div>
              <p className="text-gray-600">Cost per Document</p>
              <p className="text-2xl font-bold text-purple-600">$0.12</p>
            </div>
          </div>
        </CardContent>
      </Card> */}
    </div>
  );

  const renderSecurityTab = () => (
    <div className="space-y-8">
      <Card className="border-0 shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-600" />
            Security Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center justify-between">
              <div>
                <Label>Two-Factor Authentication</Label>
                <p className="text-sm text-gray-500">
                  Add extra security to your account
                </p>
              </div>
              <Switch
                checked={settings.security.two_factor_auth}
                onCheckedChange={(checked) =>
                  updateSetting("security", "two_factor_auth", checked)
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>Audit Logging</Label>
                <p className="text-sm text-gray-500">
                  Track all system activities
                </p>
              </div>
              <Switch
                checked={settings.security.audit_logging}
                onCheckedChange={(checked) =>
                  updateSetting("security", "audit_logging", checked)
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
              <Input
                id="sessionTimeout"
                type="number"
                value={settings.security.session_timeout_minutes}
                onChange={(e) =>
                  updateSetting(
                    "security",
                    "session_timeout_minutes",
                    parseInt(e.target.value)
                  )
                }
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="passwordExpiry">Password Expiry (days)</Label>
              <Input
                id="passwordExpiry"
                type="number"
                value={settings.security.password_expiry_days}
                onChange={(e) =>
                  updateSetting(
                    "security",
                    "password_expiry_days",
                    parseInt(e.target.value)
                  )
                }
                className="mt-2"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="w-5 h-5 text-blue-600" />
            API Keys & Access
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>API Key</Label>
            <div className="flex gap-2 mt-2">
              <Input
                type={showApiKey ? "text" : "password"}
                value={settings.security.api_key || ""}
                readOnly
                className="flex-1" name='api_key'
                onChange={(e) =>
                  updateSetting("security", "api_key", e.target.value)
                }
              />
              <Button
                variant="outline"
                onClick={() => setShowApiKey(!showApiKey)}
              >
                {showApiKey ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </Button>
              <Button
                  variant="outline"
                  onClick={() =>
                    updateSetting("security", "api_key", generateApiKey())
                  }
                >
                  <RefreshCw className="w-4 h-4" />
                </Button>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
              <span className="font-semibold text-yellow-800">
                Security Notice
              </span>
            </div>
            <p className="text-sm text-yellow-700">
              Keep your API keys secure. Never share them in client-side code or
              public repositories.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderIntegrationsTab = () => (
    <div className="space-y-8">
      <Card className="border-0 shadow">
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
                  <Badge
                    variant={
                      settings.integrations.ftpEnabled ? "default" : "secondary"
                    }
                  >
                    {settings.integrations.ftpEnabled ? "Active" : "Inactive"}
                  </Badge>
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
                              value={settings.general.from_email}
                              onChange={(e) =>
                                updateSetting("general", "from_email", e.target.value)
                              }
                            />
                          </div>
                          <div>
                            <Label className="block text-sm font-medium text-gray-700 mb-1">
                              To Email
                            </Label>
                            <Input
                              placeholder="destination@example.com"
                              value={settings.general.to_email}
                              onChange={(e) =>
                                updateSetting("general", "to_email", e.target.value)
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

          {/* <div>
            <Label htmlFor="webhookUrl">Webhook URL</Label>
            <Input
              id="webhookUrl"
              placeholder="https://your-domain.com/webhook"
              value={settings.integrations.webhookUrl}
              onChange={(e) =>
                updateSetting("integrations", "webhookUrl", e.target.value)
              }
              className="mt-2"
            />
            <p className="text-sm text-gray-500 mt-1">
              Receive real-time notifications when documents are processed
            </p>
          </div> */}
        </CardContent>
      </Card>

      <Card className="border-0 shadow">
        <CardHeader>
          <CardTitle>FTP Management</CardTitle>
        </CardHeader>
        <CardContent>
          <FTPManagement />
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                System Settings
              </h1>
              <p className="text-gray-600 mt-2">
                Manage your system configuration and preferences
              </p>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={handleSaveSettings}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                disabled={isUpdating}
              >
                {isEditing ? (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </>
                ) : (
                  <>
                    <Pencil className="w-4 h-4 mr-2" />
                    Edit
                  </>
                )}
              </Button>
              {/* {isEditing && (
                <Button
                  onClick={handleSoftDelete}
                  variant="destructive"
                  disabled={isUpdating}
                >
                  Delete Organization
                </Button>
              )} */}
            </div>
          </div>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
            <TabsTrigger value="general" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              General
            </TabsTrigger>
            <TabsTrigger value="ai" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              AI & Processing
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Security
            </TabsTrigger>
            <TabsTrigger
              value="integrations"
              className="flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              Integrations
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general">{renderGeneralTab()}</TabsContent>
          <TabsContent value="ai">{renderAITab()}</TabsContent>
          <TabsContent value="security">{renderSecurityTab()}</TabsContent>
          <TabsContent value="integrations">
            {renderIntegrationsTab()}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}