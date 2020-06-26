import React from "react";
import "./SideBar.scss";
import chatActiveImg from "./img/svg/chat-active.svg";
import chatImg from "./img/svg/chat.svg";
import contactsActiveImg from "./img/svg/contacts-active.svg";
import contactsImg from "./img/svg/contacts.svg";
import dashboardActiveImg from "./img/svg/dashboard-active.svg";
import dashboardImg from "./img/svg/dashboard.svg";
import dealsActiveImg from "./img/svg/deals-active.svg";
import dealsImg from "./img/svg/deals.svg";
import emailActiveImg from "./img/svg/email-active.svg";
import emailImg from "./img/svg/email.svg";
import tasksActiveImg from "./img/svg/tasks-active.svg";
import tasksImg from "./img/svg/tasks.svg";
import settingsActiveImg from "./img/svg/settings-active.svg";
import settingsImg from "./img/svg/settings.svg";
import toggleImg from "./img/svg/toggle.svg";
import SideBarItem from "./SideBarItem";

const sideBarItems = [
  {
    image: {
      alt: "Dashboard Icon",
      img: dashboardImg,
      imgActive: dashboardActiveImg,
    },
    text: "Dashboard",
  },
  {
    image: {
      alt: "Tasks Icon",
      img: tasksImg,
      imgActive: tasksActiveImg,
    },
    text: "Tasks",
  },
  {
    image: {
      alt: "Email Icon",
      img: emailImg,
      imgActive: emailActiveImg,
    },
    text: "Email",
  },
  {
    image: {
      alt: "Contacts Icon",
      img: contactsImg,
      imgActive: contactsActiveImg,
    },
    text: "Contacts",
  },
  {
    image: {
      alt: "Chat Icon",
      img: chatImg,
      imgActive: chatActiveImg,
    },
    text: "Chat",
  },
  {
    image: {
      alt: "Deals Icon",
      img: dealsImg,
      imgActive: dealsActiveImg,
    },
    text: "Deals",
  },
  {
    divider: true
  },
  {
    image: {
      alt: "Settings Icon",
      img: settingsImg,
      imgActive: settingsActiveImg,
    },
    text: "Settings",
  },
];

const SideBar = () => {
  return (
    <nav className="header__sidebar">
      <div className="header__title">
        <span className="header__title-text">SaaS Kit</span>
      </div>

      <div className="header__divider" />

      <div className="header__user">
        <div className="header__avatar-block">
          <img
            src="./assets/img/profile_photo.png"
            alt="Profile Photo"
            className="header__avatar-img"
          />
        </div>

        <div className="header__user-info">
          <span className="header__username-text">Sierra Ferguson</span>

          <span className="header__email-text">s.ferguson@gmail.com</span>
        </div>
      </div>

      <ul className="header__sidebar-menu">
        {sideBarItems.map(item => (
          <SideBarItem data={item}/>
        ))}
      </ul>

      <div className="header__toggle">
        <img
          src={toggleImg}
          alt="Toggle Sidebar"
          className="header__toggle-icon"
        />
        <span className="header__toggle-text">Toggle sidebar</span>
      </div>
    </nav>
  );
};

export default SideBar;
