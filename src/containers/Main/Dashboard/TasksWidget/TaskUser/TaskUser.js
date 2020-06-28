import React from "react";
import styles from "./TaskUser.module.scss";
import ViewUser from "../../../../../components/ViewUser";

const styleAvatar = {
  maxWidth: "24px",
  maxHeight: "24px",
  marginRight: "12px",
};

const styleUserName = {
  //@include regular-13-font;
  //color: $table-gray-color;
};

const TaskUser = (props) => (
  <ViewUser avatar={props.avatar} name={props.name} styleAvatar={styleAvatar} />
);

export default TaskUser;
