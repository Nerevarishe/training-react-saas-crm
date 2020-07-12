import { axios } from "../../../../config/axios";

export const getTasks = async () => {
  return await axios.get("/api/v1/tasks/");
};
