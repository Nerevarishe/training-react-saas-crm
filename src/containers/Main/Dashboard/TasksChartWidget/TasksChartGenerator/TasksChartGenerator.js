import React, { useEffect, useState } from "react";
import { withTheme } from "styled-components";
import Chart from "chart.js";

const TasksChartGenerator = (props) => {
  const [localState, setLocalState] = useState(null);

  useEffect(() => {
    setLocalState(props.data);
    const ctx = document.getElementById("tasksChartGenerator");
    // eslint-disable-next-line no-unused-vars
    const myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Completed", "Active", "Ended"],
        datasets: [
          {
            data: [
              localState !== null
                ? localState["tasks_stat"]["completed_tasks"]
                : null,
              localState !== null
                ? localState["tasks_stat"]["active_tasks"]
                : null,
              localState !== null
                ? localState["tasks_stat"]["ended_tasks"]
                : null,
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
    return () => myChart.destroy();
  }, [
    props.data,
    props.theme.colors.greenColor,
    props.theme.colors.redColor,
    props.theme.colors.yellowColor,
    localState,
  ]);

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
          color: props.theme.colors.greenColor,
        }}
      >
        {localState !== null
          ? localState["tasks_stat"]["completed_tasks"] !== 0
            ? localState["tasks_stat"]["completed_tasks"] + "%"
            : null
          : null}
      </span>
    </div>
  );
};

export default withTheme(TasksChartGenerator);
