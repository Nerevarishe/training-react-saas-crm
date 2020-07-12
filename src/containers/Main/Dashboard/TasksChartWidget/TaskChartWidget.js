import React, { useEffect, useState } from "react";
import WidgetCard from "../../../../components/WidgetCard";
import TasksChartGenerator from "./TasksChartGenerator";
import { getTaskStats } from "./utils";

const widgetContent = {
  title: "Tasks",
  filterOptions: [
    { text: "Previous Month", value: "prevMonth" },
    { text: "This Month", value: "thisMonth", selected: true },
    { text: "Next Month", value: "nextMonth" },
  ],
};

const TasksChartWidget = () => {
  const [taskStats, setTaskStats] = useState(null);
  const [filterValue, setFilterValue] = useState("thisMonth");

  useEffect(() => {
    const asyncCall = async () => {
      const response = await getTaskStats(filterValue);
      setTaskStats(response.data);
    };
    asyncCall();
  }, [filterValue]);

  return (
    <WidgetCard
      widgetContent={widgetContent}
      showTitle
      showFilter
      filterValue={setFilterValue}
      styleWidgetCard={{ height: "382px" }}
    >
      <TasksChartGenerator data={taskStats} />
    </WidgetCard>
  );
};

export default TasksChartWidget;
