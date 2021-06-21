import React from "react";
import MainNavbar from "./MainNavbar";

import classes from "./MainHeader.module.css";

export default function MainHeader() {
  return (
    <header className={`${classes.header} text-yellow`}>
      <MainNavbar />
    </header>
  );
}
