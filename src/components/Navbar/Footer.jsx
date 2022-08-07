import React from "react";
import { Container } from "react-bootstrap";
import boyolali from "../../assets/icon/boyolali.png";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#527348" }}>
      <Container className="py-4">
        <section style={{ display: "flex", alignItems: "center" }}>
          <img style={{ width: "7.5em" }} src={boyolali} alt="" />
          <div style={{ color: "#FEFFDE" }}>
            <h3>DESA WONODOYO</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "bold",
              }}
            >
              <p style={{ margin: "0" }}>Kec Cepogo</p>
              <p style={{ margin: "0" }}>Kab Boyolali</p>
            </div>
          </div>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
