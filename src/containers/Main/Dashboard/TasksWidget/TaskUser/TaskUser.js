import React from "react";
import styles from "./TaskUser.module.scss";
import ViewUser from "../../../../../components/ViewUser";

const TaskUser = (props) => <ViewUser avatar={props.avatar} name={props.name} />;

export default TaskUser;
