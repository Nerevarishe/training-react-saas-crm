import { axios } from "../../../../config/axios";

export const getDealsChartData = () => {
  return axios.get(`/api/v1/deals/chart_data`);
};
