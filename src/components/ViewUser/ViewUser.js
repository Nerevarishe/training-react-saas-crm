import React, { Fragment } from "react";
import PropTypes from "prop-types";
import originalStyles from "./ViewUser.module.scss";

let styles = originalStyles;

const ViewUser = (props) => {
  const checkPropsStyles = (props) => {
    if (props) {
      styles = props
    }
  };

  return (
    <Fragment>
      {checkPropsStyles(props.styles)}
      <div className={styles["view-user__person"]}>
        <img
          src={props.avatar}
          alt={props.name}
          className={styles["view-user__person-avatar"]}
        />
        <div className={styles["view-user__user-info"]}>
          <span className={styles["view-user__user-name"]}>{props.name}</span>
          {props.email ? (
            <span className={styles["view-user__user-email"]}>
              {props.email}
            </span>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
};

ViewUser.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
};

export default ViewUser;
