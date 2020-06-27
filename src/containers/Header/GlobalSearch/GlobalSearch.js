import React from "react";
import styles from "./GlobalSearch.module.scss";
import notificationBell from "./img/svg/notification-bell.svg";
import notificationDot from "./img/svg/notification-red-dot.svg";

const GlobalSearch = () => {
  return (
    <div className={styles["header__global-search"]}>
      <input
        type="text"
        className={styles["header__search-field"]}
        placeholder="Global search"
      />
      <div className={styles["header__notification"]}>
        <img
          src={notificationBell}
          alt="Notification"
          className={styles["header__notification-bell"]}
        />
        <img
          src={notificationDot}
          alt=""
          className={`${styles["header__notification-dot"]} ${styles["header__notification-dot_show"]}`}
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
