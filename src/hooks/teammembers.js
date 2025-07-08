import { post, get } from "@/utils/apiHelper";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useCreateTeamMember() {
  const queryClient = useQueryClient();

  const createTeamMemberMutation = useMutation({
    mutationFn: (payload) => post("/teammembers", payload),
    onSuccess: () => {
      toast.success("Team member added successfully!");
      queryClient.invalidateQueries(["teammembers"]);
    },
    onError: (error) => {
      const message = error?.message;

      if (
        message === "User with this email already exists in the team." ||
        message === "Missing required fields."
      ) {
        toast.error(message);
      } else {
        toast.error("Failed to add team member.");
      }

      console.error("Error adding team member:", error);
    },
  });

  return {
    createTeamMember: createTeamMemberMutation.mutate,
    isCreating: createTeamMemberMutation.isLoading,
    isError: createTeamMemberMutation.isError,
  };
}


export function useGetTeamMembers(organizationId) {
  const {
    data: teamMembers,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["teammembers", organizationId],
    queryFn: () => {
      if (!organizationId) throw new Error("Missing organizationId param");
      return get(`/teammembers/${organizationId}`);
    },
    enabled: !!organizationId,
    onError: (error) => {
      console.error("Error fetching team members:", error);
      toast.error("Failed to fetch team members.");
    },
  });

  return {
    teamMembers,
    isLoading,
    isError,
  };
}