import { create } from "apisauce";
import authStorage from "@/auth/storage";
import Settings from "@/constants/Settings";

const apiClient = create({
  baseURL: Settings.apiUrl,
  timeout: 10000,
  headers: {
    Accept: "application/json",
    ContentType: "application/json",
  },
});

apiClient.addAsyncRequestTransform(async (request) => {
  request.headers["X-APP-NAME"] = Settings.appName;

  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["Authorization"] = `Bearer ${authToken}`;
});

// apiClient.axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error?.request && error?.request?.status === 401) {
//     }

//     throw error;
//   }
// );

export default apiClient;
