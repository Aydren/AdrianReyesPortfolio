import "../App.css";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler);

const data = {
  labels: ["HTML", "CSS", "JavaScript", "React", "Mongo", "Python"],
  datasets: [
    {
      label: "Level of proficiency",
      data: [4, 4, 3.5, 3, 2.5, 1],
      backgroundColor: [
        "rgba(0, 200, 255, 0.1)",
        /* "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)", */
      ],
      borderColor: "Black",
      borderWidth: 1,
    },
    { data: [0] },
    { data: [5] },
  ],
};

const options = {
  responsive: true,
  scales: {
    r: {
      ticks: {
        stepSize: 1,
        display: false,
      },
    },
  },
};

function RadarChart() {
  return (
    <div id="chart-data" className="m-auto my-4">
      <Radar data={data} options={options} />
    </div>
  );
}

export default RadarChart;
