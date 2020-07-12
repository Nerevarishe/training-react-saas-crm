import React from "react";
import PropTypes from "prop-types";
import Ellipse from "./img/svg/Ellipse.svg";
import Ellipse1 from "./img/svg/Ellipse-1.svg";
import EditImg from "./img/svg/edit.svg";
import DeleteImg from "./img/svg/delete.svg";
import TaskUser from "../../containers/Main/Dashboard/TasksWidget/TaskUser";
import { Medium12Font, Medium15Font, Regular13Font } from "../Fonts/Fonts";
import { TaskCardStatus } from "./TaskCardStatus";
import { TaskCardStyled } from "./TaskCardStyled";
import { TaskCardType } from "./TaskCardType";
import { TaskCardTaskText } from "./TaskCardTaskText";
import { TaskCardDueDate } from "./TaskCardDueDate";
import { TaskCardEditBlock } from "./TaskCardEditBlock";
import { TaskCardEditBlockItem } from "./TaskCardEditBlockItem";
import { convertToDate } from "../../utils/timeConverter";

const TaskCard = (props) => {
  return (
    <TaskCardStyled>
      <TaskCardType>
        <Medium12Font color={(props) => props.theme.colors.grayColor}>
          {props.data["task"]["task_type"]}
        </Medium12Font>
      </TaskCardType>

      <TaskCardTaskText as={Medium15Font}>{props.data["task"]["task_body"]}</TaskCardTaskText>

      <TaskCardDueDate>
        <Regular13Font
          color={(props) => props.theme.colors.darkGrayColor}
          style={{
            marginRight: "5px",
            opacity: 0.5,
          }}
        >
          Due date:
        </Regular13Font>

        <Regular13Font color={(props) => props.theme.colors.darkGrayColor}>
          {convertToDate(props.data["task"]["task_due_date"]["$date"])}
        </Regular13Font>
      </TaskCardDueDate>
      {/*TODO: Style TaskUser component*/}
      <TaskUser
        avatar={props.data.user.avatar}
        name={props.data.user.username}
      />
      <TaskCardEditBlock>
        <TaskCardEditBlockItem>
          <img src={Ellipse} alt="circle1" />
          <img src={Ellipse1} alt="circle2" />
        </TaskCardEditBlockItem>

        <TaskCardEditBlockItem>
          <a href="#">
            <img src={EditImg} alt="Edit Task" />
          </a>
          <a href="#">
            <img src={DeleteImg} alt="Delete Task" />
          </a>
        </TaskCardEditBlockItem>
      </TaskCardEditBlock>
      <TaskCardStatus status={props.data["task"]["task_status"]} />
    </TaskCardStyled>
  );
};

TaskCard.propTypes = {
  data: PropTypes.shape({
    taskId: PropTypes.number.isRequired, // TODO: When completing backend, change to appropriate type!
    taskType: PropTypes.oneOf(["Call", "Event", "Reminder"]), // TODO: Add functionality to hide in DOM when false
    task: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired, // TODO: When completing backend, change to appropriate type!
    taskStatus: PropTypes.oneOf(["Active", "Completed", "Ended"]).isRequired,
    person: PropTypes.shape({
      avatar: PropTypes.string, // TODO: When completing backend, change to appropriate type!
      name: PropTypes.string.isRequired,
    }),
  }),
};

export default TaskCard;
