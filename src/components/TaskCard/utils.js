import { axios } from "../../config/axios";

export const changeTaskStatus = async (taskId, taskStatus) => {
  return axios.put(`/api/v1/tasks/${taskId}?change_status_to=${taskStatus}`);
};
