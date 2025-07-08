import useUserStore from "@/store/userStore";
import axios from "axios";
 
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 120000,
  headers: {
    "Content-Type": "application/json",
  },
});
 
axiosInstance.interceptors.request.use(
  (config) => {
    const state = useUserStore.getState();
 
    if (state.organizationid) {
      config.headers["X-Organization-Id"] = parseInt(state.organizationid, 10);
    }
 
    if (state.userid) {
      config.headers["X-User-Id"] = state.userid;
    }
 
    if (state.user_role) {
      config.headers["X-Role"] = state.user_role;
    }
 
    return config;
  },
  (error) => Promise.reject(error)
);
 
const apiRequest = async (method, url, data = null, config = {}) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
      ...config,
    });
    return response.data;
  } catch (error) {
    const message = error?.response?.data?.error;
 
    if (message === "No eligible image collection found") {
      console.warn(
        "⚠️ No images available for assignment. This is normal when starting up."
      );
      return { success: true, data: [] };
    }
 
    error.message = message || error.message;
    throw error;
  }
};
 
export const get = (url, config = {}) => apiRequest("GET", url, null, config);
export const post = (url, data, config = {}) =>
  apiRequest("POST", url, data, config);
export const put = (url, data, config = {}) =>
  apiRequest("PUT", url, data, config);
export const patch = (url, data, config = {}) =>
  apiRequest("PATCH", url, data, config);
export const del = (url, config = {}) =>
  apiRequest("DELETE", url, null, config);