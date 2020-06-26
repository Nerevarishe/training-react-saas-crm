import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./WidgetCard.scss";

// const widgetContent = {
//   title: "Title",
//   filterOptions: ["option one", "option two", "option three", "option four"],
// };

const WidgetCard = (props) => {
  return (
    <Fragment>
      <div className="widget-card">
        {props.showTitle ? (
          props.customTitle ? (
            props.customTitle
          ) : (
            <span className="widget-card__title-text">
              {props.widgetContent.title}
            </span>
          )
        ) : null}

        {props.showFilter ? (
          <div className="widget-card__filter">
            <span className="widget-card__filter-text">Show: </span>

            <select name="" id="" className="widget-card__filter-select">
              {props.widgetContent.filterOptions.map(option => (
                <option value={option.value} className="widget-card__filter-option">
                  {option.text}
                </option>
              ))}
            </select>
          </div>
        ) : null}

        <div className="widget-card__divider" />
        <div className="widget-card__content">{props.children}</div>
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
