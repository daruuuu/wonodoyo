import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles["hero-image"]}>
      <div className={styles["hero-text"]}>
        <h1>Wonodoyo</h1>
        <p>
          Berada di lereng gunung bibi dengan ketinggian lebih dari 1000 MDPL
        </p>
      </div>
    </div>
  );
};

export default Hero;
