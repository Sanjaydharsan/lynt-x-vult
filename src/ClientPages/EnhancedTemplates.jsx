"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Search,
  Plus,
  Edit,
  Copy,
  Trash2,
  MoreHorizontal,
  FileText,
  Target,
  Zap,
  Clock,
  TrendingUp,
  Settings,
  Eye,
  Download,
  Filter,
  Grid3X3,
  List,
  Star,
  Users,
  BarChart3,
  CheckCircle,
  AlertTriangle,
  Pencil, Trash
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import EnhancedMetricCard from '@/components/Dashboard/EnhancedMetricCard';
import ViewTemplate from '@/components/TemplateManagement/ViewTemplate';

const TEMPLATE_CATEGORIES = {
  'Financial': { color: 'bg-green-100 text-green-800 border-green-200', icon: '💰' },
  'Legal': { color: 'bg-blue-100 text-blue-800 border-blue-200', icon: '⚖️' },
  'Procurement': { color: 'bg-purple-100 text-purple-800 border-purple-200', icon: '📋' },
  'Government': { color: 'bg-orange-100 text-orange-800 border-orange-200', icon: '🏛️' },
  'Insurance': { color: 'bg-red-100 text-red-800 border-red-200', icon: '🛡️' }
};

export default function EnhancedTemplates() {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('usage');
  const [showOnlyActive, setShowOnlyActive] = useState(false);

    const [selectedTemplateId, setSelectedTemplateId] = useState(null);
  
  
  const router = useRouter();

  // Enhanced template data with more metrics
  const enhancedTemplates = [
    {
      id: 'invoice',
      name: 'Standard Invoice',
      category: 'Financial',
      fields: 15,
      accuracy: 98.5,
      usage: 124000,
      avgProcessingTime: 1.2,
      isActive: true,
      isPrebuilt: true,
      createdAt: '2024-01-15',
      lastUsed: '2025-06-27T10:30:00Z',
      description: 'Comprehensive invoice template with vendor, amount, dates, and line items',
      icon: '📄',
      color: 'bg-blue-500',
      recentAccuracy: [98.1, 98.3, 98.5, 98.7, 98.5, 98.8, 98.5],
      monthlyUsage: [8500, 9200, 10100, 11500, 12400],
      confidenceDistribution: { high: 89, medium: 8, low: 3 }
    },
    {
      id: 'purchase_order',
      name: 'Purchase Order v2',
      category: 'Procurement',
      fields: 12,
      accuracy: 97.8,
      usage: 89000,
      avgProcessingTime: 0.8,
      isActive: true,
      isPrebuilt: true,
      createdAt: '2024-02-20',
      lastUsed: '2025-06-27T09:15:00Z',
      description: 'Purchase order processing with line items, approvals, and vendor data',
      icon: '📋',
      color: 'bg-purple-500',
      recentAccuracy: [97.2, 97.5, 97.8, 97.6, 97.8, 98.0, 97.8],
      monthlyUsage: [6200, 7100, 7800, 8500, 8900],
      confidenceDistribution: { high: 82, medium: 14, low: 4 }
    },
    {
      id: 'contract',
      name: 'Legal Contract',
      category: 'Legal',
      fields: 20,
      accuracy: 96.2,
      usage: 34000,
      avgProcessingTime: 2.1,
      isActive: true,
      isPrebuilt: true,
      createdAt: '2024-03-10',
      lastUsed: '2025-06-27T08:45:00Z',
      description: 'Complex legal document processing with parties, terms, and clauses',
      icon: '📜',
      color: 'bg-indigo-500',
      recentAccuracy: [95.8, 96.0, 96.2, 96.1, 96.2, 96.5, 96.2],
      monthlyUsage: [2100, 2800, 3200, 3600, 3400],
      confidenceDistribution: { high: 74, medium: 19, low: 7 }
    },
    {
      id: 'receipt',
      name: 'Expense Receipt',
      category: 'Financial',
      fields: 8,
      accuracy: 99.1,
      usage: 156000,
      avgProcessingTime: 0.5,
      isActive: true,
      isPrebuilt: true,
      createdAt: '2024-01-30',
      lastUsed: '2025-06-27T11:20:00Z',
      description: 'Simple receipt processing for expense management',
      icon: '🧾',
      color: 'bg-green-500',
      recentAccuracy: [99.0, 99.1, 99.2, 99.1, 99.1, 99.3, 99.1],
      monthlyUsage: [12000, 13500, 14800, 15200, 15600],
      confidenceDistribution: { high: 94, medium: 5, low: 1 }
    },
    {
      id: 'tax_form',
      name: 'W-2 Tax Form',
      category: 'Government',
      fields: 25,
      accuracy: 96.8,
      usage: 12000,
      avgProcessingTime: 3.2,
      isActive: false,
      isPrebuilt: true,
      createdAt: '2024-01-05',
      lastUsed: '2025-04-15T14:30:00Z',
      description: 'Government tax form processing with validation',
      icon: '📊',
      color: 'bg-orange-500',
      recentAccuracy: [96.5, 96.8, 96.7, 96.8, 96.9, 96.8, 96.8],
      monthlyUsage: [800, 1200, 2800, 3200, 1200],
      confidenceDistribution: { high: 78, medium: 17, low: 5 }
    },
    {
      id: 'insurance',
      name: 'Insurance Claim',
      category: 'Insurance',
      fields: 18,
      accuracy: 95.9,
      usage: 23000,
      avgProcessingTime: 1.8,
      isActive: true,
      isPrebuilt: true,
      createdAt: '2024-04-12',
      lastUsed: '2025-06-26T16:45:00Z',
      description: 'Insurance claim form processing with attachments',
      icon: '🛡️',
      color: 'bg-red-500',
      recentAccuracy: [95.5, 95.7, 95.9, 95.8, 95.9, 96.1, 95.9],
      monthlyUsage: [1800, 2100, 2300, 2500, 2300],
      confidenceDistribution: { high: 71, medium: 21, low: 8 }
    }
  ];

  const filteredTemplates = enhancedTemplates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    const matchesActive = !showOnlyActive || template.isActive;
    return matchesSearch && matchesCategory && matchesActive;
  });

  const sortedTemplates = [...filteredTemplates].sort((a, b) => {
    switch (sortBy) {
      case 'usage':
        return b.usage - a.usage;
      case 'accuracy':
        return b.accuracy - a.accuracy;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'recent':
        return new Date(b.lastUsed) - new Date(a.lastUsed);
      default:
        return 0;
    }
  });

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const formatTimeAgo = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`;
    return `${Math.floor(diffInHours / 168)}w ago`;
  };

  const CategoryBadge = ({ category }) => {
    const config = TEMPLATE_CATEGORIES[category];
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

  const renderGridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sortedTemplates.map((template) => (
        <Card 
          key={template.id}
          className={`hover:shadow-lg transition-all duration-200  ${
            !template.isActive ? 'opacity-75' : ''
          }`}
          // onClick={() => router.push(`/templates/${template.id}`)}
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
                  <Badge variant="outline" className="text-xs border-gray-300 text-gray-500">
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
              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Fields</div>
                  <div className="font-semibold">{template.fields}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Accuracy</div>
                  <div className="font-semibold text-green-600">{template.accuracy}%</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Usage</div>
                  <div className="font-semibold">{formatNumber(template.usage)}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Avg Time</div>
                  <div className="font-semibold">{template.avgProcessingTime}s</div>
                </div>
              </div>

              {/* Accuracy Trend */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500">7d Accuracy</span>
                  <MiniChart data={template.recentAccuracy} color="green" />
                </div>
              </div>

              {/* Last Used */}
              <div className="flex items-center justify-between gap-3 text-xs text-gray-500">
                <span>Last used: {formatTimeAgo(template.lastUsed)}</span>
                <div className="flex items-center gap-4 ">
                  <Eye 
                  onClick={()=> setSelectedTemplateId(1)}
                  className="w-4 h-4 cursor-pointer text-gray-400 hover:text-gray-600 " />
                  <Pencil 
                  onClick={() => router.push(`/edit-template?id=1`)}
                  className="w-4 h-4 cursor-pointer text-gray-400 hover:text-gray-600 " />
                  <Trash className="w-4 h-4 cursor-pointer text-gray-400 hover:text-gray-600 " />
                </div>
              </div>
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
          className={`hover:shadow-lg transition-all duration-200 cursor-pointer ${
            !template.isActive ? 'opacity-75' : ''
          }`}
          onClick={() => router.push(`/templates/${template.id}`)}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <div className={`p-3 rounded-lg ${template.color} bg-opacity-10`}>
                  <span className="text-2xl">{template.icon}</span>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-lg">{template.name}</h3>
                    <CategoryBadge category={template.category} />
                    {template.isPrebuilt && (
                      <Badge variant="secondary" className="text-xs">Prebuilt</Badge>
                    )}
                    {!template.isActive && (
                      <Badge variant="outline" className="text-xs border-gray-300 text-gray-500">
                        Inactive
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div>
                      <div className="text-xs text-gray-500">Fields</div>
                      <div className="font-semibold">{template.fields}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Accuracy</div>
                      <div className="font-semibold text-green-600">{template.accuracy}%</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Usage</div>
                      <div className="font-semibold">{formatNumber(template.usage)}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Avg Time</div>
                      <div className="font-semibold">{template.avgProcessingTime}s</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Last Used</div>
                      <div className="text-sm">{formatTimeAgo(template.lastUsed)}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <MiniChart data={template.recentAccuracy} color="green" />
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
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
            <h1 className="text-3xl font-bold text-gray-900">Document Templates</h1>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <EnhancedMetricCard
            title="Active Templates"
            value={enhancedTemplates.filter(t => t.isActive).length}
            change={4}
            changeType="increase"
            icon={FileText}
            color="blue"
            trend={[20, 21, 22, 23, 24, 24, 24]}
          />
          
          <EnhancedMetricCard
            title="Average Accuracy"
            value={98.2}
            change={1.2}
            changeType="increase" 
            unit="%"
            icon={Target}
            color="green"
            trend={[97.5, 97.8, 98.0, 98.1, 98.2, 98.3, 98.2]}
          />
          
          <EnhancedMetricCard
            title="Documents Processed"
            value={247}
            change={28}
            changeType="increase"
            unit="K"
            icon={Zap}
            color="purple"
            trend={[210, 225, 235, 240, 245, 247, 247]}
          />
          
          <EnhancedMetricCard
            title="Avg Processing Time"
            value={1.2}
            change={-6.3}
            changeType="decrease"
            unit="s"
            icon={Clock}
            color="orange"
            trend={[1.5, 1.4, 1.3, 1.3, 1.2, 1.2, 1.2]}
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
                  {Object.keys(TEMPLATE_CATEGORIES).map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                >
                  <option value="usage">Sort by Usage</option>
                  <option value="accuracy">Sort by Accuracy</option>
                  <option value="name">Sort by Name</option>
                  <option value="recent">Sort by Recent</option>
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
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-r-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
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
        {sortedTemplates.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No templates found</h3>
              <p className="text-gray-600 mb-6">Create your first template to start processing documents</p>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Create Template
              </Button>
            </CardContent>
          </Card>
        ) : (
          viewMode === 'grid' ? renderGridView() : renderListView()
        )}
      </div>
      {selectedTemplateId && (
              <ViewTemplate
                templateId={selectedTemplateId}
                isOpen={!!selectedTemplateId}
                onClose={() => setSelectedTemplateId(null)}
              />
            )}
    </div>
  );
} 