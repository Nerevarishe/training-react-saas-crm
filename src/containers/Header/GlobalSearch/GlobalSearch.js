import React from "react";
import "./GlobalSearch.scss";
import notificationBell from "./img/svg/notification-bell.svg";
import notificationDot from "./img/svg/notification-red-dot.svg";

const GlobalSearch = () => {
  return (
    <div className="header__global-search">
      <input
        type="text"
        className="header__search-field"
        placeholder="Global search"
      />
      <div className="header__notification">
        <img
          src={notificationBell}
          alt="Notification"
          className="header__notofocation-bell"
        />
        <img
          src={notificationDot}
          alt=""
          className="header__notification-dot header__notification-dot_show"
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
