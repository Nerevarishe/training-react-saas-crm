import React, { useContext, useEffect, useState } from "react";
import WidgetCard from "../../../../components/WidgetCard";
import TasksChartGenerator from "./TasksChartGenerator";
import { getTaskStats } from "./utils";
import { Context } from "../../../../globalStore/store";
import { TASKS_WIDGET_RESET } from "../../../../globalStore/reducer";

const widgetContent = {
  title: "Tasks",
  filterOptions: [
    { id: 0, text: "Previous Month", value: "prevMonth" },
    { id: 1, text: "This Month", value: "thisMonth" },
    { id: 2, text: "Next Month", value: "nextMonth" },
  ],
};

const TasksChartWidget = () => {
  const [taskStats, setTaskStats] = useState(null);
  const [filterValue, setFilterValue] = useState("thisMonth");
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTaskStats(filterValue);
      setTaskStats(response.data);
    };
    fetchData();
  }, [filterValue, state.tasksWidget.updateWidget, state.tasksChartWidget.updateWidget]);

  return (
    <WidgetCard
      widgetContent={widgetContent}
      showTitle
      showFilter
      filterValue={setFilterValue}
      defaultValue="thisMonth"
      styleWidgetCard={{ height: "382px" }}
    >
      <TasksChartGenerator data={taskStats} />
    </WidgetCard>
  );
};

export default TasksChartWidget;
