import "../App.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const data = {
  labels: ["HTML", "CSS", "JavaScript", "React", "Mongo", "Python"],
  datasets: [
    {
      label: "Level of proficiency",
      data: [4, 4, 3.5, 3, 3, 1, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderColor: "Black",
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
};

function Chart() {
  return (
    <div id="chart-data" className="m-auto my-4">
      <Bar data={data} options={options} height={80} />
    </div>
  );
}

export default Chart;
