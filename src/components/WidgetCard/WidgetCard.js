import React from "react";
import PropTypes from "prop-types";
import styles from "./WidgetCard.module.scss";

// const widgetContent = {
//   title: "Title",
//   filterOptions: ["option one", "option two", "option three", "option four"],
// };

const WidgetCard = (props) => {
  return (
   <div style={styleWidgetCard} className={styles["widget-card"]}>
      {props.showTitle ? (
        props.customTitle ? (
          props.customTitle
        ) : (
          <span className={styles["widget-card__title-text"]}>
            {props.widgetContent.title}
          </span>
        )
      ) : null}

      {props.showFilter ? (
        <div className={styles["widget-card__filter"]}>
          <span className={styles["widget-card__filter-text"]}>Show: </span>

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
  styleWidgetCardFilterSelect: PropsTypes.object
};

WidgetCard.defaultProps = {
  styleWidgetCard: null,
  styleWidgetCardFilterSelect: null
}

export default WidgetCard;
