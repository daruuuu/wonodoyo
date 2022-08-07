import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./Perangkat.module.css";

import { Pagination } from "swiper";
import Cards from "./Cards";

function Perangkat() {
  const perangkat = [
    {
      nama: "Bapak Kepala Desa",
      jabatan: "Kepala Desa",
      img: "https://www.fillmurray.com/640/360",
    },
    {
      nama: "Bapak Kepala Desa",
      jabatan: "Kepala Desa",
      img: "https://www.fillmurray.com/640/360",
    },
    {
      nama: "Bapak Kepala Desa",
      jabatan: "Kepala Desa",
      img: "https://www.fillmurray.com/640/360",
    },
    {
      nama: "Bapak Kepala Desa",
      jabatan: "Kepala Desa",
      img: "https://www.fillmurray.com/640/360",
    },
    {
      nama: "Bapak Kepala Desa",
      jabatan: "Kepala Desa",
      img: "https://www.fillmurray.com/640/360",
    },
    {
      nama: "Bapak Kepala Desa",
      jabatan: "Kepala Desa",
      img: "https://www.fillmurray.com/640/360",
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {perangkat.map((item, index) => {
          return (
            <SwiperSlide className={styles["swiper-container"]} key={index}>
              <Cards nama={item.nama} jabatan={item.jabatan} img={item.img} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default Perangkat;
