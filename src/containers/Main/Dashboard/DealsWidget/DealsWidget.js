import React, { useEffect, useState } from "react";
import WidgetCard from "../../../../components/WidgetCard";
import DealsChartGenerator from "./DealsChartGenerator";
import { getDealsChartData } from "./utils";

const widgetContent = {
  title: "Deals",
  filterOptions: [
    { id: 0, text: "Yearly", value: "yearly" },
    { id: 1, text: "Quarterly", value: "quarterly" },
    { id: 2, text: "Monthly", value: "monthly" },
    { id: 3, text: "Weekly", value: "weekly" },
  ],
};

const DealsWidget = () => {
  const [data, setData] = useState(null);
  const [filterValue, setFilterValue] = useState("monthly");
  useEffect(() => {
    const fetchData = async () => {
      const response = await getDealsChartData(filterValue);
      setData(response.data);
    };
    fetchData();
  }, [filterValue]);
  return (
    <WidgetCard
      styleWidgetCard={{ width: "445px", height: "344px" }}
      showTitle
      showFilter
      filterValue={setFilterValue}
      defaultValue={filterValue}
      widgetContent={widgetContent}
      styleWidgetCardFilterSelect={{ width: "70px" }}
    >
      <DealsChartGenerator data={data} />
    </WidgetCard>
  );
};

export default DealsWidget;
