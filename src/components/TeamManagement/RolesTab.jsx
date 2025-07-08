import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Crown, Shield, Eye, Zap, Target, Settings } from "lucide-react";

const ROLES = {
  admin: {
    name: "Administrator",
    icon: Crown,
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

export default function RolesTab({ teamData }) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {Object.entries(ROLES).map(([key, role]) => {
          const roleMembers = teamData.filter((m) => m.role === key);

          return (
            <Card key={key} className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${role.color}`}
                  >
                    <role.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{role.name}</h3>
                    <p className="text-sm text-gray-500 font-normal">
                      {role.permissions}
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Active Members
                    </span>
                    <Badge variant="outline">{roleMembers.length}</Badge>
                  </div>

                  {roleMembers.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">
                        Team Members:
                      </p>
                      <div className="space-y-2">
                        {roleMembers.map((member) => (
                          <div
                            key={member.id}
                            className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg"
                          >
                            <Avatar className="w-8 h-8">
                              <AvatarImage
                                src={member.avatar}
                                alt={member.name}
                              />
                              <AvatarFallback className="text-xs">
                                {member.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900">
                                {member.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {member.department}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-semibold text-gray-900">
                                {member.accuracy > 0
                                  ? `${member.accuracy}%`
                                  : "N/A"}
                              </p>
                              <p className="text-xs text-gray-500">accuracy</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-4 border-t">
                    <Button variant="outline" size="sm" className="w-full">
                      <Settings className="w-4 h-4 mr-2" />
                      Configure Permissions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
