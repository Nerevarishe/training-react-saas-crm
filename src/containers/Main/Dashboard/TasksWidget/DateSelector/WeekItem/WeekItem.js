import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import styles from "./WeekItem.module.scss";

const WeekItem = (props) => {
  return (
    <li key={props.day} className={styles["tasks-widget__week-items"]}>
      <span
        className={
          props.day === props.currentWeekDay
            ? `${styles["tasks-widget__week-day"]} ${styles["tasks-widget__week-day_today"]}`
            : styles["tasks-widget__week-day"]
        }
      >
        {props.day}
      </span>
      <button
        className={
          props.day === props.currentWeekDay
            ? `${styles["tasks-widget__week-date"]} ${styles["tasks-widget__week-date_today"]}`
            : styles["tasks-widget__week-date"]
        }
      >
        {props.day === "Sun"
          ? props.firstWeekDate.format("DD")
          : moment(props.firstWeekDate.add(1, "d")).format("DD")}
      </button>
    </li>
  );
};

WeekItem.propTypes = {
  day: PropTypes.string,
  currentWeekDay: PropTypes.string,
  firstWeekDate: PropTypes.object,
};

export default WeekItem;
