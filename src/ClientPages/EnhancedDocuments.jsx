"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Search,
  Download,
  Upload,
  MoreHorizontal,
  Eye,
  RefreshCw,
  Calendar,
  Clock,
  FileText,
  CheckCircle,
  AlertTriangle,
  Loader,
  Users,
  Tag,
  Grid3X3,
  List,
  Plus,
  Trash,
  Pen,
  Pencil
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useBatches } from '@/hooks/dashboard';
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose } from "@/components/ui/drawer";
import FileUploader from "@/components/OrderManagement/FileUploader";
import EditBatch from "@/components/OrderManagement/EditBatch";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.js";

const STATUS_CONFIG = {
  'Processing': {
    color: 'bg-blue-100 text-blue-800 border-blue-200',
    icon: Loader,
    description: 'Currently being processed'
  },
  'Completed': {
    color: 'bg-green-100 text-green-800 border-green-200',
    icon: CheckCircle,
    description: 'Processing completed successfully'
  },
  'Pending QC': {
    color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    icon: AlertTriangle,
    description: 'Awaiting quality control review'
  },
  'Failed': {
    color: 'bg-red-100 text-red-800 border-red-200',
    icon: AlertTriangle,
    description: 'Processing failed - needs attention'
  },
  'not processed': {
    color: 'bg-gray-100 text-gray-800 border-gray-200',
    icon: AlertTriangle,
    description: 'Not yet processed'
  }
};

const SOURCE_CONFIG = {
  'direct_method': { icon: '🔗', color: 'text-blue-600' },
  'FTP Upload': { icon: '📁', color: 'text-green-600' },
  'Email': { icon: '📧', color: 'text-purple-600' },
  'Manual Upload': { icon: '⬆️', color: 'text-orange-600' }
};

export default function EnhancedDocuments() {
  const [viewMode, setViewMode] = useState('list');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedSource, setSelectedSource] = useState('All');
  const [batchName, setBatchName] = useState("order-" + Date.now());
  const [expandedBatchId, setExpandedBatchId] = useState(null);
  const [expandedImageDocId, setExpandedImageDocId] = useState(null);
  const [convertedImages, setConvertedImages] = useState([]);
  const [isConverting, setIsConverting] = useState(false);
  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);
  const [editingBatch, setEditingBatch] = useState(null);

  const router = useRouter();
  const { data: batches, isLoading, refetch } = useBatches();

  const enhancedBatches = batches?.map(batch => ({
    id: batch.id,
    name: batch.batchname,
    source: batch.method,
    status: batch.status || 'not processed',
    documents: batch.imagescount,
    created: batch.createdat,
    progress: batch.progress || 0,
    accuracy: 98.5,
    assignedTo: ['Saran V', 'John D'],
    priority: batch.priority || 'Medium',
    estimatedCompletion: new Date(new Date(batch.createdat).getTime() + 4 * 60 * 60 * 1000).toISOString(),
    completedAt: batch.status === 'Completed' ? batch.updatedat : null,
    documentsList: batch.imagecollection || []
  })) || [];

  const filteredBatches = enhancedBatches.filter(batch => {
    const matchesSearch = batch.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'All' || batch.status === selectedStatus;
    const matchesSource = selectedSource === 'All' || batch.source === selectedSource;
    return matchesSearch && matchesStatus && matchesSource;
  });

  const convertPdfToImage = async (doc) => {
    const docId = doc.id || doc.filename;

    if (expandedImageDocId === docId) {
      setExpandedImageDocId(null);
      setConvertedImages([]);
      return;
    }

    setExpandedImageDocId(docId);
    setIsConverting(true);
    setConvertedImages([]);

    try {
      const pdf = await pdfjsLib.getDocument(doc.image).promise;
      const numPages = pdf.numPages;
      const allImages = [];

      for (let pageNum = 1; pageNum <= numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const viewport = page.getViewport({ scale: 1.0 });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        await page.render({ canvasContext: context, viewport }).promise;

        allImages.push({
          page: pageNum,
          dataUrl: canvas.toDataURL("image/png"),
          filename: doc.filename
        });
      }

      setConvertedImages(allImages);
    } catch (err) {
      console.error("Error converting PDF:", err);
      setConvertedImages([]);
    } finally {
      setIsConverting(false);
    }
  };

