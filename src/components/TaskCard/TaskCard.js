import React from "react";
import Ellipse from "./img/svg/Ellipse.svg";
import Ellipse1 from "./img/svg/Ellipse-1.svg";
import EditImg from "./img/svg/edit.svg";
import DeleteImg from "./img/svg/delete.svg";
import styles from "./TaskCard.module.scss";
import TaskUser from "../../containers/Main/Dashboard/TasksWidget/TaskUser";

const TaskCard = (props) => {
  const checkStatus = (taskStatus) => {
    if (taskStatus === "Completed") {
      return `${styles["tasks-widget__task-card-status"]} ${styles["tasks-widget__task-card-status_completed"]}`;
    } else if (taskStatus === "Active") {
      return `${styles["tasks-widget__task-card-status"]} ${styles["tasks-widget__task-card-status_active"]}`;
    }
    return `${styles["tasks-widget__task-card-status"]} ${styles["tasks-widget__task-card-status_ended"]}`;
  };

  return (
    <div className={styles["tasks-widget__task-card"]}>
      <span className={styles["tasks-widget__task-card-type"]}>
        {props.data.taskType}
      </span>

      <span className={styles["tasks-widget__task-card-task"]}>
        {props.data.task}
      </span>

      <div className={styles["tasks-widget__task-card-due-date"]}>
        <span className={styles["tasks-widget__task-card-due-date-text"]}>
          Due date: {props.data.dueDate}
        </span>

        <span className={styles["tasks-widget__task-card-due-date-date"]}>
          December 23, 2018
        </span>
      </div>
      <TaskUser
        avatar={props.data.person.avatar}
        name={props.data.person.name}
      />
      <div className={styles["tasks-widget__task-card-edit-block"]}>
        <div className={styles["tasks-widget__task-card-edit-block-circles"]}>
          <img
            src={Ellipse}
            alt="circle1"
            className={
              styles["tasks-widget__task-card-edit-block-circle-yellow"]
            }
          />
          <img
            src={Ellipse1}
            alt="circle2"
            className={
              styles["tasks-widget__task-card-edit-block-circle-green"]
            }
          />
        </div>

        <div
          className={styles["tasks-widget__task-card-edit-block-edit-delete"]}
        >
          <a href="#">
            <img
              src={EditImg}
              alt="Edit Task"
              className={styles["tasks-widget__task-card-edit-block-edit"]}
            />
          </a>
          <a href="#">
            <img
              src={DeleteImg}
              alt="Delete Task"
              className={styles["tasks-widget__task-card-edit-block-delete"]}
            />
          </a>
        </div>
      </div>

      <span className={checkStatus(props.data.taskStatus)}>
        {props.data.taskStatus}
      </span>
    </div>
  );
};

export default TaskCard;
