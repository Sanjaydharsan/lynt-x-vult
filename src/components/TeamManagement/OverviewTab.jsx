import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BarChart3, Award, Activity, TrendingUp, LucideCrown, Shield, Zap, Target, Eye } from "lucide-react";

const ROLES = {
  admin: {
    name: "Administrator",
    icon: LucideCrown,
    color: "text-purple-600 bg-purple-100",
    permissions: "Full Access",
  },
  manager: {
    name: "Manager",
    icon: Shield,
    color: "text-blue-600 bg-blue-100",
    permissions: "Team & Reports",
  },
  processor: {
    name: "Processor",
    icon: Zap,
    color: "text-green-600 bg-green-100",
    permissions: "Process Documents",
  },
  qc: {
    name: "Quality Control",
    icon: Target,
    color: "text-orange-600 bg-orange-100",
    permissions: "Review & Approve",
  },
  viewer: {
    name: "Viewer",
    icon: Eye,
    color: "text-gray-600 bg-gray-100",
    permissions: "View Only",
  },
};

const TEAM_STATS = {
  totalMembers: 5,
  activeMembers: 4,
  avgAccuracy: 97.8,
  totalProcessed: 5839,
  onlineNow: 3,
  departments: ["Operations", "Processing", "Quality Control", "Analytics"],
};

export default function OverviewTab({ teamData }) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600 mb-1">
                  Team Members
                </p>
                <p className="text-3xl font-bold text-blue-900">1</p>
                <p className="text-xs text-blue-600 mt-1">
                  {TEAM_STATS.activeMembers} active
                </p>
              </div>
              <Users className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600 mb-1">
                  Avg Accuracy
                </p>
                <p className="text-3xl font-bold text-green-900">
                  {TEAM_STATS.avgAccuracy}%
                </p>
                <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +2.1% this month
                </p>
              </div>
              <Award className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600 mb-1">
                  Documents Processed
                </p>
                <p className="text-3xl font-bold text-purple-900">
                  {TEAM_STATS.totalProcessed.toLocaleString()}
                </p>
                <p className="text-xs text-purple-600 mt-1">This month</p>
              </div>
              <BarChart3 className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-600 mb-1">
                  Online Now
                </p>
                <p className="text-3xl font-bold text-orange-900">1</p>
                <p className="text-xs text-orange-600 mt-1">Active users</p>
              </div>
              <Activity className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            Performance by Role
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(ROLES).map(([key, role]) => {
              const roleMembers = teamData.filter((m) => m.role === key);
              const avgAccuracy =
                roleMembers.length > 0
                  ? (
                      roleMembers.reduce((sum, m) => sum + m.accuracy, 0) /
                      roleMembers.length
                    ).toFixed(1)
                  : 0;

              return (
                <div key={key} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${role.color}`}
                    >
                      <role.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{role.name}</p>
                      <p className="text-sm text-gray-500">
                        {roleMembers.length} members
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">
                      {avgAccuracy}%
                    </p>
                    <p className="text-sm text-gray-500">accuracy</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
