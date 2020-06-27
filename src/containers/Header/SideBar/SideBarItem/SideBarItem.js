import React, { useState } from "react";
import styles from "./SideBarItem.module.scss";

const SideBarItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return props.data.divider ? (
    <div className={styles["header__sidebar-divider"]} />
  ) : (
    <li className={styles["header__sidebar-item"]}>
      <a
        href="#"
        className={
          props.data.isActive || isHovered
            ? `${styles["header__sidebar-link"]} ${styles["header__sidebar-link_active"]}`
            : styles["header__sidebar-link"]
        }
        onMouseEnter={() => setIsHovered(!isHovered)}
        onMouseLeave={() => setIsHovered(!isHovered)}
      >
        <img
          src={
            props.data.isActive || isHovered
              ? props.data.image.imgActive
              : props.data.image.img
          }
          alt={props.data.image.alt}
          className={styles["header__sidebar-link-icon"]}
        />
        {props.data.text}
      </a>
    </li>
  );
};

export default SideBarItem;
