import React, {useContext, useEffect, useState} from "react";
import WidgetCard from "../../../../components/WidgetCard";
import DealsChartGenerator from "./DealsChartGenerator";
import { getDealsChartData } from "./utils";
import {Context} from "../../../../globalStore/store";

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
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getDealsChartData(filterValue);
      setData(response.data);
    };
    fetchData();
  }, [filterValue, state.dealsWidget.updateWidget]);
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
