import { axios } from "../../../../config/axios.js";

export const getTaskStats = async (filterValue) => {
  return await axios.get(`/api/v1/tasks/tasks_stat?period=${filterValue}`);
};
