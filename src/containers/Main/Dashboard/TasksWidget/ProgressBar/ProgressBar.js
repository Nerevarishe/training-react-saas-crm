import React from "react";
import PropTypes from "prop-types";
import { ProgressBarStyled } from "./ProgressBarStyled";

const ProgressBar = (props) => {
  return <ProgressBarStyled max={props.max} value={props.value} />;
};

ProgressBar.propTypes = {
  max: PropTypes.number,
  value: PropTypes.number,
};

export default ProgressBar;
