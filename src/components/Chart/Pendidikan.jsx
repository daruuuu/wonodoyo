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
      text: "Tingkat Pendidikan",
    },
  },
};

const labels = ["TK", "SD", "SMP", "SMA", "D1-D3", "S1"];

export const data = {
  labels,
  datasets: [
    {
      label: "Jumlah",
      data: [62, 1185, 556, 341, 11, 22],
      backgroundColor: "rgba(82, 115, 77, 0.5)",
    },
  ],
};

export function PendidikanChart() {
  return <Bar options={options} data={data} />;
}

export const Pendidikan = () => {
  return (
    <Table striped responsive>
      <thead>
        <tr>
          <th>Pendidikan</th>
          <th>Jumlah</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>TK</td>
          <td>62 Orang</td>
        </tr>
        <tr>
          <td>SD</td>
          <td>1185 Orang</td>
        </tr>
        <tr>
          <td>SMP</td>
          <td>566 Orang</td>
        </tr>
        <tr>
          <td>SMA</td>
          <td>341 Orang</td>
        </tr>
        <tr>
          <td>D1 - D3</td>
          <td>11 Orang</td>
        </tr>
        <tr>
          <td>Sarjana S1</td>
          <td>22 Orang</td>
        </tr>
      </tbody>
    </Table>
  );
};
