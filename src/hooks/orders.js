import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { get, patch, post, put } from "@/utils/apiHelper";
import toast from "react-hot-toast";

export const useGetAllOrders = () => {
  const ordersQuery = useQuery({
    queryKey: ["orders"],
    queryFn: () => get("/orders-creation"),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    onError: (error) => {
      console.error("Error fetching orders:", {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
    },
  });

  return {
    data: ordersQuery.data || [],
    isLoading: ordersQuery.isLoading,
    isError: ordersQuery.isError,
  };
};

export const useCreateOrders = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData) =>
      post("/orders-creation", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    onSuccess: () => {
      toast.success("Order created successfully!");
      queryClient.invalidateQueries(["orders"]);
    },
    onError: (error) => {1
      // const message = error?.response?.data?.error || 'Failed to create order.';
      // toast.error(message);
      // console.error('Error creating order:', {
      //   message: error.message,
      //   status: error.response?.status,
      //   data: error.response?.data,
      // });
      let message = "Failed to create order.";
      if (error instanceof Error) {
        message = error.message;
      }

      toast.error(message);
      console.error("Error creating order:", error);
    },
  });
};

export const useDeleteOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (orderId) =>
      patch(`/orders-creation/${orderId}`, { isdelete: true }),
    onSuccess: () => {
      toast.success("Order deleted successfully");
      queryClient.invalidateQueries(["orders"]);
    },
    onError: (error) => {
      console.error("Error deleting order:", error);
      toast.error("Error deleting order");
    },
  });
};

export const useGetAllPendingOrders = () => {
  const ordersQuery = useQuery({
    queryKey: ["orders"],
    queryFn: () => get("/orders"),
    onError: (error) => {
      console.error("Error fetching orders:", {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
    },
  });

  return {
    data: ordersQuery.data || [],
    isLoading: ordersQuery.isLoading,
    isError: ordersQuery.isError,
  };
};

export const useUpdateOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ orderId, formData }) => {
      return put(`/orders-creation/${orderId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    onSuccess: () => {
      toast.success("Order updated successfully");
      queryClient.invalidateQueries(["orders"]);
    },
    onError: (error) => {
      console.error("Error updating order:", {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
      toast.error("Failed to update order");
    },
    retry: false,
  });
};
