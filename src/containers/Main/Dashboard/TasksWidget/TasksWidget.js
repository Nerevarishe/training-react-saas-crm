import React from "react";
import WidgetCard from "../../../../components/WidgetCard";
import ProgressBar from "./ProgressBar";
import DateSelector from "./DateSelector";
import TaskCard from "../../../../components/TaskCard";
import { Medium13Font } from "../../../../components/Fonts/Fonts";

const styleWidgetCard = {
  width: "635px",
};

const styleWidgetCardFilterSelect = {
  width: "110px",
};

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
    taskStatus: "Active",
    person: {
      avatar: "https://api.adorable.io/avatars/40/32rfewrsvdsc.png",
      name: "Lindsey Stroud",
    },
  },
];

const customTitle = (
  <Medium13Font color={(props) => props.theme.colors.darkBlueColor}>
    8 task completed out of 10
  </Medium13Font>
);

const TasksWidget = () => {
  return (
    <WidgetCard
      dividerTopPosition={"218px"}
      widgetContent={widgetContent}
      showTitle
      customTitle={customTitle}
      showFilter
      styleWidgetCard={styleWidgetCard}
      styleWidgetCardFilterSelect={styleWidgetCardFilterSelect}
    >
      {/*TODO: Connect to tasks backend*/}
      <ProgressBar max={10} value={8} />

      <DateSelector />

      {tasksData.map((taskCard) => (
        <TaskCard key={taskCard.taskId} data={taskCard} />
      ))}
    </WidgetCard>
  );
};

export default TasksWidget;
