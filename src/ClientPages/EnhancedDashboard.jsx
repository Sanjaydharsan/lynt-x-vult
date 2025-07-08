"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  FileText,
  Zap,
  Target,
  Users,
  DollarSign,
  TrendingUp,
  Bell,
  Settings,
  Download,
  Filter,
  RefreshCw,
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle,
  Activity,
  BarChart3,
  Cpu,
  Database,
  Globe,
} from "lucide-react";
import EnhancedMetricCard from "@/components/Dashboard/EnhancedMetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useUserData } from "@/hooks/dashboard";
import { useEnhancedDashboard } from "@/hooks/enhancedDashboard";
import SyncTechniqueProvider from "@/components/SyncTechniqueProvider";

export default function EnhancedDashboard() {
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [selectedTimeRange, setSelectedTimeRange] = useState("24h");
  const router = useRouter();
  const { data: dbUser } = useUserData();

  const {
    dashboardData,
    isLoading,
    metrics,
    realtime,
    ai,
    cost,
    activity,
    health,
    alerts,
    refetch,
  } = useEnhancedDashboard(selectedTimeRange);

  // useEffect(() => {
  //   setLastUpdate(new Date());
  // }, [dashboardData]);
  console.log("dashboardDataaaaaaaa", dashboardData);
  const handleRefresh = () => {
    refetch();
    setLastUpdate(new Date());
  };

  const formatTime = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(date);
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case "error":
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case "info":
        return <CheckCircle className="w-4 h-4 text-blue-500" />;
      default:
        return <Bell className="w-4 h-4 text-gray-500" />;
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading enterprise dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* <SyncTechniqueProvider /> */}
      <div className="min-h-screen bg-gray-50 py-6">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back, {dbUser?.email?.split("@")[0] || "User"} 👋
              </h1>
              <p className="text-gray-600">
                Here's what's happening with your document processing today.
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Time Range Selector */}
              <select
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
              >
                <option value="1h">Last Hour</option>
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
              </select>

              {/* Refresh Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={handleRefresh}
                disabled={isLoading}
              >
                <RefreshCw
                  className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`}
                />
                Refresh
              </Button>

              {/* Export Button */}
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          {/* Live Status Bar */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">
                    System Status: Online
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  Last updated: {formatTime(lastUpdate)}
                </div>
                <div className="text-sm text-gray-600">
                  Queue: {realtime?.queueLength || 0} documents
                </div>
              </div>

              {alerts.length > 0 && (
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-orange-500" />
                  <span className="text-sm text-orange-600">
                    {alerts.length} alerts
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Core Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <EnhancedMetricCard
              title="Documents Today"
              value={dashboardData?.totalbatch || 0}
              previousValue={metrics?.documentsYesterday}
              change={28.4}
              changeType="increase"
              unit="docs"
              icon={FileText}
              color="blue"
              isRealtime={true}
              trend={[120, 135, 142, 158, 163, 175, 189]}
              onClick={() => router.push("/documents")}
            />

            <EnhancedMetricCard
              title="Finished Batches"
              value={dashboardData?.finishedbatchcount || 0}
              change={10} // Adjust based on your data or logic
              changeType="increase"
              unit="batches"
              icon={CheckCircle} // Use an appropriate icon
              color="green"
              isRealtime={true}
              trend={[0, 0, 0, 0, 0, 0, 1]} // Example trend based on API data
            />

            <EnhancedMetricCard
              title="Pending Batches"
              value={dashboardData?.pendingbatchescount || 0}
              change={5} // Adjust based on your data or logic
              changeType="increase"
              unit="batches"
              icon={Clock} // Use an appropriate icon
              color="yellow"
              isRealtime={true}
              trend={[1, 1, 1, 1, 1, 1, 1]} // Example trend based on API data
            />

            <EnhancedMetricCard
              title="Active Users"
              value={dashboardData?.totalUsers || 0}
              change={12.5}
              changeType="increase"
              icon={Users}
              color="orange"
              isRealtime={true}
              trend={[14, 15, 16, 17, 18, 18, 19]}
            />
          </div>

          {/* Enhanced Analytics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Cost Analytics */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  Cost Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Cost per Document
                    </span>
                    <span className="font-semibold">
                      ${cost?.costPerDocument || 0.05}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Daily Cost</span>
                    <span className="font-semibold text-green-600">
                      ${(cost?.dailyCost || 0).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Monthly Projection
                    </span>
                    <span className="font-semibold">
                      ${(cost?.monthlyCost || 0).toFixed(2)}
                    </span>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 mt-4">
                    <div className="text-sm text-green-800">
                      <strong>Savings vs Manual:</strong>
                    </div>
                    <div className="text-lg font-bold text-green-600">
                      ${(cost?.costSavingsVsManual || 0).toFixed(2)}/day
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Analytics */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-purple-600" />
                  AI Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ai?.confidenceDistribution?.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            item.confidence_level === "Excellent"
                              ? "bg-green-500"
                              : item.confidence_level === "Good"
                              ? "bg-blue-500"
                              : item.confidence_level === "Fair"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }`}
                        />
                        <span className="text-sm text-gray-600">
                          {item.confidence_level}
                        </span>
                      </div>
                      <Badge variant="outline">{item.count}</Badge>
                    </div>
                  ))}

                  <div className="bg-purple-50 rounded-lg p-3 mt-4">
                    <div className="text-sm text-purple-800">
                      <strong>Total AI Processed:</strong>
                    </div>
                    <div className="text-lg font-bold text-purple-600">
                      {ai?.totalProcessed || 0} documents
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* System Health */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-600" />
                  System Health
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Uptime</span>
                    <Badge className="bg-green-100 text-green-800">
                      {health?.uptime || 99.9}%
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">API Response</span>
                    <span className="font-semibold">
                      {health?.apiResponseTime || 120}ms
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Queue Length</span>
                    <span className="font-semibold">
                      {health?.queueLength || 0}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Error Rate</span>
                    <span className="font-semibold text-green-600">
                      {health?.errorRate || 0.1}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Storage Used</span>
                    <span className="font-semibold">
                      {(health?.storageUsed || 45).toFixed(1)} GB
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Live Activity Feed */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Activity Stream */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Live Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {activity?.slice(0, 10).map((activityItem, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <div className="flex-1">
                        <div className="text-sm font-medium">
                          {activityItem.document}
                        </div>
                        <div className="text-xs text-gray-500">
                          {activityItem.documentType} •{" "}
                          {activityItem.confidence}% confidence •{" "}
                          {activityItem.user}
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">
                        {new Date(activityItem.timestamp).toLocaleTimeString()}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Alerts Panel */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-orange-600" />
                  System Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {alerts.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-500" />
                      <p>All systems operating normally</p>
                    </div>
                  ) : (
                    alerts.map((alert, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                      >
                        {getAlertIcon(alert.type)}
                        <div className="flex-1">
                          <div className="text-sm font-medium">
                            {alert.message}
                          </div>
                          <div className="text-xs text-gray-500">
                            Priority: {alert.priority} •{" "}
                            {new Date(alert.timestamp).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
