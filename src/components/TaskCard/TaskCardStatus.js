import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Medium11Font } from "../Fonts/Fonts";

const position = css`
  position: absolute;
  right: 16px;
  bottom: 16px;
`;

const appearance = css`
  min-width: 84px;
  padding: 3px 8px 5px 8px;
  border-radius: 4px;
  text-align: center;
`;

const completed = css`
  background: ${(props) => props.theme.colors.greenColor};
`;

const ended = css`
  background: ${(props) => props.theme.colors.redColor};
`;

const active = css`
  background: ${(props) => props.theme.colors.yellowColor};
`;

const TaskCardStyled = styled.div`
  ${position};
  ${appearance};
  // Change background color according to type
  ${(props) =>
    props.status === "Completed"
      ? completed
      : props.status === "Active"
      ? active
      : props.status === "Ended" ? ended : 'display: none'};
`;

const TaskCardStatus = (props) => {
  return (
    <TaskCardStyled status={props.status}>
      <Medium11Font color={(props) => props.theme.colors.whiteColor}>
        {props.status}
      </Medium11Font>
    </TaskCardStyled>
  );
};

TaskCardStatus.propTypes = {
  status: PropTypes.oneOf(["Completed", "Active", "Ended"]).isRequired,
};

export { TaskCardStatus };
