import React, { lazy, Suspense } from "react";
import { Container } from "react-bootstrap";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import Layout from "../../Layout/Layout";

import styles from "./Home.module.css";
import Perangkat from "../../components/Perangkat/Perangkat";

const Gallery = lazy(() => import("../../components/Gallery/Gallery"));
const Hero = lazy(() => import("../../components/Hero/Hero"));

const Home = () => {
  return (
    <Layout>
      <Suspense
        fallback={
          <Container className="d-flex justify-content-center align-items-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </Container>
        }
      >
        <Hero />
      </Suspense>
      <Container className={`${styles.card} my-5 text-center`}>
        <h2>
          <i className="bi bi-house-door"></i>
        </h2>
        <h2 style={{ color: "#52734D" }}>Desa Wonodoyo</h2>
        <p style={{ color: "#52734D" }}>
          Desa Wonodoyo merupakan salah satu desa yang ada di Kecamatan Cepogo,
          Kabupaten Boyolali. Terdiri dari 11 dusun dan 23 RT, merupakan daerah
          yang sangat produktif bagi pertanian dan merupakan wilayah gunung
          berapi yaitu berada di kaki gunung merapi.
        </p>
      </Container>
      <Container className="my-5 text-center">
        <h2>
          <i class="bi bi-image"></i>
        </h2>
        <h2>Galeri</h2>
        <Suspense
          fallback={
            <Container className="d-flex justify-content-center align-items-center">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </Container>
          }
        >
          <Gallery />
        </Suspense>
      </Container>
      <Container className="my-5 text-start">
        <h2>
          Peta Lokasi <i class="bi bi-pin-map"></i>
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31643.43142032288!2d110.45395689156038!3d-7.528106606572102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a64348e607d19%3A0xf9151332b8c302c9!2sWonodoyo%2C%20Kec.%20Cepogo%2C%20Kabupaten%20Boyolali%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1659774409190!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: "1px solid black" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>
        <MDBTable responsive style={{ width: "50%" }}>
          <MDBTableBody>
            <tr>
              <th scope="row">Desa</th>
              <td className="text-end">Wonodoyo</td>
            </tr>
            <tr>
              <th scope="row">Kecamatan</th>
              <td className="text-end">Cepogo</td>
            </tr>
            <tr>
              <th scope="row">Kabupaten</th>
              <td className="text-end">Boyolali</td>
            </tr>
            <tr>
              <th scope="row">Provinsi</th>
              <td className="text-end">Jawa Tengah</td>
            </tr>
            <tr>
              <th scope="row">Luas Wilayah</th>
              <td className="text-end">558,0675 Ha</td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </Container>
      <Container className="my-5 text-center">
        <h2>
          <i class="bi bi-person-circle"></i>
        </h2>
        <h2>Perangkat Desa</h2>
        <Perangkat />
      </Container>
    </Layout>
  );
};

export default Home;
