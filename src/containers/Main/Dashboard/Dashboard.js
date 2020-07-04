import React, { Fragment } from "react";
import TasksWidget from "./TasksWidget";
import DealsWidget from "./DealsWidget";

const Dashboard = () => {
  return (
    <Fragment>
      <TasksWidget />
      <DealsWidget />
    </Fragment>
  );
};

export default Dashboard;
