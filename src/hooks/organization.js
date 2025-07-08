import { post, get, patch } from "@/utils/apiHelper";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

// Create organization
export function useCreateOrganization() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const createOrgMutation = useMutation({
    mutationFn: async (payload) => {
      console.log("Sending payload to /organization:", payload);
      const response = await post("/organization", payload);
      console.log("API response:", response);
      return response;
    },
    onSuccess: (data) => {
      console.log("Mutation success:", data);
      toast.success("Organization created successfully!");
      queryClient.invalidateQueries({ queryKey: ["organizations"] });
      router.push("/dashboard");
    },
    onError: (error) => {
      console.error("Mutation error:", error);
      const message =
        error?.response?.data?.error || "Failed to create Organization.";
      toast.error(message);
    },
  });

  return {
    createOrganization: createOrgMutation.mutate,
    isCreating: createOrgMutation.isPending,
    isError: createOrgMutation.isError,
    error: createOrgMutation.error,
  };
}

// Get organization by createdby
export function useGetOrganization(createdby) {
  const {
    data: organization,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["organization", createdby],
    queryFn: () => {
      if (!createdby) throw new Error("Missing createdby param");
      return get(`/organization/createdby/${createdby}`);
    },
    enabled: !!createdby,
    onError: (error) => {
      console.error("Error fetching organization:", error);
      toast.error("Failed to fetch organization.");
    },
  });

  return {
    organization,
    isLoading,
    isError,
  };
}

// Update organization by createdby
export function useUpdateOrganization(createdby) {
  const queryClient = useQueryClient();

  const updateOrgMutation = useMutation({
    mutationFn: (payload) => patch(`/organization/createdby/${createdby}`, payload),

    onSuccess: () => {
      toast.success("Organization updated successfully!");
      queryClient.invalidateQueries(["organization", createdby]);
    },

    onError: (error) => {
      console.error("Error updating Organization:", error);
      // toast.error("Failed to update Organization.");
      const message =
        error?.response?.data?.error || "Failed to update Organization.";
      toast.error(message);
    },
  });

  return {
    updateOrganization: updateOrgMutation.mutate,
    isUpdating: updateOrgMutation.isLoading,
    isError: updateOrgMutation.isError,
  };
}



// lynt


export const useOrganizationManagement = () => {
  const { user, isSignedIn, isLoaded } = useUser();
  const router = useRouter();
  const queryClient = useQueryClient();

  const userDataQuery = useQuery({
    queryKey: ['userData', user?.id],
    queryFn: () => get(`/users/${user?.id}`),
    enabled: isLoaded && isSignedIn && !!user && !!user.id,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    onError: (error) => {
      console.error('Error fetching user data:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
    },
  });

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in');
    } else if (isLoaded && isSignedIn && userDataQuery.data?.role !== 'superadmin') {
      router.push('/dashboard');
    }
  }, [isLoaded, isSignedIn, userDataQuery.data?.role, router]);

  return {
    dbUser: userDataQuery.data || null,
    isLoading: userDataQuery.isLoading,
    isError: userDataQuery.isError,
    isSignedIn,
    isLoaded,
  };
};

export const useOrganizations = () => {
  const queryClient = useQueryClient();

  const organizationsQuery = useQuery({
    queryKey: ['organizations'],
    queryFn: () => get('/organization-'),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    onError: (error) => {
      console.error('Error fetching organizations:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
    },
  });

  const createOrganizationMutation = useMutation({
    mutationFn: (name) => post('/organization-', { name }),
    onSuccess: () => {
      queryClient.invalidateQueries(['organizations']);
    },
    onError: (error) => {
      console.error('Error creating organization:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
    },
  });

  return {
    organizations: organizationsQuery.data || [],
    isLoading: organizationsQuery.isLoading,
    isError: organizationsQuery.isError,
    createOrganization: createOrganizationMutation.mutate,
    isCreating: createOrganizationMutation.isLoading,
  };
};

export const useOrganizationUsers = (organizationId) => {
  const orgUsersQuery = useQuery({
    queryKey: ['orgUsers', organizationId],
    queryFn: async () => {
      const response = await get(`/organization-/${organizationId}`)
      // console.log('Organization users response:', response)
      return response
    },
    enabled: !!organizationId,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    onError: (error) => {
      console.error('Error fetching organization users:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
    },
  });

  return {
    users: orgUsersQuery.data || [],
    isLoading: orgUsersQuery.isLoading,
    isError: orgUsersQuery.isError,
  };
};


export function useGetOrganizationSettings(createdby) {
  const {
    data: organizationData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["organization-settings", createdby],
    queryFn: () => {
      if (!createdby) throw new Error("Missing createdby param");
      return get(`/organization/settings/${createdby}`);
    },
    enabled: !!createdby,
    onError: (error) => {
      console.error("Error fetching organization settings:", error);
      toast.error("Failed to fetch organization settings.");
    },
  });
 
  return {
    organization: organizationData,
    isLoading,
    isError,
  };
}
