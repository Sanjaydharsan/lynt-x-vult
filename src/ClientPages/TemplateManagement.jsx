"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Plus,
  Eye,
  Pencil,
  Trash,
  FileText,
  Target,
  Zap,
  Clock,
  List,
  Grid3X3,
  Check,
  Download,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import EnhancedMetricCard from "@/components/Dashboard/EnhancedMetricCard";
import ViewTemplate from "@/components/TemplateManagement/ViewTemplate";
import {
  useGetAllTemplates,
  useDeleteTemplate,
  useToggleClientStatus,
  useUpdateOrderno,
} from "@/hooks/formBuilder";

const TEMPLATE_CATEGORIES = {
  Financial: {
    color: "bg-green-100 text-green-800 border-green-200",
    icon: "💰",
  },
  Legal: { color: "bg-blue-100 text-blue-800 border-blue-200", icon: "⚖️" },
  Procurement: {
    color: "bg-purple-100 text-purple-800 border-purple-200",
    icon: "📋",
  },
  Government: {
    color: "bg-orange-100 text-orange-800 border-orange-200",
    icon: "🏛️",
  },
  Insurance: { color: "bg-red-100 text-red-800 border-red-200", icon: "🛡️" },
};

export default function TemplateManagement() {
  const router = useRouter();
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [showOnlyActive, setShowOnlyActive] = useState(false);
  const [selectedTemplateId, setSelectedTemplateId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [templateToDelete, setTemplateToDelete] = useState(null);
  const [orderInputs, setOrderInputs] = useState({});
  const [successfullyUpdatedId, setSuccessfullyUpdatedId] = useState(null);

  const { templates, isFetching, isFetchError } = useGetAllTemplates();
  const { deleteTemplate, isDeleting } = useDeleteTemplate();
  const { toggleClientStatus, isToggling } = useToggleClientStatus();
  const { updateOrderno, isUpdatingOrderno } = useUpdateOrderno();

  // Map API templates to the new design's data structure
  const enhancedTemplates =
    templates?.templates?.map((template) => {
      let category = "Financial";
      if (
        template.name.toLowerCase().includes("contract") ||
        template.name.toLowerCase().includes("agreement")
      )
        category = "Legal";
      else if (
        template.name.toLowerCase().includes("kyc") ||
        template.name.toLowerCase().includes("license")
      )
        category = "Government";
      else if (template.name.toLowerCase().includes("receipt"))
        category = "Financial";

      return {
        id: template.id,
        name: template.name,
        category,
        fields: template._count.templateFields,
        accuracy: 95.0, // Placeholder
        usage: 1000, // Placeholder
        avgProcessingTime: 1.0, // Placeholder
        isActive: template.isActive,
        isPrebuilt: false, // Assume non-prebuilt
        createdAt: template.createdAt,
        lastUsed: template.updatedAt,
        description: `${template.name} template`,
        icon: TEMPLATE_CATEGORIES[category].icon,
        color: `bg-${category.toLowerCase()}-500`,
        recentAccuracy: [95, 95.2, 95.1, 95.3, 95.0, 95.4, 95.2], // Placeholder
        monthlyUsage: [800, 900, 1000, 950, 1000], // Placeholder
        confidenceDistribution: { high: 80, medium: 15, low: 5 }, // Placeholder
        orderno: template.orderno,
        client: template.client,
      };
    }) || [];

  // Filtering
  const filteredTemplates = enhancedTemplates.filter((template) => {
    const matchesSearch =
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || template.category === selectedCategory;
    const matchesActive = !showOnlyActive || template.isActive;
    return matchesSearch && matchesCategory && matchesActive;
  });

  // Sorting
  const sortedTemplates = [...filteredTemplates].sort((a, b) => {
    switch (sortBy) {
      case "usage":
        return b.usage - a.usage;
      case "accuracy":
        return b.accuracy - a.accuracy;
      case "name":
        return a.name.localeCompare(b.name);
      case "recent":
        return new Date(b.lastUsed) - new Date(a.lastUsed);
      case "orderno":
        return (a.orderno || 0) - (b.orderno || 0);
      default:
        return 0;
    }
  });

  // Metrics calculations
  const totalTemplates = enhancedTemplates.length;
  const activeTemplatesCount = enhancedTemplates.filter(
    (t) => t.isActive
  ).length;
  const averageAccuracy = enhancedTemplates.length
    ? (
        enhancedTemplates.reduce((sum, t) => sum + t.accuracy, 0) /
        enhancedTemplates.length
      ).toFixed(1)
    : 0;
  const totalDocumentsProcessed = enhancedTemplates.reduce(
    (sum, t) => sum + t.usage,
    0
  );
  const averageProcessingTime = enhancedTemplates.length
    ? (
        enhancedTemplates.reduce((sum, t) => sum + t.avgProcessingTime, 0) /
        enhancedTemplates.length
      ).toFixed(1)
    : 0;

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const formatTimeAgo = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`;
    return `${Math.floor(diffInHours / 168)}w ago`;
  };

  const CategoryBadge = ({ category }) => {
    const config =
      TEMPLATE_CATEGORIES[category] || TEMPLATE_CATEGORIES.Financial;
    return (
      <Badge variant="outline" className={`${config.color} border`}>
        {config.icon} {category}
      </Badge>
    );
  };

  const MiniChart = ({ data, color = "blue" }) => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min;
    return (
      <div className="flex items-end gap-0.5 h-8 w-20">
        {data.map((value, index) => {
          const height = range === 0 ? 4 : ((value - min) / range) * 24 + 4;
          return (
            <div
              key={index}
              className={`w-1 rounded-sm bg-${color}-500 opacity-70`}
              style={{ height: `${height}px` }}
            />
          );
        })}
      </div>
    );
  };

  const handleDeleteConfirm = () => {
    if (templateToDelete) {
      deleteTemplate(templateToDelete.id);
      setIsDeleteModalOpen(false);
      setTemplateToDelete(null);
    }
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
    setTemplateToDelete(null);
  };

  const handleClientToggle = (templateId, newValue) => {
    toggleClientStatus({ id: templateId, newValue });
  };

  const handleApplyOrder = (templateId, newOrderno) => {
    updateOrderno({ id: templateId, orderno: parseInt(newOrderno) });
    setSuccessfullyUpdatedId(templateId);
    setTimeout(() => setSuccessfullyUpdatedId(null), 1500);
  };

  const renderGridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sortedTemplates.map((template) => (
        <Card
          key={template.id}
          className={`hover:shadow-lg transition-all duration-200 ${
            !template.isActive ? "opacity-75" : ""
          }`}
        >
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between mb-2">
              <div className={`p-3 rounded-lg ${template.color} bg-opacity-10`}>
                <span className="text-2xl">{template.icon}</span>
              </div>
              <div className="flex items-center gap-2">
                {template.isPrebuilt && (
                  <Badge variant="secondary" className="text-xs">
                    Prebuilt
                  </Badge>
                )}
                {!template.isActive && (
                  <Badge
                    variant="outline"
                    className="text-xs border-gray-300 text-gray-500"
                  >
                    Inactive
                  </Badge>
                )}
              </div>
            </div>
            <CardTitle className="text-lg mb-1">{template.name}</CardTitle>
            <CategoryBadge category={template.category} />
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
              {template.description}
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Fields</div>
                  <div className="font-semibold">{template.fields}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Accuracy</div>
                  <div className="font-semibold text-green-600">
                    {template.accuracy}%
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Usage</div>
                  <div className="font-semibold">
                    {formatNumber(template.usage)}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Avg Time</div>
                  <div className="font-semibold">
                    {template.avgProcessingTime}s
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500">7d Accuracy</span>
                  <MiniChart data={template.recentAccuracy} color="green" />
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 text-xs text-gray-500">
                <span>Last used: {formatTimeAgo(template.lastUsed)}</span>
                <div className="flex items-center gap-4">
                  <Eye
                    onClick={() => setSelectedTemplateId(template.id)}
                    className="w-4 h-4 cursor-pointer text-gray-400 hover:text-gray-600"
                  />
                  <Pencil
                    onClick={() =>
                      router.push(`/edit-template?id=${template.id}`)
                    }
                    className="w-4 h-4 cursor-pointer text-gray-400 hover:text-gray-600"
                  />
                  <Trash
                    onClick={() => {
                      setTemplateToDelete(template);
                      setIsDeleteModalOpen(true);
                    }}
                    className="w-4 h-4 cursor-pointer text-gray-400 hover:text-gray-600"
                  />
                </div>
              </div>
              {/* <div className="flex items-center justify-between gap-3 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <span>Client:</span>
                  <Switch
                    checked={template.client}
                    onCheckedChange={(value) => handleClientToggle(template.id, value)}
                    disabled={isToggling}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span>Order:</span>
                  <Input
                    type="number"
                    min={1}
                    max={totalTemplates}
                    value={orderInputs[template.id] ?? template.orderno ?? ""}
                    onChange={(e) =>
                      setOrderInputs((prev) => ({
                        ...prev,
                        [template.id]: e.target.value,
                      }))
                    }
                    className="w-16"
                  />
                  <Button
                    size="sm"
                    onClick={() =>
                      handleApplyOrder(
                        template.id,
                        parseInt(orderInputs[template.id] ?? template.orderno)
                      )
                    }
                    className={`transition-all duration-300 bg-indigo-100 px-4 rounded-xl text-sm cursor-pointer text-indigo-800 hover:bg-indigo-200 ${
                      successfullyUpdatedId === template.id ? "bg-indigo-600 text-white" : ""
                    }`}
                  >
                    {successfullyUpdatedId === template.id ? (
                      <Check className="h-4 w-4 animate-ping-once" />
                    ) : (
                      "Apply"
                    )}
                  </Button>
                </div>
              </div> */}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderListView = () => (
    <div className="space-y-4">
      {sortedTemplates.map((template) => (
        <Card
          key={template.id}
          className={`hover:shadow-lg transition-all duration-200 ${
            !template.isActive ? "opacity-75" : ""
          }`}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <div
                  className={`p-3 rounded-lg ${template.color} bg-opacity-10`}
                >
                  <span className="text-2xl">{template.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-lg">{template.name}</h3>
                    <CategoryBadge category={template.category} />
                    {template.isPrebuilt && (
                      <Badge variant="secondary" className="text-xs">
                        Prebuilt
                      </Badge>
                    )}
                    {!template.isActive && (
                      <Badge
                        variant="outline"
                        className="text-xs border-gray-300 text-gray-500"
                      >
                        Inactive
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {template.description}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div>
                      <div className="text-xs text-gray-500">Fields</div>
                      <div className="font-semibold">{template.fields}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Accuracy</div>
                      <div className="font-semibold text-green-600">
                        {template.accuracy}%
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Usage</div>
                      <div className="font-semibold">
                        {formatNumber(template.usage)}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Avg Time</div>
                      <div className="font-semibold">
                        {template.avgProcessingTime}s
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Last Used</div>
                      <div className="text-sm">
                        {formatTimeAgo(template.lastUsed)}
                      </div>
                    </div>
                  </div>
                  {/* <div className="flex items-center justify-between gap-3 text-xs text-gray-500 mt-3">
                    <div className="flex items-center gap-2">
                      <span>Client:</span>
                      <Switch
                        checked={template.client}
                        onCheckedChange={(value) => handleClientToggle(template.id, value)}
                        disabled={isToggling}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Order:</span>
                      <Input
                        type="number"
                        min={1}
                        max={totalTemplates}
                        value={orderInputs[template.id] ?? template.orderno ?? ""}
                        onChange={(e) =>
                          setOrderInputs((prev) => ({
                            ...prev,
                            [template.id]: e.target.value,
                          }))
                        }
                        className="w-16"
                      />
                      <Button
                        size="sm"
                        onClick={() =>
                          handleApplyOrder(
                            template.id,
                            parseInt(orderInputs[template.id] ?? template.orderno)
                          )
                        }
                        className={`transition-all duration-300 bg-indigo-100 px-4 rounded-xl text-sm cursor-pointer text-indigo-800 hover:bg-indigo-200 ${
                          successfullyUpdatedId === template.id ? "bg-indigo-600 text-white" : ""
                        }`}
                      >
                        {successfullyUpdatedId === template.id ? (
                          <Check className="h-4 w-4 animate-ping-once" />
                        ) : (
                          "Apply"
                        )}
                      </Button>
                    </div>
                  </div> */}
                  <div className="flex items-center justify-between gap-3 text-xs text-gray-500">
                    <span>Last used: {formatTimeAgo(template.lastUsed)}</span>
                    <div className="flex items-center gap-4">
                      <Eye
                        onClick={() => setSelectedTemplateId(template.id)}
                        className="w-4 h-4 cursor-pointer text-gray-400 hover:text-gray-600"
                      />
                      <Pencil
                        onClick={() =>
                          router.push(`/edit-template?id=${template.id}`)
                        }
                        className="w-4 h-4 cursor-pointer text-gray-400 hover:text-gray-600"
                      />
                      <Trash
                        onClick={() => {
                          setTemplateToDelete(template);
                          setIsDeleteModalOpen(true);
                        }}
                        className="w-4 h-4 cursor-pointer text-gray-400 hover:text-gray-600"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Document Templates
            </h1>
            <p className="text-gray-600 mt-1">
              Create and manage extraction templates for your documents
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button
              onClick={() => router.push(`/form-builder`)}
              className="flex items-center"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Template
            </Button>
          </div>
        </div>

        {/* Metrics Overview */}
        {/* Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <EnhancedMetricCard
            title="Total Templates"
            value={templates?.summary?.totalTemplates || 0}
            change={10} // Placeholder, adjust based on your data or logic
            changeType="increase"
            unit="templates"
            icon={FileText}
            color="blue"
            isRealtime={true}
            trend={[1, 1, 1, 2, 2, 2, templates?.summary?.totalTemplates || 0]}
          />
          <EnhancedMetricCard
            title="Active Templates"
            value={templates?.summary?.activeTemplates || 0}
            change={5} // Placeholder, adjust based on your data or logic
            changeType="increase"
            unit="templates"
            icon={Clock}
            color="green"
            isRealtime={true}
            trend={[0, 0, 1, 1, 1, 1, templates?.summary?.activeTemplates || 0]}
          />
          <EnhancedMetricCard
            title="Inactive Templates"
            value={templates?.summary?.inactiveTemplates || 0}
            change={5} // Placeholder, adjust based on your data or logic
            changeType="increase"
            unit="templates"
            icon={Clock}
            color="yellow"
            isRealtime={true}
            trend={[
              0,
              0,
              0,
              1,
              1,
              1,
              templates?.summary?.inactiveTemplates || 0,
            ]}
          />
        </div>

        {/* Filters & Search */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search templates..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                >
                  <option value="All">All Categories</option>
                  {Object.keys(TEMPLATE_CATEGORIES).map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                >
                  <option value="name">Sort by Name</option>
                  <option value="usage">Sort by Usage</option>
                  <option value="accuracy">Sort by Accuracy</option>
                  <option value="recent">Sort by Recent</option>
                  <option value="orderno">Sort by Order</option>
                </select>
                <label className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm">
                  <input
                    type="checkbox"
                    checked={showOnlyActive}
                    onChange={(e) => setShowOnlyActive(e.target.checked)}
                    className="rounded"
                  />
                  Active only
                </label>
                <div className="flex items-center gap-2 border border-gray-300 rounded-lg">
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-r-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-l-none"
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content */}
        {isFetching ? (
          <div>Loading...</div>
        ) : isFetchError ? (
          <div>Error loading templates</div>
        ) : sortedTemplates.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No templates found
              </h3>
              <p className="text-gray-600 mb-6">
                Create your first template to start processing documents
              </p>
              <Button onClick={() => router.push(`/form-builder`)}>
                <Plus className="w-4 h-4 mr-2" />
                Create Template
              </Button>
            </CardContent>
          </Card>
        ) : viewMode === "grid" ? (
          renderGridView()
        ) : (
          renderListView()
        )}

        {/* Delete Confirmation Dialog */}
        <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure?</DialogTitle>
              <DialogDescription>
                Do you want to delete the template "{templateToDelete?.name}"?
                This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={handleDeleteCancel}
                disabled={isDeleting}
              >
                No
              </Button>
              <Button
                variant="destructive"
                onClick={handleDeleteConfirm}
                disabled={isDeleting}
              >
                Yes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* View Template Modal */}
        {selectedTemplateId && (
          <ViewTemplate
            templateId={selectedTemplateId}
            isOpen={!!selectedTemplateId}
            onClose={() => setSelectedTemplateId(null)}
          />
        )}
      </div>
    </div>
  );
}
