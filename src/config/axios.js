import axios from "axios";

const axiosBaseConfig = {
  baseURL: "http://192.168.56.118/api",
};

const axiosDefaultInstance = axios.create(axiosBaseConfig);

export { axiosDefaultInstance as axios };
