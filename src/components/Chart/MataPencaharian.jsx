import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Table } from "react-bootstrap";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "Karyawan",
    "Wiraswasta",
    "Petani",
    "Buruh Tani",
    "Jasa",
    "Pekerja Seni",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [8, 29, 1162, 90, 1, 4],
      backgroundColor: [
        "rgba(82, 115, 77, 0.5)",
        "rgba(56, 124, 97, 0.5)",
        "rgba(0, 131, 124, 0.5)",
        "rgba(0, 136, 154, 0.5)",
        "rgba(0, 139, 182, 0.5)",
        "rgba(45, 137, 202, 0.5)",
      ],
      borderColor: [
        "rgba(82, 115, 77, 1)",
        "rgba(56, 124, 97, 1)",
        "rgba(0, 131, 124, 1)",
        "rgba(0, 136, 154, 1)",
        "rgba(0, 139, 182, 1)",
        "rgba(45, 137, 202, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export function PencaharianChart() {
  return <Doughnut data={data} />;
}

export const Pencaharian = () => {
  return (
    <Table striped responsive>
      <thead>
        <tr>
          <th>Pekerjaan</th>
          <th>Jumlah</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Karyawan</td>
          <td>8 Orang</td>
        </tr>
        <tr>
          <td>Wiraswasta</td>
          <td>29 Orang</td>
        </tr>
        <tr>
          <td>Petani</td>
          <td>1662 Orang</td>
        </tr>
        <tr>
          <td>Buruh Tani</td>
          <td>90 Orang</td>
        </tr>
        <tr>
          <td>Jasa</td>
          <td>1 Orang</td>
        </tr>
        <tr>
          <td>Pekerja Seni</td>
          <td>1 Orang</td>
        </tr>
      </tbody>
    </Table>
  );
};