const handleDeleteBatch = async (batchId) => {
  const confirmed = window.confirm("Are you sure you want to delete this batch?");
  if (!confirmed) return;

  try {
    const response = await fetch(`/api/batches/${batchId}/delete`, {
      method: 'PUT', // changed from DELETE to PUT
    });

    if (!response.ok) throw new Error("Failed to deactivate");
    alert("Deleted successfully");

    refetch(); // Refresh the list after update
  } catch (error) {
    console.error("Delete failed", error);
    alert("Error deleting batch");
  }
};



  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatTimeAgo = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));

    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  const StatusBadge = ({ status }) => {
    const config = STATUS_CONFIG[status] || STATUS_CONFIG['not processed'];
    const Icon = config.icon;

    return (
      <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${config.color}`}>
        <Icon className="w-3 h-3" />
        {status}
      </div>
    );
  };

  const ProgressBar = ({ progress, status }) => {
    const getProgressColor = () => {
      if (status === 'Failed') return 'bg-red-500';
      if (status === 'Completed') return 'bg-green-500';
      if (progress > 80) return 'bg-blue-500';
      if (progress > 50) return 'bg-yellow-500';
      return 'bg-gray-300';
    };



    return (
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-300 ${getProgressColor()}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    );
  };

  const renderListView = () => (
    <div className="space-y-4">
      {filteredBatches.map((batch) => (
        <Card
          key={batch.id}
          className="hover:shadow-lg transition-all duration-200 border-l-4 border-l-blue-500"
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-blue-50">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">{batch.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                    <span className="flex items-center gap-1">
                      {SOURCE_CONFIG[batch.source]?.icon || '🔗'} {batch.source}
                    </span>
                    <span className="flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      {batch.documents} docs
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {formatTimeAgo(batch.created)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <StatusBadge status={batch.status} />
                <Badge
                  variant="outline"
                  className={
                    batch.priority === 'High'
                      ? 'border-red-200 text-red-700'
                      : batch.priority === 'Medium'
                        ? 'border-yellow-200 text-yellow-700'
                        : 'border-gray-200 text-gray-700'
                  }
                >
                  {batch.priority}
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <div className="text-xs text-gray-500 mb-1">Progress</div>
                <div className="flex items-center gap-2">
                  <ProgressBar progress={batch.progress} status={batch.status} />
                  <span className="text-sm font-medium">{batch.progress}%</span>
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-500 mb-1">Accuracy</div>
                <div className="text-sm font-semibold text-green-600">{batch.accuracy}%</div>
              </div>

              <div>
                <div className="text-xs text-gray-500 mb-1">Assigned To</div>
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3 text-gray-400" />
                  <span className="text-sm">{batch.assignedTo.join(', ')}</span>
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-500 mb-1">
                  {batch.status === 'Completed' ? 'Completed' : 'ETA'}
                </div>
                <div className="text-sm">
                  {batch.status === 'Completed'
                    ? formatDate(batch.completedAt)
                    : formatDate(batch.estimatedCompletion)}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedBatchId(batch.id === expandedBatchId ? null : batch.id);
                  }}
                >
                  <Eye className="w-4 h-4 mr-1" />
                  {expandedBatchId === batch.id ? 'Hide' : 'View'}
                </Button>

                <Button variant="ghost" size="sm">
                  <Download className="w-4 h-4 mr-1" />
                  Export
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setEditingBatch(batch);
                    setIsEditDrawerOpen(true);
                  }}
                >
                  <Pencil className="w-4 h-4 mr-1" />
                  Edit
                </Button>


                <Button variant="ghost" size="sm" onClick={() => handleDeleteBatch(batch.id)}>
                  <Trash className="w-4 h-4 mr-1" />
                  Delete
                </Button>


              </div>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>

            {expandedBatchId === batch.id && (
              <div className="mt-6 space-y-2 border-t pt-4">
                {batch.documentsList.map((doc, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between border p-3 rounded-md bg-gray-50"
                  >
                    <div className="w-1/3 truncate">{doc.filename}</div>
                    <div className="w-1/6 text-sm text-gray-600 flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      {formatDate(doc.created_date)}
                    </div>
                    <div className="w-1/4 flex justify-center">
                      <Drawer direction="right">
                        <DrawerTrigger asChild>
                          <Button
                            className="flex items-center cursor-pointer gap-2 bg-blue-500 text-white px-3 py-1 rounded-xl hover:bg-blue-600 transition-colors"
                            onClick={() => convertPdfToImage(doc)}
                          >
                            <Eye className="w-5 h-5 mr-1" />
                            View Image
                          </Button>
                        </DrawerTrigger>
                        <DrawerContent className="custom-drawer-content bg-white rounded-l-xl shadow-xl p-6 overflow-y-auto">
                          <DrawerTitle className="text-lg font-semibold">Image Preview</DrawerTitle>
                          <DrawerClose className="absolute top-4 right-4">
                            <X className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                          </DrawerClose>
                          {isConverting ? (
                            <div className="flex justify-center items-center h-full">
                              <Loader className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
                            </div>
                          ) : convertedImages.length > 0 ? (
                            <div className="space-y-6">
                              {convertedImages.map((img, idx) => (
                                <div key={idx}>
                                  <p className="text-sm font-semibold mb-1">
                                    {img.filename} (Page {img.page})
                                  </p>
                                  <img
                                    src={img.dataUrl}
                                    alt={img.filename}
                                    className="w-full rounded-md"
                                  />
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-gray-600">
                              No images available.
                            </p>
                          )}
                        </DrawerContent>
                      </Drawer>
                    </div>
                    <div className="w-1/6 text-center">
                      <Badge className="bg-blue-100 text-blue-700">{doc.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderGridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredBatches.map((batch) => (
        <Card
          key={batch.id}
          className="hover:shadow-lg transition-all duration-200 cursor-pointer"
          onClick={() => router.push(`/documents/${batch.id}`)}
        >
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-lg bg-blue-50">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <StatusBadge status={batch.status} />
            </div>
            <CardTitle className="text-lg">{batch.name}</CardTitle>
            <div className="text-sm text-gray-500">
              {SOURCE_CONFIG[batch.source]?.icon || '🔗'} {batch.source}
            </div>
          </CardHeader>

          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Documents:</span>
                <span className="font-medium">{batch.documents}</span>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500">Progress:</span>
                  <span className="font-medium">{batch.progress}%</span>
                </div>
                <ProgressBar progress={batch.progress} status={batch.status} />
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Accuracy:</span>
                <span className="font-medium text-green-600">{batch.accuracy}%</span>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <div className="text-xs text-gray-500 mb-1">Created</div>
                <div className="text-sm">{formatDate(batch.created)}</div>
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
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Document Batches</h1>
            <p className="text-gray-600 mt-1">
              {filteredBatches.length} batches, {filteredBatches.reduce((sum, b) => sum + b.documents, 0)} documents
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => refetch()}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <Button className={'bg-gray-800 hover:bg-gray-900'}>Upload Documents</Button>
              </DrawerTrigger>
              <DrawerContent className="custom-drawer-content bg-white rounded-l-xl shadow-xl p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-4">
                  <DrawerTitle className="text-lg font-semibold">Upload Orders</DrawerTitle>
                  <DrawerClose>
                    <X className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                  </DrawerClose>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="batchName" className="font-medium mb-2">Order Name</Label>
                    <Input
                      id="batchName"
                      value={batchName}
                      onChange={(e) => setBatchName(e.target.value)}
                      placeholder="Enter batch name"
                    />
                  </div>
                  <FileUploader batchName={batchName} />
                </div>
              </DrawerContent>
            </Drawer>

            <EditBatch
  isOpen={isEditDrawerOpen}
  onClose={() => setIsEditDrawerOpen(false)}
  batch={editingBatch}
  onUpdate={refetch}
/>


          </div>
        </div>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search batches..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                >
                  <option value="All">All Status</option>
                  {Object.keys(STATUS_CONFIG).map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>

                <select
                  value={selectedSource}
                  onChange={(e) => setSelectedSource(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                >
                  <option value="All">All Sources</option>
                  {Object.keys(SOURCE_CONFIG).map(source => (
                    <option key={source} value={source}>{source}</option>
                  ))}
                </select>

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

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <Loader className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
              <p className="text-gray-600">Loading document batches...</p>
            </div>
          </div>
        ) : filteredBatches.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No batches found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search filters or upload new documents</p>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Upload Documents
              </Button>
            </CardContent>
          </Card>
        ) : (
          viewMode === 'list' ? renderListView() : renderGridView()
        )}
      </div>
    </div>
  );
}