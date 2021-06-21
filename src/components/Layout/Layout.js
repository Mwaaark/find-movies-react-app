import React from "react";
import MainHeader from "./MainHeader";
import Footer from "./Footer";

// import classes from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <MainHeader />
      <main role="main">{children}</main>
      <Footer />
    </>
  );
}
