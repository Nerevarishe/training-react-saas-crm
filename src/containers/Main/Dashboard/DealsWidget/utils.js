import { axios } from "../../../../config/axios";

export const getDealsChartData = (period) => {
  return axios.get(`/api/v1/deals/chart_data?period=${period}`);
};
