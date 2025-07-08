import { useQuery } from "@tanstack/react-query";
import { get } from "@/utils/apiHelper";
import { toast } from "react-hot-toast"; 

export function useGetZohoToken(orgid) {
  const {
    data: zohotokens,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["zoho", orgid],
    queryFn: () => {
      if (!orgid) throw new Error("Missing orgid param");
      return get(`/zoho/${orgid}`);
    },
    enabled: !!orgid,
    onError: (error) => {
      console.error("Error fetching Zoho tokens:", error);
      toast.error("Failed to fetch Zoho token data.");
    },
  });

  return {
    zohotokens,
    isLoading,
    isError,
  };
}
