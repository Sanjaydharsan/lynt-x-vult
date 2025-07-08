import { useMemo } from "react";
import { get } from "@/utils/apiHelper";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useGetReportsSummary() {
  const {
    data: summary,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["reports-summary"],
    queryFn: () => get("/reportsummary"),
    onError: (error) => {
      console.error("Error fetching reports summary:", error);
      toast.error("Failed to fetch reports summary.");
    },
  });

  return {
    summary,
    isLoading,
    isError,
  };
}

function toTitleCase(str) {
  return str
    ?.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export function useUserIdToUsernameMap() {
  const {
    data: organizationUsers = [],
    isLoading: orgUsersLoading,
    isError: orgUsersError,
  } = useQuery({
    queryKey: ["organization-users"],
    queryFn: () => get("/organization-users"),
    onError: (error) => {
      console.error("Error fetching organization users:", error);
      toast.error("Failed to fetch organization users.");
    },
  });

  const userIdToUsernameMap = useMemo(() => {
    return organizationUsers.reduce((map, user) => {
      const username = user.fullname ?? `User ${user.id}`;
      map[String(user.id)] = toTitleCase(username);
      return map;
    }, {});
  }, [organizationUsers]);

  return {
    userIdToUsernameMap,
    isLoading: orgUsersLoading,
    isError: orgUsersError,
  };
}

export function useDynamicColumns() {
  const {
    data: templates = [],
    isLoading: templatesLoading,
    isError: templatesError,
  } = useQuery({
    queryKey: ["templates"],
    queryFn: () => get("/templates"),
    onError: (error) => {
      console.error("Error fetching templates:", error);
      toast.error("Failed to fetch templates.");
    },
  });

  const dynamicColumns = useMemo(() => {
    return templates.flatMap((template) => [
      {
        header: `${template.name} Assigned`,
        accessor: `assignedtemplateId_${template.id}`,
        cell: (row) => row[`assignedtemplateId_${template.id}`] ?? 0,
      },
      {
        header: `${template.name} Completed`,
        accessor: `completedtemplateId_${template.id}`,
        cell: (row) => row[`completedtemplateId_${template.id}`] ?? 0,
      },
    ]);
  }, [templates]);

  return {
    dynamicColumns,
    isLoading: templatesLoading,
    isError: templatesError,
  };
}