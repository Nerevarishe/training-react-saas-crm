import React from "react";
import WidgetCard from "../../../../components/WidgetCard";

const widgetContent = {
  title: "Deals",
  // filterOptions: ["Yearly", "Quarterly", "Monthly", "Weekly"],
  filterOptions: [
    { text: "Yearly", value: "yearly" },
    { text: "Quarterly", value: "quarterly" },
    { text: "Monthly", value: "monthly" },
    { text: "Weekly", value: "weekly" },
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
      TEST
    </WidgetCard>
  );
};

export default DealsWidget;
