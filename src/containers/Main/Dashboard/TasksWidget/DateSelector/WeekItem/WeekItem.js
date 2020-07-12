import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { WeekItemStyled } from "./WeekItemStyled";
import { WeekDay } from "./WeekDay";
import {
  Medium13Font,
  Regular12Font,
} from "../../../../../../components/Fonts/Fonts";
import { WeekDate } from "./WeekDate";

const WeekItem = (props) => {
  return (
    <WeekItemStyled>
      <WeekDay day={props.weekDay} currentWeekDay={props.currentWeekDay}>
        <Medium13Font>{props.weekDay}</Medium13Font>
      </WeekDay>
      <WeekDate day={props.weekDay} currentWeekDay={props.currentWeekDay}>
        <Regular12Font>
          {props.day}
        </Regular12Font>
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
