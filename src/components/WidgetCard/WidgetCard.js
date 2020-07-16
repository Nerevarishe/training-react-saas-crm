import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Medium15Font, Regular12Font } from "../Fonts/Fonts";
import { StyledWidgetCard } from "./StyledWidgetCard";
import { Filter } from "./Filter";
import Select from "./Select";
import { Divider } from "./Divider";
import { Content } from "./Content";
import { Context } from "../../globalStore/store";
import {
  DATE_SELECTOR_RESET,
  TASKS_WIDGET_RESET,
} from "../../globalStore/reducer";

// const widgetContent = {
//   title: "Title",
//   filterOptions: ["option one", "option two", "option three", "option four"],
// };

const WidgetCard = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(Context);

  const filterValueChangeHandler = (e) => {
    // TODO: Check how refactor dispatch part
    dispatch({ type: DATE_SELECTOR_RESET });
    dispatch({ type: TASKS_WIDGET_RESET });
    return props.filterValue(e.target.value);
  };

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

          <Select
            style={props.styleWidgetCardFilterSelect}
            onChange={(e) => filterValueChangeHandler(e)}
            defaultValue={props.defaultValue}
          >
            {props.widgetContent.filterOptions.map((option) => (
              <option key={option.id} value={option.value}>
                {option.text}
              </option>
            ))}
          </Select>
        </Filter>
      ) : null}

      <Divider topPosition={props.dividerTopPosition} />
      <Content style={props.styleContentPaddingTop}>{props.children}</Content>
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
  styleContentPaddingTop: PropTypes.object,
  selected: PropTypes.bool,
};

WidgetCard.defaultProps = {
  styleWidgetCard: null,
  styleWidgetCardFilterSelect: null,
  styleContentPaddingTop: { paddingTop: "33px" },
};

export default WidgetCard;
