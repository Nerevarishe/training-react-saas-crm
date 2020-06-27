import React from "react";
import styles from "./Header.module.scss";
import GlobalSearch from "./GlobalSearch";
import SideBar from "./SideBar";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <GlobalSearch />
      <SideBar />
    </header>
  );
};

export default Header;
