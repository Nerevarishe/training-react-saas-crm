import React from "react";
import WidgetCard from "../../../../components/WidgetCard";
import "./TasksWidget.scss";
import ProgressBar from "./ProgressBar";
import DateSelector from "./DateSelector";
import TaskCard from "../../../../components/TaskCard";

const widgetContent = {
  filterOptions: [
    {
      text: "Previous Week",
      value: "prevWeek",
    },
    {
      text: "This Week",
      value: "thisWeek",
    },
    {
      text: "Next Week",
      value: "nextWeek",
    },
  ],
};

const customTitle = (
  <span className="tasks-widget__completed-text">
    8 task completed out of 10
  </span>
);

const TasksWidget = () => {
  return (
    <WidgetCard
      widgetContent={widgetContent}
      showTitle
      customTitle={customTitle}
      showFilter
    >
      {/*TODO: Connect to tasks backend*/}
      <ProgressBar max={10} value={8} />

      <DateSelector />

      <TaskCard />

      <div className="main__tasks-show-more">
        <button className="main__tasks-show-more-btn">Show more</button>
      </div>
    </WidgetCard>
  );
};

export default TasksWidget;
