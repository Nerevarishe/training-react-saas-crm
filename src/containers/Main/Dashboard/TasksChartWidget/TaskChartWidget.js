import React, { useEffect, useState } from "react";
import WidgetCard from "../../../../components/WidgetCard";
import TasksChartGenerator from "./TasksChartGenerator";
import { getTaskStats } from "./utils";

const widgetContent = {
  title: "Tasks",
  filterOptions: [
    { text: "Previous Month", value: "prevMonth" },
    { text: "This Month", value: "thisMonth" },
    { text: "Next Month", value: "nextMonth" },
  ],
};

const TasksChartWidget = () => {
  const [taskStats, setTaskStats] = useState(null);

  useEffect(() => {
    const asyncCall = async () => {
      const response = await getTaskStats();
      setTaskStats(response.data);
    };
    asyncCall();
  }, []);

  return (
    <WidgetCard
      widgetContent={widgetContent}
      showTitle
      showFilter
      styleWidgetCard={{ height: "100%" }}
    >
      <TasksChartGenerator data={taskStats} />
    </WidgetCard>
  );
};

export default TasksChartWidget;
