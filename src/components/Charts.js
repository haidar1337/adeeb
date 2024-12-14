import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export function BarChart() {
  const data = {
    labels: ["20-25", "26-30", "31-35", "36-40", "41+"],
    datasets: [
      {
        label: "Age Distribution",
        data: [65, 80, 40, 75, 50],
        backgroundColor: "rgb(37, 99, 235)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">2024 Reporting</h2>
      <Bar data={data} options={options} height={200} />
    </div>
  );
}

export function PieChart() {
  const data = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [75, 25],
        backgroundColor: ["rgb(37, 99, 235)", "rgb(236, 72, 153)"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Employees</h2>
      <Pie data={data} options={options} />
    </div>
  );
}
