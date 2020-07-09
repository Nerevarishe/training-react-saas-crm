import React from "react";
import GlobalSearch from "./GlobalSearch";
import SideBar from "./SideBar";
import { HeaderStyled } from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <GlobalSearch />
      <SideBar />
    </HeaderStyled>
  );
};

export default Header;
