import React from "react";
import PropTypes from "prop-types";
import styles from "./WidgetCard.module.scss";
import { Medium15Font, Regular12Font } from "../Fonts/Fonts";

// const widgetContent = {
//   title: "Title",
//   filterOptions: ["option one", "option two", "option three", "option four"],
// };

const WidgetCard = (props) => {
  return (
    <div style={props.styleWidgetCard} className={styles["widget-card"]}>
      {props.showTitle ? (
        props.customTitle ? (
          props.customTitle
        ) : (
          //<span className={styles["widget-card__title-text"]}>
          //  {props.widgetContent.title}
          //</span>
          <Medium15Font>{props.widgetContent.title}</Medium15Font>
        )
      ) : null}

      {props.showFilter ? (
        <div className={styles["widget-card__filter"]}>
          <Regular12Font color={"#6a707e"}>Show: </Regular12Font>
          <select
            style={props.styleWidgetCardFilterSelect}
            name=""
            id=""
            className={styles["widget-card__filter-select"]}
          >
            {props.widgetContent.filterOptions.map((option) => (
              <option
                value={option.value}
                className={styles["widget-card__filter-option"]}
              >
                {option.text}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      <div className={styles["widget-card__divider"]} />
      <div className={styles["widget-card__content"]}>{props.children}</div>
    </div>
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
