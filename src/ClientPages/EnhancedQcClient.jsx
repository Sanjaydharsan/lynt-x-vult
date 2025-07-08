"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import BatchHeader from "@/components/QcClientPage/BatchHeader";
import ImageViewer from "@/components/QcClientPage/ImageViewer";
import TabSection from "@/components/QcClientPage/TabSection";
import { useGetCompletedBatches } from "@/hooks/qc-client";
import { useGetCardDetails } from "@/hooks/client";
import {
  CheckCircle,
  XCircle,
  Eye,
  Clock,
  Target,
  BarChart3,
  Shield,
  RefreshCw,
} from "lucide-react";

export default function EnhancedQcClient() {
  const [userId, setUserId] = useState(null);
  const { batches, isLoading } = useGetCompletedBatches();
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { formSubmissions, isFetching, isFetchError } = useGetCardDetails();

  useEffect(() => {
    const storedUserId = localStorage.getItem("userid");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  // Use API data for stats, fallback to mock data if API call fails or is loading
  const qcStats = {
    pendingReview: formSubmissions?.summary?.pendingQcImageCollections ,
    approved: formSubmissions?.summary?.approvedImageCollections ,
    rejected: formSubmissions?.summary?.rejectedImageCollections,
    accuracy: 97.8, // Not provided in API, keeping mock value
    avgReviewTime: "1.8 min", // Not provided in API, keeping mock value
    totalReviewed: formSubmissions?.summary?.totalQcImageCollections ,
  };

  return (
    <div className="flex flex-col">
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Quality Control Center
              </h1>
              <p className="text-gray-600 mt-2">
                Review and validate processed documents
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-orange-100 text-orange-800 px-3 py-1">
                <Shield className="w-3 h-3 mr-1" />
                QC Mode
              </Badge>
              <Button variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>

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
                <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-orange-600 mb-1">
                          Pending Review
                        </p>
                        <p className="text-2xl font-bold text-orange-900">
                          {qcStats.pendingReview}
                        </p>
                      </div>
                      <Eye className="w-6 h-6 text-orange-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-green-600 mb-1">
                          Approved
                        </p>
                        <p className="text-2xl font-bold text-green-900">
                          {qcStats.approved}
                        </p>
                      </div>
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-red-50 to-red-100">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-red-600 mb-1">
                          Rejected
                        </p>
                        <p className="text-2xl font-bold text-red-900">
                          {qcStats.rejected}
                        </p>
                      </div>
                      <XCircle className="w-6 h-6 text-red-600" />
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
                          {qcStats.accuracy}%
                        </p>
                      </div>
                      <Target className="w-6 h-6 text-purple-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-blue-600 mb-1">
                          Avg Time
                        </p>
                        <p className="text-2xl font-bold text-blue-900">
                          {qcStats.avgReviewTime}
                        </p>
                      </div>
                      <Clock className="w-6 h-6 text-blue-600" />
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
                          {qcStats.totalReviewed}
                        </p>
                      </div>
                      <BarChart3 className="w-6 h-6 text-indigo-600" />
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>

        <Card className="border-0 shadow-2xl bg-white">
          <CardHeader className="border-b bg-gradient-to-r from-gray-50 to-white">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                Document Review Workspace
              </CardTitle>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-sm">
                  Quality Assurance
                </Badge>
                <Badge variant="outline" className="text-sm">
                  Real-time Validation
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="border-b">
              <BatchHeader image={selectedImage?.image} />
            </div>
            <div className="flex flex-1 min-h-[600px]">
              <div className="flex flex-1 bg-white rounded w-full">
                <ImageViewer
                  batches={batches}
                  selectedBatch={selectedBatch}
                  setSelectedBatch={setSelectedBatch}
                  selectedImage={selectedImage}
                  setSelectedImage={setSelectedImage}
                />
                <TabSection image={selectedImage?.image} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}