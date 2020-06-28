import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./ViewUser.module.scss";

const ViewUser = (props) => {
  return (
    <div className={styles["view-user"]}>
      <img
        src={props.avatar}
        alt={props.name}
        className={styles["view-user__avatar"]}
      />
      <div className={styles["view-user__info"]}>
        <span className={styles["view-user__user-name"]}>{props.name}</span>
        {props.email ? (
          <span className={styles["view-user__user-email"]}>{props.email}</span>
        ) : null}
      </div>
    </div>
  );
};

ViewUser.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
};

export default ViewUser;
