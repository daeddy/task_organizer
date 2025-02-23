import { Tasks } from "@/__generated__/Tasks";

export const tasksApi = new Tasks({ baseURL: "http://localhost:8080/api/v1" });

export default tasksApi;
