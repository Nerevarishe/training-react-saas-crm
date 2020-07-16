import React, { useEffect, useRef, useState } from "react";
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
import TaskCardEditBlockButton from "./TaskCardEditBlockButton";
import { changeTaskStatus, getTaskCardData } from "./utils";

const TaskCard = (props) => {
  const [data, setData] = useState(null);
  const firstRun = useRef(true);
  const [needRender, setNeedRender] = useState(0);

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    const fetchData = async () => {
      const response = await getTaskCardData(props.data.task._id.$oid);
      setData(response.data);

    };
    fetchData();
  }, [needRender]);

  const completeHandler = async () => {
    await changeTaskStatus(props.data.task._id.$oid, "Completed");
    setNeedRender(needRender + 1);
  };

  const activeHandler = async () => {
    await changeTaskStatus(props.data.task._id.$oid, "Active");
    setNeedRender(needRender + 1);
  };
  // const editHandler = () => {};
  // const deleteHandler = () => {
  //   // 1. Dispatch to modal component id of object and function to perform delete
  //   // 2. Show modal window
  // };

  return (
    <TaskCardStyled>
      <TaskCardType>
        <Medium12Font color={(props) => props.theme.colors.grayColor}>
          {props.data["task"]["task_type"]}
        </Medium12Font>
      </TaskCardType>

      <TaskCardTaskText as={Medium15Font}>
        {props.data["task"]["task_body"]}
      </TaskCardTaskText>

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
      <TaskUser
        avatar={props.data.user.avatar}
        name={props.data.user.username}
      />
      <TaskCardEditBlock>
        <TaskCardEditBlockItem>
          <TaskCardEditBlockButton onClick={activeHandler}>
            <img src={Ellipse} alt="circle1" />
          </TaskCardEditBlockButton>
          <TaskCardEditBlockButton onClick={completeHandler}>
            <img src={Ellipse1} alt="circle2" />
          </TaskCardEditBlockButton>
        </TaskCardEditBlockItem>

        <TaskCardEditBlockItem>
          <TaskCardEditBlockButton>
            <img src={EditImg} alt="Edit Task" />
          </TaskCardEditBlockButton>
          <TaskCardEditBlockButton>
            <img src={DeleteImg} alt="Delete Task" />
          </TaskCardEditBlockButton>
        </TaskCardEditBlockItem>
      </TaskCardEditBlock>
      <TaskCardStatus
        status={data ? data["task_status"] : props.data["task"]["task_status"]}
      />
    </TaskCardStyled>
  );
};

TaskCard.propTypes = {
  data: PropTypes.shape({
    task: PropTypes.shape({
      _id: PropTypes.shape({
        $oid: PropTypes.string,
      }),
      task_type: PropTypes.oneOf(["Call", "Event", "Reminder"]), // TODO: Add functionality to hide in DOM when false
      task_body: PropTypes.string.isRequired,
      task_due_date: PropTypes.shape({
        $date: PropTypes.number.isRequired,
      }),
      task_status: PropTypes.oneOf(["Active", "Completed", "Ended"]).isRequired,
    }),
    user: PropTypes.shape({
      _id: PropTypes.shape({
        $oid: PropTypes.string.isRequired,
      }),
      avatar: PropTypes.string,
      email: PropTypes.string,
      username: PropTypes.string,
    }),
  }),
};

export default TaskCard;
