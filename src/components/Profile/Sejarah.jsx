import React from "react";
import { MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import paper from "../../assets/icon/paper.png";
import myth from "../../assets/icon/myth.png";

export const Sejarah = () => {
  return (
    <>
      <div className="d-flex justify-content-center mb-3">
        <img style={{ width: "40px" }} src={paper} alt="" />
      </div>
      <h2 className="text-center">Sejarah</h2>
      <p>
        Sejarah berdirinya Desa WONODOYO menurut legenda maupun catatan serta
        prasasti yang dapat digali adalah sebagai berikut
        <br />
        <i></i>
        <br />
        Mengingat sejarah Desa Wonodoyo adalah identik dengan kehidupan seorang
        tokoh ( Suwargi Eyang Honggo Wongso ) pada tahun 1687 babat alas bikin
        gubuk atau rumah kecil ditempati satu keluarga. Sebagai seorang yang
        patuh dan taat pada ajaran agama Islam beliau juga sangat gigih dalam
        berkarya dan bekerja, beliaulah yang pertama membuka hutan dan semak
        belukar menjadi pemukiman dan area pertanian yang cukup luas meliputi
        beberapa rumah satu keluarga. Jadi alas atau wono tersebut yang dibabat
        oleh Eyang Honggo Wongso dinamakan WONODOYO sampai sekarang.
      </p>
    </>
  );
};

export const Legenda = () => {
  return (
    <>
      <div className="d-flex justify-content-center mb-3">
        <img src={myth} alt="" />
      </div>
      <h2 className="text-center">Legenda</h2>
      <MDBListGroup flush>
        <MDBListGroupItem style={{ background: "transparent" }}>
          1. Pada zaman dahulu sebagian besar masyarakat Wonodoyo mempunyai adat
          istiadat kepercayaan yaitu pada bulan-bulan tertentu mempercayai tidak
          diperkenankan punya hajat (Pernikahan dan Khitanan) terutama pada
          bulan Syura
        </MDBListGroupItem>
        <MDBListGroupItem style={{ background: "transparent" }}>
          2. Pada menjelang musim panen hasil pertanian diadakan tasyakuran yang
          disebut dengan bersih desa
        </MDBListGroupItem>
        <MDBListGroupItem style={{ background: "transparent" }}>
          3. Pada saat bulan Safar mengadakan safaran dengan menyembelih
          kambing, kepalanya ditanam di sumber mata air, dagingnya dimasak dan
          dimakan bersama-sama atau disebut dengan kenduri
        </MDBListGroupItem>
        <MDBListGroupItem style={{ background: "transparent" }}>
          4. Pada saat bulan Ruwah diadakan acara tradisional run temurun dari
          nenek moyang yang disebut “Sadranan”
        </MDBListGroupItem>
        <MDBListGroupItem style={{ background: "transparent" }}>
          5. Setiap ada orang meninggal, sebelum dibawa ke pemakaman sanak
          saudara almarhum supaya nylusup (berjalan keliling 3 kali di bawah
          mayat yang sedang dipikul) dipercayai agar tidak membayangi kehidupan
          mereka.
        </MDBListGroupItem>
      </MDBListGroup>
    </>
  );
};
