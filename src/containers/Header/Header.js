import React from "react";
import "./Header.scss";
import GlobalSearch from "./GlobalSearch";
import SideBar from "./SideBar";

const Header = () => {
  return (
    <header className="header">
      <GlobalSearch />
      <SideBar />
    </header>
  );
};

export default Header;
