import React from "react";
import PropTypes from "prop-types";
import "./ViewUser.scss";

const ViewUser = (props) => {
  return (
    <div className="view-user__person">
      <img
        src={props.avatar}
        alt={props.name}
        className="view-user__person-avatar"
      />
      <div className="view-user__user-info">
        <span className="view-user__person-name">{props.name}</span>
        {props.email ? (
          <span className="header__email-text">{props.email}</span>
        ) : null}
      </div>
    </div>
  );
};

ViewUser.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string
};

export default ViewUser;
