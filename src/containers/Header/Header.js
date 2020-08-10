import React, { useContext } from "react";
import GlobalSearch from "./GlobalSearch";
import SideBar from "./SideBar";
import { HeaderStyled } from "./HeaderStyled";
import HeaderDivider from "./HeaderDivider";
import GenerateDataBar from "./GenerateDataBar";
import { Context } from "../../globalStore/store";
import Loader from "../../components/Loader";

const Header = () => {
  const [state, dispatch] = useContext(Context);
  return (
    <HeaderStyled>
      { state.appState.toggleLoader ? <Loader/> : null}
      <GenerateDataBar />
      <GlobalSearch />
      <HeaderDivider />
      <SideBar />
    </HeaderStyled>
  );
};

export default Header;
