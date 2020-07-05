import React, { Fragment } from "react";
import TasksWidget from "./TasksWidget";
import DealsWidget from "./DealsWidget";
import TasksChartWidget from "./TasksChartWidget";

const Dashboard = () => {
  return (
    <Fragment>
      <TasksWidget />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <DealsWidget />
        <TasksChartWidget />
      </div>
    </Fragment>
  );
};

export default Dashboard;
