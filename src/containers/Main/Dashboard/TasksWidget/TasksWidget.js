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
      id: 0,
      text: "Previous Week",
      value: "prevWeek",
    },
    {
      id: 1,
      text: "This Week",
      value: "thisWeek",
    },
    {
      id: 2,
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
  const [weekDays, setWeekDays] = useState(null);
  const [tasksOnPage, setTasksOnPage] = useState(3);
  const [filterValue, setFilterValue] = useState("thisWeek");

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTasks(filterValue, tasksOnPage);
      setTasksCard(response.data["task_cards"]);
      setWeekDays(response.data["week_days"]);
    };
    fetchData();
  }, [filterValue, tasksOnPage]);

  return (
    <WidgetCard
      dividerTopPosition={"218px"}
      widgetContent={widgetContent}
      showTitle
      customTitle={customTitle}
      showFilter
      filterValue={setFilterValue}
      defaultValue="thisWeek"
      styleWidgetCard={styleWidgetCard}
      styleWidgetCardFilterSelect={styleWidgetCardFilterSelect}
      styleContentPaddingTop={{ paddingTop: "16px" }}
    >
      {/*TODO: Connect to tasks backend*/}
      <ProgressBar max={10} value={8} />

      <DateSelector weekDays={weekDays}/>

      {tasksCards !== []
        ? tasksCards.map((taskCard) => (
            <TaskCard key={taskCard["task"]["_id"]["$oid"]} data={taskCard} />
          ))
        : null}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <TertiaryButton
          onClick={() => {
            setTasksOnPage(tasksOnPage + 10);
          }}
        >
          <Semibold13Font>Show More</Semibold13Font>
        </TertiaryButton>
      </div>
    </WidgetCard>
  );
};

export default TasksWidget;
