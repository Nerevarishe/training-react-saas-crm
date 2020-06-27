import React from "react";
import "./TaskUser.scss";
import ViewUser from "../../../../../components/ViewUser";

const TaskUser = (props) => <ViewUser avatar={props.avatar} name={props.name} />;

export default TaskUser;
