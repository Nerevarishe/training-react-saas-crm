import React from "react";
import PropTypes from "prop-types";
import "./ProgressBar.scss";

const ProgressBar = (props) => {
  return (
    <div className="tasks-widget__progress">
      <progress className="tasks-widget__progressbar" max={props.max} value={props.value} />
    </div>
  );
};

ProgressBar.propTypes = {
  max: PropTypes.number,
  value: PropTypes.number,
};

export default ProgressBar;
