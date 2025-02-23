import { Tasks } from "@/__generated__/Tasks";

const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

export const tasksApi = new Tasks({
  baseURL: `${backendUrl}/api/v1`,
  withCredentials: false, // Include credentials in requests
});

export default tasksApi;
