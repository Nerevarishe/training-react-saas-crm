import { axios } from "../../../../axios.js";

export const getTaskStats = async () => {
  return await axios.get("/api/v1/tasks/tasks_stat");
};
