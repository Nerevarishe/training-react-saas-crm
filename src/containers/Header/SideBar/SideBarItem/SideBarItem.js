import React from "react";
import classes from "./SideBarItem.module.scss";

const SideBarItem = (props) => {
  return props.data.divider ? (
    <div className={classes["header__sidebar-divider"]} />
  ) : (
    <li className={classes["header__sidebar-item"]}>
      <a href="/" className={classes["header__sidebar-link"]}>
        <img
          src={props.data.image.img}
          alt={props.data.image.alt}
          className={classes["header__sidebar-link-icon"]}
        />
        {props.data.text}
      </a>
    </li>
  );
};

export default SideBarItem;
