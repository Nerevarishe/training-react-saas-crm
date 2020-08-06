import React, { useContext } from "react";
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
import toggleImgActive from "./img/svg/toggle-active.svg";
import SideBarItem from "./SideBarItem";
import ProfileUser from "./ProfileUser";
import { SideBarTitle } from "./SideBarTitle";
import { SideBarTitleText } from "./SideBarTitleText";
import { SideBarMenu } from "./SideBarMenu";
import { SideBarToggle } from "./SideBarToggle";
import { Medium11Font } from "../../../components/Fonts/Fonts";
import SideBarToggleIcon from "./SideBarToggleIcon";
import SideBarStyled from "./SideBarStyled";
import { Context } from "../../../globalStore/store";
import { TOGGLE_SIDEBAR } from "../../../globalStore/reducer";

const profile = {
  avatar: "https://robohash.org/aliquidaliquamnon.bmp?size=150x150&set=set1",
  name: "Sierra Ferguson",
  email: "s.ferguson@gmail.com",
};

const sideBarItems = [
  {
    id: 0,
    image: {
      alt: "Dashboard Icon",
      img: dashboardImg,
      imgActive: dashboardActiveImg,
    },
    text: "Dashboard",
    isActive: true,
  },
  {
    id: 1,
    image: {
      alt: "Tasks Icon",
      img: tasksImg,
      imgActive: tasksActiveImg,
    },
    text: "Tasks",
  },
  {
    id: 2,
    image: {
      alt: "Email Icon",
      img: emailImg,
      imgActive: emailActiveImg,
    },
    text: "Email",
  },
  {
    id: 3,
    image: {
      alt: "Contacts Icon",
      img: contactsImg,
      imgActive: contactsActiveImg,
    },
    text: "Contacts",
  },
  {
    id: 4,
    image: {
      alt: "Chat Icon",
      img: chatImg,
      imgActive: chatActiveImg,
    },
    text: "Chat",
  },
  {
    id: 5,
    image: {
      alt: "Deals Icon",
      img: dealsImg,
      imgActive: dealsActiveImg,
    },
    text: "Deals",
  },
  {
    id: 6,
    divider: true,
  },
  {
    id: 7,
    image: {
      alt: "Settings Icon",
      img: settingsImg,
      imgActive: settingsActiveImg,
    },
    text: "Settings",
  },
];

const SideBar = () => {
  const [state, dispatch] = useContext(Context);

  const toggleSideBar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  return (
    <SideBarStyled onMouseEnter={toggleSideBar} onMouseLeave={toggleSideBar}>
      <SideBarTitle>
        <SideBarTitleText>SaaS</SideBarTitleText>
        <SideBarTitleText show={state.appState.isSideBarPulledOut}>
          {" "}
          Kit
        </SideBarTitleText>
      </SideBarTitle>

      <ProfileUser
        avatar={profile.avatar}
        name={profile.name}
        email={profile.email}
      />

      <SideBarMenu>
        {sideBarItems.map((item) => (
          <SideBarItem key={item.id} data={item} />
        ))}
      </SideBarMenu>

      <SideBarToggle>
        <SideBarToggleIcon
          src={state.appState.isSideBarPulledOut ? toggleImg : toggleImgActive}
          alt="Toggle Sidebar"
        />
        <Medium11Font
          color={(props) => props.theme.colors.grayColor}
          show={state.appState.isSideBarPulledOut}
        >
          Toggle sidebar
        </Medium11Font>
      </SideBarToggle>
    </SideBarStyled>
  );
};

export default SideBar;
