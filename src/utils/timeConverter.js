import moment from "moment";

export const convertToDate = (timestamp) => {
  return moment.unix(parseInt(timestamp) / 1000).format("DD.MM.YYYY");
};
