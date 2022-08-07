import React from "react";
import view1 from "../../assets/bg/3.JPG";
import view2 from "../../assets/bg/4.JPG";
import view3 from "../../assets/bg/5.JPG";
import view4 from "../../assets/bg/6.JPG";
import view5 from "../../assets/bg/7.JPG";
import view6 from "../../assets/bg/8.JPG";

import styles from "./Gallery.module.css";

const Gallery = () => {
  return (
    <div className="row">
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <img
          src={view5}
          className="w-100 shadow-1-strong rounded mb-4"
          alt=""
        />

        <img
          src={view3}
          className="w-100 shadow-1-strong rounded mb-4"
          alt=""
        />
      </div>

      <div className="col-lg-4 mb-4 mb-lg-0">
        <img
          src={view1}
          className="w-100 shadow-1-strong rounded mb-4"
          alt=""
        />

        <img
          src={view4}
          className="w-100 shadow-1-strong rounded mb-4"
          alt=""
        />
      </div>

      <div className="col-lg-4 mb-4 mb-lg-0">
        <img
          src={view6}
          className="w-100 shadow-1-strong rounded mb-4"
          alt=""
        />

        <img
          src={view2}
          className="w-100 shadow-1-strong rounded mb-4"
          alt=""
        />
      </div>
    </div>
  );
};

export default Gallery;
