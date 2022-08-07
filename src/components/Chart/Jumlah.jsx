import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Table from "react-bootstrap/Table";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Jumlah Umur Penduduk",
    },
  },
};

const labels = ["0-17", "18-55", "56+"];

export const data = {
  labels,
  datasets: [
    {
      label: "Jumlah",
      data: [646, 1471, 575],
      backgroundColor: "rgba(82, 115, 77, 0.5)",
    },
  ],
};

export function Jumlah() {
  return <Bar options={options} data={data} />;
}

export const Umur = () => {
  return (
    <Table striped responsive>
      <thead>
        <tr>
          <th>Usia</th>
          <th>0-17</th>
          <th>18-55</th>
          <th>56+</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Jumlah</th>
          <td>646 Jiwa</td>
          <td>1471 Jiwa</td>
          <td>575 Jiwa</td>
        </tr>
      </tbody>
    </Table>
  );
};
