import React from "react";
import WidgetCard from "../../../../components/WidgetCard";
import styles from "./TasksWidget.module.scss";
import ProgressBar from "./ProgressBar";
import DateSelector from "./DateSelector";
import TaskCard from "../../../../components/TaskCard";

const tasksData = [
  {
    taskId: "1",
    taskType: "Reminder",
    task: "Send benefit review by Sunday",
    dueDate: "26.06.2020",
    taskStatus: "Completed",
    person: {
      avatar: "https://api.adorable.io/avatars/40/32edac@rsfd.asd.png",
      name: "George Fields",
    },
  },
  {
    taskId: "2",
    taskType: "Call",
    task: "Invite to office meet-up",
    dueDate: "26.06.2020",
    taskStatus: "Ended",
    person: {
      avatar: "https://api.adorable.io/avatars/40/32edac@rsfd.asd423qwdac.png",
      name: "Rebecca Moore",
    },
  },
  {
    taskId: "3",
    taskType: "Event",
    task: "Office meet-up",
    dueDate: "26.06.2020",
    taskStatus: "Completed",
    person: {
      avatar: "https://api.adorable.io/avatars/40/32rfewrsvdsc.png",
      name: "Lindsey Stroud",
    },
  },
];

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
  <span className={styles["tasks-widget__completed-text"]}>
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
      // styles={styles}
    >
      {/*TODO: Connect to tasks backend*/}
      <ProgressBar max={10} value={8} />

      <DateSelector />

      {
        tasksData.map(taskCard => (
          <TaskCard key={taskCard.taskId} data={taskCard} />
        ))
      }

      <div className={styles["main__tasks-show-more"]}>
        <button className={styles["main__tasks-show-more-btn"]}>Show more</button>
      </div>
    </WidgetCard>
  );
};

export default TasksWidget;
