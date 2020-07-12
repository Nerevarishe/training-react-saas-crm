import React, { useEffect } from "react";
import Chart from "chart.js";

const DealsChartGenerator = () => {
  useEffect(() => {
    const ctx = document.getElementById("dealsChart");
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
      type: "line",
      data: {
        labels: ["1 Dec", "8 Dec", "16 Dec", "31 Dec"],
        datasets: [
          {
            label: "Closed deals",
            data: [50, 155, 80, 150],
            backgroundColor: ["rgba(218, 240, 253, 0.4)"],
            borderColor: ["rgba(16, 56, 241, 1)"],
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              type: "time",
              distribution: "series",
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        legend: {
          display: true,
          align: "start",
          labels: {
            boxWidth: 5,
            usePointStyle: true,
          },
        },
      },
    });
  });

  return (
    <canvas id="dealsChart" height="200px"/>
  );
};

export default DealsChartGenerator;
