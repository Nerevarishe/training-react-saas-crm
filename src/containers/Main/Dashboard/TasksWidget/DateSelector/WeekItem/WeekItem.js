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
    <WeekItemStyled key={props.day}>
      <WeekDay day={props.day} currentWeekDay={props.currentWeekDay}>
        <Medium13Font>{props.day}</Medium13Font>
      </WeekDay>
      <WeekDate day={props.day} currentWeekDay={props.currentWeekDay}>
        <Regular12Font>
          {props.day === "Sun"
            ? props.firstWeekDate.format("DD")
            : moment(props.firstWeekDate.add(1, "d")).format("DD")}
          {console.log("WeekItem renders!")}
        </Regular12Font>
      </WeekDate>
    </WeekItemStyled>
  );
};

WeekItem.propTypes = {
  day: PropTypes.string,
  currentWeekDay: PropTypes.string,
  firstWeekDate: PropTypes.object,
};

export default WeekItem;
