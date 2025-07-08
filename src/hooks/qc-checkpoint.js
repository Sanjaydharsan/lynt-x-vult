import { get } from "@/utils/apiHelper";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

// QC Checkpoint – fetch data from `/qc-checkpoint`
export function useGetQcCheckpoint() {
  const {
    data: qcCheckpointData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["qc-checkpoint"],
    queryFn: () => get("/qc-checkpoint"),
    onError: (error) => {
      console.error("Error fetching QC Checkpoint data:", error);
      toast.error("Failed to fetch QC Checkpoint data.");
    },
  });

  return {
    qcCheckpointData,
    isLoading,
    isError,
  };
}
