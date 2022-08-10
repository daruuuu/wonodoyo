import React, { useState } from "react";

import styles from "./Gallery.module.css";

import view3 from "../../assets/view/3.jpg";
import view4 from "../../assets/view/4.JPG";
import view5 from "../../assets/view/5.JPG";
import view6 from "../../assets/view/6.JPG";
import view7 from "../../assets/view/7.JPG";
import view8 from "../../assets/view/8.JPG";
import view9 from "../../assets/view/9.JPG";
import view10 from "../../assets/view/10.JPG";
import view11 from "../../assets/view/11.JPG";
import view12 from "../../assets/view/12.JPG";

import { Container } from "react-bootstrap";
import Layout from "../../Layout/Layout";

const imgs = [
  view3,
  view4,
  view5,
  view6,
  view7,
  view8,
  view9,
  view10,
  view11,
  view12,
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(imgs[0]);

  return (
    <Layout>
      <Container className="mt-5">
        <Container className="d-flex">
          <img src={selectedImg} alt="selected" className={styles.selected} />
        </Container>
        <Container className={`${styles.imgContainer} px-5 my-5`}>
          {imgs.map((img, index) => (
            <img
              style={{ border: selectedImg === img ? "2px solid #52734D" : "" }}
              src={img}
              alt="view"
              key={index}
              onClick={() => setSelectedImg(img)}
              loading="lazy"
            />
          ))}
        </Container>
      </Container>
    </Layout>
  );
};

export default Gallery;
