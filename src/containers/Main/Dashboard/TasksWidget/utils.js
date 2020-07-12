import { axios } from "../../../../config/axios";

export const getTasks = async (period = "thisWeek", per_page = 3) => {
  return await axios.get(
    `/api/v1/tasks/?period=${period}&per_page=${per_page}`
  );
};
