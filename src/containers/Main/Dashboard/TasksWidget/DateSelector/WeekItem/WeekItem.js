import React, { useContext } from "react";
import PropTypes from "prop-types";
import { WeekItemStyled } from "./WeekItemStyled";
import { WeekDay } from "./WeekDay";
import { Medium13Font } from "../../../../../../components/Fonts/Fonts";
import { WeekDate } from "./WeekDate";
import { Context } from "../../../../../../globalStore/store";
import { DATE_SELECTOR_SET_DAY } from "../../../../../../globalStore/reducer";

const WeekItem = (props) => {
  const [state, dispatch] = useContext(Context);

  const selectDateHandler = (e) => {
    dispatch({
      type: DATE_SELECTOR_SET_DAY,
      data: parseInt(e.target.firstChild.nodeValue),
    });
  };

  return (
    <WeekItemStyled>
      <WeekDay
        day={props.weekDay}
        currentWeekDay={props.currentWeekDay}
        currentDateDay={props.currentDateDay}
        date={props.day}
      >
        <Medium13Font>{props.weekDay}</Medium13Font>
      </WeekDay>
      <WeekDate
        as="button"
        day={props.weekDay}
        currentWeekDay={props.currentWeekDay}
        currentDateDay={props.currentDateDay}
        date={props.day}
        onClick={(e) => selectDateHandler(e)}
      >
        {props.day}
      </WeekDate>
    </WeekItemStyled>
  );
};

WeekItem.propTypes = {
  day: PropTypes.number,
  currentWeekDay: PropTypes.string,
  firstWeekDate: PropTypes.object,
};

export default WeekItem;
