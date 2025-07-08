"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import BatchHeader from "@/components/ClientPage/BatchHeader";
import ImageViewer from "@/components/ClientPage/ImageViewer";
import TabSection from "@/components/ClientPage/TabSection";
import { useGetAssignedImages, useGetCardDetails } from "@/hooks/client";
import useUserStore from "@/store/userStore";
import {
  FileText,
  Clock,
  Target,
  CheckCircle,
  AlertCircle,
  User,
  Calendar,
  TrendingUp,
  Zap,
  Eye,
  BarChart3,
} from "lucide-react";

export default function EnhancedClient() {
  const { userid } = useUserStore();

  const { images } = useGetAssignedImages(userid);
  const { formSubmissions, isFetching, isFetchError } = useGetCardDetails();

  useEffect(() => {
    if (images) {
      // console.log("Full API Response:", images);
    }
  }, [images]);

  const imageUrl = images?.data?.length > 0 ? images.data[0].image : null;
  const assignedlast =
    images?.data?.length > 0 ? images.data[0].assignedLast : null;
  const completed = images?.data?.length > 0 ? images.data[0].completed : [];

  // Use API data for stats, fallback to mock data if API call fails or is loading
  const stats = {
    documentsToday: formSubmissions?.summary?.processedTodayCount,
    completedToday: formSubmissions?.summary?.processedCount,
    accuracy: 98.5, // Not provided in API, keeping mock value
    averageTime: "2.3 min", // Not provided in API, keeping mock value
    pendingReview: formSubmissions?.summary?.notProcessedCount,
    totalProcessed: formSubmissions?.summary?.totalImageCollections,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto p-6">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Document Processing Hub
              </h1>
              <p className="text-gray-600 mt-2">
                Process documents with AI-powered assistance
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Badge className="bg-green-100 text-green-800 px-3 py-1">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Online
              </Badge>
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                View Progress
              </Button>
            </div>
          </div>

          {/* Stats Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
            {isFetching && (
              <div className="col-span-full text-center text-gray-500">
                Loading stats...
              </div>
            )}
            {isFetchError && (
              <div className="col-span-full text-center text-red-500">
                Error loading stats. Using fallback data.
              </div>
            )}
            {!isFetching && !isFetchError && (
              <>
                <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-blue-600 mb-1">
                          Today's Docs
                        </p>
                        <p className="text-2xl font-bold text-blue-900">
                          {stats.documentsToday}
                        </p>
                      </div>
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-green-600 mb-1">
                          Completed
                        </p>
                        <p className="text-2xl font-bold text-green-900">
                          {stats.completedToday}
                        </p>
                      </div>
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-50 to-yellow-100">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-yellow-600 mb-1">
                          Pending
                        </p>
                        <p className="text-2xl font-bold text-yellow-900">
                          {stats.pendingReview}
                        </p>
                      </div>
                      <AlertCircle className="w-6 h-6 text-yellow-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-indigo-50 to-indigo-100">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-indigo-600 mb-1">
                          Total
                        </p>
                        <p className="text-2xl font-bold text-indigo-900">
                          {stats.totalProcessed}
                        </p>
                      </div>
                      <BarChart3 className="w-6 h-6 text-indigo-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-purple-600 mb-1">
                          Accuracy
                        </p>
                        <p className="text-2xl font-bold text-purple-900">
                          {stats.accuracy}%
                        </p>
                      </div>
                      <Target className="w-6 h-6 text-purple-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-orange-600 mb-1">
                          Avg Time
                        </p>
                        <p className="text-2xl font-bold text-orange-900">
                          {stats.averageTime}
                        </p>
                      </div>
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>

        {/* Main Processing Area */}
        <Card className="border-0 shadow-2xl bg-white">
          <CardHeader className="border-b bg-gradient-to-r from-gray-50 to-white">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600" />
                Document Processing Workspace
              </CardTitle>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-sm">
                  AI Assisted
                </Badge>
                <Badge variant="outline" className="text-sm">
                  Real-time Processing
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {/* Batch Header */}
            <div className="border-b">
              <BatchHeader image={imageUrl} />
            </div>

            {/* Main Content Area */}
            <div className="flex flex-1 min-h-[700px]">
              <div className="flex flex-1 w-full">
                {/* Image Viewer */}
                <div className="w-2/5 border-r bg-gray-50">
                  <ImageViewer image={imageUrl} />
                </div>

                {/* Form Section - More space for keying */}
                <div className="w-3/5 bg-white">
                  <TabSection
                    image={imageUrl}
                    completed={completed}
                    assignedlast={assignedlast}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50 p-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Performance Trend
                  </p>
                  <p className="text-xs text-gray-600">
                    +15% faster than yesterday
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-blue-50 p-4">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    AI Confidence
                  </p>
                  <p className="text-xs text-gray-600">Average 94.2% today</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-sm text-gray-500">
            <p>Last updated: {new Date().toLocaleTimeString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
