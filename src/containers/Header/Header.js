import React from "react";
import GlobalSearch from "./GlobalSearch";
import SideBar from "./SideBar";
import { HeaderStyled } from "./HeaderStyled";
import HeaderDivider from "./HeaderDivider";
import GenerateDataBar from "./GenerateDataBar";

const Header = () => {
  return (
    <HeaderStyled>
      <GenerateDataBar/>
      <GlobalSearch />
      <HeaderDivider />
      <SideBar />
    </HeaderStyled>
  );
};

export default Header;
