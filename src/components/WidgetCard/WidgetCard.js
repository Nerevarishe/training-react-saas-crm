import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import arrowDown from "./img/svg/select-arrow-down.svg";
import { Medium15Font, Regular12Font } from "../Fonts/Fonts";

// const widgetContent = {
//   title: "Title",
//   filterOptions: ["option one", "option two", "option three", "option four"],
// };

const StyledWidgetCard = styled.div`
  position: relative;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  padding: 16px 24px;
  background: ${(props) => props.theme.colors.whiteColor}};
  border-radius: 4px;
`;

const Filter = styled.div`
  position: absolute;
  right: 24px;
  top: 17px;
`;

const Select = styled.select`
  min-width: 90px;
  border: none;
  appearance: none;
  background: url(${arrowDown} no-repeat right center;
  background-size: 7px 4px;
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.01em;
  font-size: 12px;
  line-height: 18px;
  color: ${(props) => props.theme.colors.accentBlueColor}
  cursor: pointer;

  &:focus {
    outline-style: none;
  }

  option {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: normal;
    letter-spacing: 0.01em;
    font-size: 12px;
    line-height: 18px;
    color: ${(props) => props.theme.colors.accentBlueColor}
    cursor: pointer;
  }


`;

const Divider = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 54px;
  height: 1px;
  background: ${(props) => props.theme.colors.dividerColor};
`;

const Content = styled.div`
  padding-top: 33px;
`;

const WidgetCard = (props) => {
  return (
    <StyledWidgetCard style={props.styleWidgetCard}>
      {props.showTitle ? (
        props.customTitle ? (
          props.customTitle
        ) : (
          <Medium15Font color={(props) => props.theme.colors.balckColor}>
            {props.widgetContent.title}
          </Medium15Font>
        )
      ) : null}

      {props.showFilter ? (
        <Filter>
          <Regular12Font color={(props) => props.theme.colors.grayBlueColor}>
            Show:{" "}
          </Regular12Font>

          <Select style={props.styleWidgetCardFilterSelect}>
            {props.widgetContent.filterOptions.map((option) => (
              <option value={option.value}>{option.text}</option>
            ))}
          </Select>
        </Filter>
      ) : null}

      <Divider />
      <Content>{props.children}</Content>
    </StyledWidgetCard>
  );
};

WidgetCard.propTypes = {
  showTitle: PropTypes.bool,
  customTitle: PropTypes.element,
  showFilter: PropTypes.bool,
  widgetContent: PropTypes.object,
  styleWidgetCard: PropTypes.object,
  styleWidgetCardFilterSelect: PropTypes.object,
};

WidgetCard.defaultProps = {
  styleWidgetCard: null,
  styleWidgetCardFilterSelect: null,
};

export default WidgetCard;
