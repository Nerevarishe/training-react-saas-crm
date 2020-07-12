import { axios } from "../../../../config/axios";

export const getTasks = async (per_page=3) => {
  return await axios.get(`/api/v1/tasks/?per_page=${per_page}`);
};
