import React from "react";
import Footer from "../components/Navbar/Footer";
import Navigation from "../components/Navbar/Navbar";

const Layout = (props) => {
  return (
    <>
      <Navigation />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
