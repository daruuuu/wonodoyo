import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Gender, GenderChart } from "../../components/Chart/Gender";
import { Jumlah, Umur } from "../../components/Chart/Jumlah";
import {
  Pencaharian,
  PencaharianChart,
} from "../../components/Chart/MataPencaharian";
import { Pendidikan, PendidikanChart } from "../../components/Chart/Pendidikan";
import Layout from "../../Layout/Layout";

import styles from "./Statistic.module.css";

const Statistic = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col className="d-flex">
            <Container className={`${styles.card} px-5 my-5`}>
              <h3 className="text-center">Jumlah Penduduk (Umur)</h3>
              <Umur />
            </Container>
            <Container className="px-5 my-5">
              <Jumlah />
            </Container>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex">
            <Container className={`${styles.card} px-5 my-5`}>
              <h3 className="text-center">Jumlah Penduduk (Gender)</h3>
              <Gender />
            </Container>
            <Container className="px-5 my-5">
              <GenderChart />
            </Container>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex">
            <Container className={`${styles.card} px-5 my-5`}>
              <h3 className="text-center">Mata Pencaharian</h3>
              <Pencaharian />
            </Container>
            <Container className="px-5 my-5">
              <PencaharianChart />
            </Container>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex">
            <Container className={`${styles.card} px-5 my-5`}>
              <h3 className="text-center">Tingkat Pendidikan</h3>
              <Pendidikan />
            </Container>
            <Container className="px-5 my-5">
              <PendidikanChart />
            </Container>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Statistic;
