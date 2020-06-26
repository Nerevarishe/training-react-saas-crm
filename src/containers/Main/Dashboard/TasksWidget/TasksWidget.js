import React from "react";
import WidgetCard from "../../../../components/WidgetCard";
import "./TasksWidget.scss";
import ProgressBar from "./ProgressBar";
import DateSelector from "./DateSelector";

const widgetContent = {
  filterOptions: [
    {
      text: "Previous Week",
      value: "prevWeek",
    },
    {
      text: "This Week",
      value: "thisWeek",
    },
    {
      text: "Next Week",
      value: "nextWeek",
    },
  ],
};

const customTitle = (
  <span className="tasks-widget__completed-text">8 task completed out of 10</span>
);

const TasksWidget = () => {
  return (
    <WidgetCard
      widgetContent={widgetContent}
      showTitle
      customTitle={customTitle}
      showFilter
    >
      {/*TODO: Connect to tasks*/}
      <ProgressBar max={10} value={8} />

      <DateSelector />

      <div className="main__tasks-card">
        <span className="main__tasks-card-type">Reminder</span>

        <span className="main__tasks-card-task">
          Send benefit review by Sunday
        </span>

        <div className="main__tasks-card-due-date">
          <span className="main__tasks-card-due-date-text">Due date: </span>

          <span className="main__tasks-card-due-date-date">
            December 23, 2018
          </span>
        </div>

        <div className="main__tasks-card-person">
          <img
            src="./assets/img/associated_photo.png"
            alt="George Fields"
            className="main__tasks-card-person-avatar"
          />
          <span className="main__tasks-card-person-name">George Fields</span>
        </div>

        <div className="main__tasks-card-edit-block">
          <div className="main__tasks-card-edit-block-circles">
            <img
              src="./assets/img/svg/tasks-card/Ellipse.svg"
              alt="circle1"
              className="main__tasks-card-edit-block-circle-yellow"
            />
            <img
              src="./assets/img/svg/tasks-card/Ellipse-1.svg"
              alt="circle2"
              className="main__tasks-card-edit-block-circle-green"
            />
          </div>

          <div className="main__tasks-card-edit-block-edit-delete">
            <img
              src="./assets/img/svg/tasks-card/edit.svg"
              alt="Edit Task"
              className="main__tasks-card-edit-block-edit"
            />
            <img
              src="./assets/img/svg/tasks-card/delete.svg"
              alt="Delete Task"
              className="main__tasks-card-edit-block-delete"
            />
          </div>
        </div>

        <span className="main__tasks-card-status main__tasks-card-status_completed">
          Completed
        </span>
      </div>

      <div className="main__tasks-card">
        <span className="main__tasks-card-type">Call</span>

        <span className="main__tasks-card-task">Invite to office meet-up</span>

        <div className="main__tasks-card-due-date">
          <span className="main__tasks-card-due-date-text">Due date: </span>

          <span className="main__tasks-card-due-date-date">
            December 23, 2018
          </span>
        </div>

        <div className="main__tasks-card-person">
          <img
            src="./assets/img/associated_photo_rebeca.png"
            alt="George Fields"
            className="main__tasks-card-person-avatar"
          />
          <span className="main__tasks-card-person-name">Rebecca Moore</span>
        </div>

        <div className="main__tasks-card-edit-block">
          <div className="main__tasks-card-edit-block-circles">
            <img
              src="./assets/img/svg/tasks-card/Ellipse.svg"
              alt="circle1"
              className="main__tasks-card-edit-block-circle-yellow"
            />
            <img
              src="./assets/img/svg/tasks-card/Ellipse-1.svg"
              alt="circle2"
              className="main__tasks-card-edit-block-circle-green"
            />
          </div>

          <div className="main__tasks-card-edit-block-edit-delete">
            <img
              src="./assets/img/svg/tasks-card/edit.svg"
              alt="Edit Task"
              className="main__tasks-card-edit-block-edit"
            />
            <img
              src="./assets/img/svg/tasks-card/delete.svg"
              alt="Delete Task"
              className="main__tasks-card-edit-block-delete"
            />
          </div>
        </div>

        <span className="main__tasks-card-status main__tasks-card-status_ended">
          Ended
        </span>
      </div>

      <div className="main__tasks-card">
        <span className="main__tasks-card-type">Event</span>

        <span className="main__tasks-card-task">Office meet-up</span>

        <div className="main__tasks-card-due-date">
          <span className="main__tasks-card-due-date-text">Due date: </span>

          <span className="main__tasks-card-due-date-date">
            December 23, 2018
          </span>
        </div>

        <div className="main__tasks-card-person">
          <img
            src="./assets/img/associated_photo_lindsey.png"
            alt="George Fields"
            className="main__tasks-card-person-avatar"
          />
          <span className="main__tasks-card-person-name">Lindsey Stroud</span>
        </div>

        <div className="main__tasks-card-edit-block">
          <div className="main__tasks-card-edit-block-circles">
            <img
              src="./assets/img/svg/tasks-card/Ellipse.svg"
              alt="circle1"
              className="main__tasks-card-edit-block-circle-yellow"
            />
            <img
              src="./assets/img/svg/tasks-card/Ellipse-1.svg"
              alt="circle2"
              className="main__tasks-card-edit-block-circle-green"
            />
          </div>

          <div className="main__tasks-card-edit-block-edit-delete">
            <img
              src="./assets/img/svg/tasks-card/edit.svg"
              alt="Edit Task"
              className="main__tasks-card-edit-block-edit"
            />
            <img
              src="./assets/img/svg/tasks-card/delete.svg"
              alt="Delete Task"
              className="main__tasks-card-edit-block-delete"
            />
          </div>
        </div>

        <span className="main__tasks-card-status main__tasks-card-status_completed">
          Ended
        </span>
      </div>

      <div className="main__tasks-show-more">
        <button className="main__tasks-show-more-btn">Show more</button>
      </div>
    </WidgetCard>
  );
};

export default TasksWidget;
