import React, { useEffect } from "react";
import Chart from "chart.js";
import moment from "moment";

const DealsChartGenerator = (props) => {
  useEffect(() => {
    const dateArray = [];
    const dataArray = [];
    if (props.data) {
      props.data.forEach((data) => {
        dateArray.push(moment(data._id).format("YYYY-MM-DD"));
        dataArray.push(data.count);
      });
    }
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
        // labels: ["2020-12-01", "2020-12-08", "2020-12-16", "2020-12-31"],
        labels: dateArray,
        datasets: [
          {
            label: "Closed deals",
            // data: [50, 155, 80, 150],
            data: dataArray,
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
    return () => myChart.destroy();
  }, [props.data]);

  return <canvas id="dealsChart" height="200px" />;
};

export default DealsChartGenerator;
