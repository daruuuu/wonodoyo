import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import styles from "./Profile.module.css";
import Layout from "../../Layout/Layout";
import Pemimpin from "../../components/Profile/Pemimpin";
import { Sejarah, Legenda } from "../../components/Profile/Sejarah";

import view from "../../assets/bg/2.jpg";
import view2 from "../../assets/bg/3.PNG";
import bulb from "../../assets/icon/bulb.png";

const Profile = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col sm={8}>
            <Container className={`${styles.card} px-5 my-5`}>
              <Sejarah />
            </Container>
            <Container className={`${styles.card} px-5 my-5`}>
              <Legenda />
            </Container>
            <Container className={`${styles.card} px-5 my-5`}>
              <Pemimpin />
            </Container>
          </Col>
          <Col sm={4} className="my-5">
            <figure className="figure">
              <img
                src={view}
                className="figure-img img-fluid rounded"
                alt="..."
                loading="lazy"
              />
            </figure>
            <figure className="figure">
              <img
                src={view2}
                className="figure-img img-fluid rounded"
                alt="..."
                loading="lazy"
              />
            </figure>
            <Container
              className={`${styles.card} px-5`}
              style={{
                background: "#52734D",
                color: "#FEFFDE",
              }}
            >
              <div className="d-flex justify-content-center mb-3">
                <img style={{ width: "40px" }} src={bulb} alt="" />
              </div>
              Selain itu wilayah wonodoyo merupakan daerah yang sangat produktif
              bagi pertanian dan merupakan wilayah gunung berapi yaitu berada di
              kaki gunung merapi.
            </Container>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Profile;
