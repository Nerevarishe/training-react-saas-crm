import React, { useState } from "react";
import moment from "moment";
import WeekItem from "./WeekItem";
import { Medium15Font } from "../../../../../components/Fonts/Fonts";
import { WeekDays } from "./WeekDays";
import { WeekList } from "./WeekList";
import { DateSelectorStyled } from "./DateSelectorStyled";

const DateSelector = (props) => {
  // 1. Get current date;
  // eslint-disable-next-line no-unused-vars
  const [currentDate, setCurrentDate] = useState(moment());
  // 2. Get current week day
  // eslint-disable-next-line no-unused-vars
  const [currentWeekDay, setCurrentWeekDay] = useState(
    currentDate.format("ddd")
  );
  // 3. Get current date day
  // eslint-disable-next-line no-unused-vars
  const [currentDateDay, setCurrentDateDay] = useState(
    parseInt(currentDate.format("DD"))
  );

  return (
    <DateSelectorStyled>
      {console.log("DateSelector renders")}
      <Medium15Font
        color={(props) => props.theme.colors.blackColor}
        style={{
          display: "inline-block",
          marginBottom: "47px",
        }}
      >
        {currentDate.format("D MMMM, dddd")}
      </Medium15Font>
      <WeekDays>
        <WeekList>
          {props.weekDays !== null
            ? props.weekDays.map((day) => (
                <WeekItem
                  key={day["week_day_name"]}
                  weekDay={day["week_day_name"]}
                  day={day["week_day_date"]}
                  currentWeekDay={currentWeekDay}
                  currentDateDay={currentDateDay}
                />
              ))
            : null}
        </WeekList>
      </WeekDays>
    </DateSelectorStyled>
  );
};

export default DateSelector;
