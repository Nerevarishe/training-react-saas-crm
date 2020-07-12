import React from "react";
import WidgetCard from "../../../../components/WidgetCard";
import ChartGenerator from "./ChartGenerator";

const widgetContent = {
  title: "Deals",
  // filterOptions: ["Yearly", "Quarterly", "Monthly", "Weekly"],
  filterOptions: [
    { id: 0, text: "Yearly", value: "yearly" },
    { id: 1, text: "Quarterly", value: "quarterly" },
    { id: 2, text: "Monthly", value: "monthly", selected: true },
    { id: 3, text: "Weekly", value: "weekly" },
  ],
};

const DealsWidget = () => {
  return (
    <WidgetCard
      styleWidgetCard={{ width: "445px", height: "344px" }}
      showTitle
      showFilter
      widgetContent={widgetContent}
      styleWidgetCardFilterSelect={{ width: "70px" }}
    >
      <ChartGenerator />
    </WidgetCard>
  );
};

export default DealsWidget;
