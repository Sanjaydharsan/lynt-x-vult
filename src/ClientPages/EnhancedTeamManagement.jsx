"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUser, useOrganization } from "@clerk/nextjs";
import { Upload, UserPlus, BarChart3, Users, Shield } from "lucide-react";
import useUserStore from "@/store/userStore";
import OverviewTab from "@/components/TeamManagement/OverviewTab";
import MembersTab from "@/components/TeamManagement/MembersTab";
import RolesTab from "@/components/TeamManagement/RolesTab";
import { useCreateTeamMember, useGetTeamMembers } from "@/hooks/teammembers";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function EnhancedTeamManagement() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [formData, setFormData] = useState({ fullname: "", email: "" });
  const [teamData, setTeamData] = useState([]);

  const { user } = useUser();
  const { organization } = useOrganization();
  const { createTeamMember, isCreating } = useCreateTeamMember();

  const { organizationid, orgid } = useUserStore();
  const parsedOrgId = organizationid ? parseInt(organizationid) : null;

  const {
    teamMembers,
    isLoading: isTeamMembersLoading,
  } = useGetTeamMembers(parsedOrgId);

  // console.log("teamMembers", teamMembers);

  const MOCK_TEAM_DATA = [];

  const mappedTeamMembers =
    Array.isArray(teamMembers) && teamMembers.length > 0
      ? teamMembers.map((member) => ({
          id: member.id,
          name: member.fullname,
          email: member.email,
          role: member.role || "viewer",
          status: member.status || "pending",
          avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
            member.fullname
          )}&background=8B5CF6&color=fff`,
          department: member.department || "General",
          joinDate: member.joinDate || "2025-01-01",
          lastActive: member.lastActive || "1 hour ago",
          documentsProcessed: member.documentsProcessed || 64,
          accuracy: member.accuracy || 97.02,
          location: member.location || "Austin, TX",
          phone: member.phone || "+91 1234567890",
          timezone: member.timezone || "CST",
          shift: member.shift || "Day Shift",
        }))
      : MOCK_TEAM_DATA;

  useEffect(() => {
    setTeamData(mappedTeamMembers);
  }, [teamMembers]);

  if (isTeamMembersLoading) {
    return <LoadingSpinner />;
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Team Management
              </h1>
              <p className="text-gray-600 mt-2">
                Manage your team, roles, and permissions
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Upload className="w-4 h-4 mr-2" />
                Bulk Import
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <UserPlus className="w-4 h-4 mr-2" />
                Invite Team
              </Button>
            </div>
          </div>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="members" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Members
            </TabsTrigger>
            <TabsTrigger value="roles" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Roles & Permissions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <OverviewTab teamData={teamData} />
          </TabsContent>

          <TabsContent value="members">
            <MembersTab
              teamData={teamData}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedRole={selectedRole}
              setSelectedRole={setSelectedRole}
              drawerOpen={drawerOpen}
              setDrawerOpen={setDrawerOpen}
              formData={formData}
              setFormData={setFormData}
              isCreating={isCreating}
              createTeamMember={createTeamMember}
              user={user}
              parsedOrgId={parsedOrgId}
              orgid={orgid}
            />
          </TabsContent>

          <TabsContent value="roles">
            <RolesTab teamData={teamData} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}