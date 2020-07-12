import React, { useEffect, useState } from "react";
import WidgetCard from "../../../../components/WidgetCard";
import ProgressBar from "./ProgressBar";
import DateSelector from "./DateSelector";
import TaskCard from "../../../../components/TaskCard";
import {
  Medium13Font,
  Semibold13Font,
} from "../../../../components/Fonts/Fonts";
import TertiaryButton from "../../../../components/buttons/TertiaryButton";
import { getTasks } from "./utils";

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
      selected: true,
    },
    {
      text: "Next Week",
      value: "nextWeek",
    },
  ],
};

const customTitle = (
  <Medium13Font color={(props) => props.theme.colors.darkBlueColor}>
    8 task completed out of 10
  </Medium13Font>
);

const TasksWidget = () => {
  const [tasksCards, setTasksCard] = useState([]);
  const [tasksOnPage, setTasksOnPage] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTasks(tasksOnPage);
      setTasksCard(response.data);
    };
    fetchData();
  }, [tasksOnPage]);

  return (
    <WidgetCard
      dividerTopPosition={"218px"}
      widgetContent={widgetContent}
      showTitle
      customTitle={customTitle}
      showFilter
      styleWidgetCard={styleWidgetCard}
      styleWidgetCardFilterSelect={styleWidgetCardFilterSelect}
      styleContentPaddingTop={{ paddingTop: "16px" }}
    >
      {/*TODO: Connect to tasks backend*/}
      <ProgressBar max={10} value={8} />

      <DateSelector />

      {tasksCards !== []
        ? tasksCards.map((taskCard) => (
            <TaskCard key={taskCard["task"]["_id"]["$oid"]} data={taskCard} />
          ))
        : null}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <TertiaryButton onClick={() => {setTasksOnPage(tasksOnPage + 10)}}>
          <Semibold13Font>Show More</Semibold13Font>
        </TertiaryButton>
      </div>
    </WidgetCard>
  );
};

export default TasksWidget;
