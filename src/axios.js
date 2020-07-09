import axios from "axios";

const axiosBaseConfig = {
  baseURL: "http://127.0.0.1:5000",
};

const axiosDefaultInstance = axios.create(axiosBaseConfig);

export { axiosDefaultInstance as axios };
