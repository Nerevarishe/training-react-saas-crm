import React, { useContext, useEffect, useState } from "react";
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
import { Context } from "../../../../globalStore/store";
import {
  DATE_SELECTOR_SET_DAY,
  TASKS_WIDGET_SET_PER_PAGE,
} from "../../../../globalStore/reducer";

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

  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(Context);

  const showMoreHandler = () => {
    dispatch({
      type: TASKS_WIDGET_SET_PER_PAGE,
      data: state.tasksWidget.tasksOnPage + 10,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTasks(
        filterValue,
        state.dateSelector.selectedDate,
        state.tasksWidget.tasksOnPage
      );
      setTasksCard(response.data["task_cards"]);
      setWeekDays(response.data["week_days"]);
    };
    fetchData();
  }, [
    filterValue,
    state.tasksWidget.tasksOnPage,
    state.dateSelector.selectedDate,
  ]);

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

      <DateSelector weekDays={weekDays} />

      {tasksCards !== []
        ? tasksCards.map((taskCard) => (
            <TaskCard key={taskCard["task"]["_id"]["$oid"]} data={taskCard} />
          ))
        : null}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <TertiaryButton onClick={showMoreHandler}>
          <Semibold13Font>Show More</Semibold13Font>
        </TertiaryButton>
      </div>
    </WidgetCard>
  );
};

export default TasksWidget;
