import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import styles from "./ViewUser.module.scss";

const ViewUser = (props) => {

  return (
      <div className={styles["view-user__person"]}>
        <img
          src={props.avatar}
          alt={props.name}
          className={styles["view-user__person-avatar"]}
        />
        <div className={styles["view-user__user-info"]}>
          <span className={styles["view-user__user-info"]}>{props.name}</span>
          {props.email ? (
            <span className={styles["view-user__person-email"]}>
              {props.email}
            </span>
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
