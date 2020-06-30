import React from "react";
import notificationBell from "./img/svg/notification-bell.svg";
import notificationDot from "./img/svg/notification-red-dot.svg";
import { GlobalSearchStyled } from "./GlobalSearchStyled";
import { GlobalSearchInput } from "./GlobaSearchInput";
import { GlobalSearchNotification } from "./GlobalSearchNotification";
import { GlobalSearchNotificationDot } from "./GlobalSearchNotificationDot";

const GlobalSearch = () => {
  return (
    <GlobalSearchStyled>
      <GlobalSearchInput type="text" placeholder="Global search" />
      <GlobalSearchNotification>
        <img src={notificationBell} alt="Notification" />
        <GlobalSearchNotificationDot src={notificationDot} alt="" show />
      </GlobalSearchNotification>
    </GlobalSearchStyled>
  );
};

export default GlobalSearch;
