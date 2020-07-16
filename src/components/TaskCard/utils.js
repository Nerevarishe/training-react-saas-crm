import { axios } from "../../config/axios";

export const getTaskCardData = async (taskId) => {
  return axios.get(`/api/v1/tasks/${taskId}`);
};

export const changeTaskStatus = async (taskId, taskStatus) => {
  return axios.put(`/api/v1/tasks/${taskId}?change_status_to=${taskStatus}`);
};
