import React from "react";
import GlobalSearch from "./GlobalSearch";
import SideBar from "./SideBar";
import { HeaderStyled } from "./HeaderStyled";
import HeaderDivider from "./HeaderDivider";

const Header = () => {
  return (
    <HeaderStyled>
      <GlobalSearch />
      <HeaderDivider />
      <SideBar />
    </HeaderStyled>
  );
};

export default Header;
