import React, { useEffect, useState } from "react";
import { withTheme } from "styled-components";
import Chart from "chart.js";

const TasksChartGenerator = (props) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    setState(props.data);
    console.log(state);
    const ctx = document.getElementById("tasksChartGenerator");
    // eslint-disable-next-line no-unused-vars
    const myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Completed", "Active", "Ended"],
        datasets: [
          {
            data: [
              state !== null ? state["tasks_stat"]["completed_tasks"] : null,
              state !== null ? state["tasks_stat"]["active_tasks"] : null,
              state !== null ? state["tasks_stat"]["ended_tasks"] : null,
            ],
            backgroundColor: [
              `${props.theme.colors.greenColor}`,
              `${props.theme.colors.yellowColor}`,
              `${props.theme.colors.redColor}`,
            ],
            borderWidth: 0,
          },
        ],
      },
      options: {
        cutoutPercentage: 95,
        rotation: 90,
        legend: {
          display: true,
          position: "right",
          labels: {
            boxWidth: 5,
            usePointStyle: true,
          },
        },
      },
    });
  }, [props.data, state]);

  return (
    <div style={{ position: "relative" }}>
      <canvas
        style={{ position: "relative", zIndex: 1 }}
        id="tasksChartGenerator"
        height="200px"
      />
      <span
        style={{
          position: "absolute",
          top: "35%",
          left: "28%",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "56px",
          lineHeight: "84px",
          textAlign: "center",
          color: `${props.theme.colors.greenColor}`,
        }}
      >
        {state !== null ? state["tasks_stat"]["completed_tasks"] + "%" : null}
      </span>
    </div>
  );
};

export default withTheme(TasksChartGenerator);
