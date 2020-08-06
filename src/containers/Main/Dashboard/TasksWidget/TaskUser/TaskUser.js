import React from "react";
import ViewUser from "../../../../../components/ViewUser";
import { Regular13Font } from "../../../../../components/Fonts/Fonts";
import { StyleAvatar } from "./StyleAvatar";

const TaskUser = (props) => (
  <ViewUser
    avatar={props.avatar}
    name={props.name}
    styleAvatar={StyleAvatar}
    styleUserNameFont={Regular13Font}
    styleUserNameColor={(props) => props.theme.colors.tableGrayColor}
    styleUserEmailFont={Regular13Font}
    styleUserEmailColor={(props) => props.theme.colors.tableGrayColor}
  />
);

export default TaskUser;
