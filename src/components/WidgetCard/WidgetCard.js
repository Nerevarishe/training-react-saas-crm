import React, { Fragment } from "react";
import PropTypes from "prop-types";
import stylesOriginal from "./WidgetCard.module.scss";

// const widgetContent = {
//   title: "Title",
//   filterOptions: ["option one", "option two", "option three", "option four"],
// };

let styles = stylesOriginal;

const WidgetCard = (props) => {
  const checkStyles = (props) => {
    if (props) {
      styles = props;
      console.dir(styles);
    }
  };

  return (
    <Fragment>
      {checkStyles(props.styles)}
      <div className={styles["widget-card"]}>
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
    </Fragment>
  );
};

WidgetCard.propTypes = {
  showTitle: PropTypes.bool,
  customTitle: PropTypes.element,
  showFilter: PropTypes.bool,
  widgetContent: PropTypes.object,
};

export default WidgetCard;
