import React, { useEffect } from "react";
import Chart from "chart.js";

const TasksChartGenerator = () => {
  useEffect(() => {
    const ctx = document.getElementById("tasksChartGenerator");
    // eslint-disable-next-line no-unused-vars
    const myChart = new Chart(ctx, {
      defaults: {
        global: {
          elements: {
            point: {
              radius: "10",
              backgroundColor: "rgba(255, 255, 255, 1)",
              borderWidth: "5",
            },
          },
        },
      },
      type: "doughnut",
      data: {
        labels: ["Completed", "Active", "Ended"],
        datasets: [
          {
            label: "Closed deals",
            data: [60, 30, 10],
            backgroundColor: [
              "rgba(46, 212, 122, 1)",
              "rgba(255, 187, 70, 1)",
              "rgba(247, 104, 91, 1)",
            ],
            borderWidth: 0,
            // borderAlign: "inner",
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
  });

  return (
    <div style={{ position: "relative" }}>
      <canvas id="tasksChartGenerator" height="200px"/>
      <span
        style={{
          position: "absolute",
          top: "30%",
          left: "26%",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "56px",
          lineHeight: "84px",
          textAlign: "center",
          color: "#2ED47A",
        }}
      >
        60%
      </span>
    </div>
  );
};

export default TasksChartGenerator;
