import React from "react";
import PropTypes from "prop-types";
import styles from "./ProgressBar.module.scss";

const ProgressBar = (props) => {
  return (
    <div className={styles["tasks-widget__progress"]}>
      <progress
        className={styles["tasks-widget__progressbar"]}
        max={props.max}
        value={props.value}
      />
    </div>
  );
};

ProgressBar.propTypes = {
  max: PropTypes.number,
  value: PropTypes.number,
};

export default ProgressBar;
