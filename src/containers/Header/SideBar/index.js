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
import { HeaderDivider } from "./HeaderDivider";
import { SideBarMenu } from "./SideBarMenu";
import { SideBarToggle } from "./SideBarToggle";
import { Medium11Font } from "../../../components/Fonts/Fonts";
import { SideBarToggleIcon } from "./SideBarToggleIcon";
import SideBarStyled from "./SideBarStyled";
import { Context } from "../../../store";

const profile = {
  avatar: "https://api.adorable.io/avatars/100/Sierra_Ferguson.png",
  name: "Sierra Ferguson",
  email: "s.ferguson@gmail.com",
};

const sideBarItems = [
  {
    image: {
      alt: "Dashboard Icon",
      img: dashboardImg,
      imgActive: dashboardActiveImg,
    },
    text: "Dashboard",
    isActive: true,
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
    divider: true,
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
  const [state, dispatch] = useContext(Context);

  return (
    <SideBarStyled>
      <SideBarTitle>
        <SideBarTitleText>SaaS</SideBarTitleText>
        <SideBarTitleText show={state.appState.isSideBarPulledOut}>
          {" "}
          Kit
        </SideBarTitleText>
      </SideBarTitle>

      <HeaderDivider />

      <ProfileUser
        avatar={profile.avatar}
        name={profile.name}
        email={profile.email}
      />

      <SideBarMenu>
        {sideBarItems.map((item) => (
          <SideBarItem key={item.text} data={item} />
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
