import React from "react";
import PropTypes from "prop-types";
import { Medium15Font, Regular12Font } from "../Fonts/Fonts";
import { StyledWidgetCard } from "./StyledWidgetCard";
import { Filter } from "./Filter";
import { Select } from "./Select";
import { Divider } from "./Divider";
import { Content } from "./Content";

// const widgetContent = {
//   title: "Title",
//   filterOptions: ["option one", "option two", "option three", "option four"],
// };

const WidgetCard = (props) => {
  return (
    <StyledWidgetCard style={props.styleWidgetCard}>
      {props.showTitle ? (
        props.customTitle ? (
          props.customTitle
        ) : (
          <Medium15Font color={(props) => props.theme.colors.blackColor}>
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

      <Divider topPosition={props.dividerTopPosition} />
      <Content
        style={{
          paddingTop: "16px",
        }}
      >
        {props.children}
      </Content>
    </StyledWidgetCard>
  );
};

WidgetCard.propTypes = {
  dividerTopPosition: PropTypes.string,
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
