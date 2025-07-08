import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Users,
  UserPlus,
  Shield,
  Eye,
  Zap,
  Target,
  Search,
  Download,
  Clock,
  MapPin,
  Edit3,
  Trash2,
  MoreVertical,
  X,
  LucideCrown,
  Mail,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import toast from "react-hot-toast";

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

export default function MembersTab({
  teamData,
  searchTerm,
  setSearchTerm,
  selectedRole,
  setSelectedRole,
  drawerOpen,
  setDrawerOpen,
  formData,
  setFormData,
  isCreating,
  createTeamMember,
  user,
  parsedOrgId,
  orgid,
}) {
  const filteredTeam = teamData.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === "all" || member.role === selectedRole;
    return matchesSearch && matchesRole;
  });

//   console.log("teamData:",teamData)

  const handleSubmit = () => {
    if (!formData.fullname || !formData.email) {
      return toast.error("Please fill in all fields");
    }

    if (!parsedOrgId || !orgid) {
      return toast.error("Missing organization data");
    }

    createTeamMember(
      {
        fullname: formData.fullname,
        email: formData.email,
        parentid: user?.id,
        organizationid: parsedOrgId,
        Org_ID: orgid,
      },
      {
        onSuccess: () => {
          setDrawerOpen(false);
          setFormData({ fullname: "", email: "" });
        },
      }
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search team members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
          >
            <option value="all">All Roles</option>
            {Object.entries(ROLES).map(([key, role]) => (
              <option key={key} value={key}>
                {role.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => setDrawerOpen(true)}
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Add Member
          </Button>

          <Drawer
            open={drawerOpen}
            onOpenChange={setDrawerOpen}
            direction="right"
          >
            <DrawerContent className="fixed right-0 top-0 h-full w-[400px] max-w-full bg-white shadow-xl border-l z-50 animate-in slide-in-from-right duration-300">
              <DrawerHeader>
                <div className="flex justify-between items-center">
                  <DrawerTitle className="text-xl font-semibold">
                    Invite Team Member
                  </DrawerTitle>
                  <DrawerClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                    </Button>
                  </DrawerClose>
                </div>
              </DrawerHeader>

              <div className="space-y-4 mt-4 px-6">
                <Input
                  placeholder="Full Name"
                  value={formData.fullname}
                  onChange={(e) =>
                    setFormData({ ...formData, fullname: e.target.value })
                  }
                />
                <Input
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                <Button
                  className="w-full mt-2 bg-blue-600 hover:bg-blue-700"
                  onClick={handleSubmit}
                >
                  {isCreating ? "Adding..." : "Add Member"}
                </Button>

                <Button
                  variant="outline"
                  className="w-full "
                  onClick={() => setDrawerOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeam.map((member) => {
          const role = ROLES[member.role];

          return (
            <Card
              key={member.id}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                          member.status === "active"
                            ? "bg-green-500"
                            : "bg-gray-400"
                        }`}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-500">{member.email}</p>
                    </div>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit3 className="w-4 h-4 mr-2" />
                        Edit Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Mail className="w-4 h-4 mr-2" />
                        Send Message
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Remove Member
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge className={`${role.color} border-0`}>
                      <role.icon className="w-3 h-3 mr-1" />
                      {role.name}
                    </Badge>
                    <span className="text-sm text-gray-500">
                      {member.department}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Documents</p>
                      <p className="font-semibold text-gray-900">
                        {member.documentsProcessed.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Accuracy</p>
                      <p
                        className={`font-semibold ${
                          member.accuracy >= 95
                            ? "text-green-600"
                            : member.accuracy >= 90
                            ? "text-yellow-600"
                            : "text-red-600"
                        }`}
                      >
                        {member.accuracy > 0 ? `${member.accuracy}%` : "N/A"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>{member.lastActive}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <MapPin className="w-3 h-3" />
                      <span>{member.location.split(",")[0]}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredTeam.length === 0 && (
        <div className="text-center py-12">
          <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            No members found
          </h3>
          <p className="text-gray-500">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}
