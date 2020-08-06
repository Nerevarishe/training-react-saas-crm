import { axios } from "../../../config/axios";

export const generateData = () => {
  return axios.get("/api/v1/generate_data/");
};

export const dropDB = () => {
  return axios.delete("/api/v1/generate_data/");
};
