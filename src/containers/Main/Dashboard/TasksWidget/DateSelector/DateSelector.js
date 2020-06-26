import React, { Fragment, useState } from "react";
import PropTypes, { string } from "prop-types";
import moment from "moment";
import "./DateSelector.scss";

const DateSelector = (props) => {
  // 0. List of week days
  const [week, setWeek] = useState([
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ]);
  // 1. Get current date;
  const [currentDate, setCurrentDate] = useState(moment());
  // // 2. Get current week day
  const [currentWeekDay, setCurrentWeekDay] = useState(
    currentDate.format("ddd")
  );
  // // 3. Get current week number
  const [currentWeek, setCurrentWeek] = useState(currentDate.week());
  // // 4. Get date of first week day
  const [firstWeekDate, setFirstWeekDate] = useState(
    moment(moment().week(currentWeek)).day(0)
  );

  return (
    <Fragment>
      <span className="tasks-widget__selected-date-text">
        {currentDate.format("MMM Do YY")}
      </span>
      <div className="tasks-widget__week-days">
        <ul className="tasks-widget__week-list">
          {week.map((day) => (
            <li key={day} className="tasks-widget__week-items">
              <span
                className={
                  day === currentWeekDay
                    ? "tasks-widget__week-day tasks-widget__week-day_today"
                    : "tasks-widget__week-day"
                }
              >
                {day}
              </span>
              <button
                className={
                  day === currentWeekDay
                    ? "tasks-widget__week-date tasks-widget__week-date_today"
                    : "tasks-widget__week-date"
                }
              >
                {day === "Sun"
                  ? firstWeekDate.format("DD")
                  : moment(firstWeekDate.add(1, "d")).format("DD")}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="tasks-widget__divider" />
    </Fragment>
  );
};

DateSelector.propTypes = {
  timestamp: PropTypes.string,
};

export default DateSelector;
