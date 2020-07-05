import React from "react";
import WidgetCard from "../../../../components/WidgetCard";
import TasksChartGenerator from "./TasksChartGenerator";

const widgetContent = {
  title: "Tasks",
  filterOptions: [
    { text: "Previous Month", value: "prevMonth" },
    { text: "This Month", value: "thisMonth" },
    { text: "Next Month", value: "nextMonth" },
  ],
};

const TasksChartWidget = () => {
  return (
    <WidgetCard
      widgetContent={widgetContent}
      showTitle
      showFilter
      styleWidgetCard={{ height: "100%" }}
    >
      <TasksChartGenerator />
    </WidgetCard>
  );
};

export default TasksChartWidget;
