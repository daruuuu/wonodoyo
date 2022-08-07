import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Container, Table } from "react-bootstrap";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Laki-Laki", "Perempuan"],
  datasets: [
    {
      label: "# of Votes",
      data: [1377, 1317],
      backgroundColor: ["rgba(82, 115, 77, 0.5)", "rgba(145, 199, 136, 0.5)"],
      borderColor: ["rgba(82, 115, 77, 1)", "rgba(145, 199, 136, 1)"],
      borderWidth: 1,
    },
  ],
};

export const GenderChart = () => {
  return (
    <Container style={{ width: "80%" }}>
      <Pie data={data} />
    </Container>
  );
};

export const Gender = () => {
  return (
    <Table striped responsive>
      <thead>
        <tr>
          <th>Gender</th>
          <th>Laki-laki</th>
          <th>Perempuan</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Jumlah</td>
          <td>1377 Jiwa</td>
          <td>1317 Jiwa</td>
        </tr>
      </tbody>
    </Table>
  );
};
