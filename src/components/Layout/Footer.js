import React from "react";

import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`${classes.footer} text-yellow`}>
      <div className="container">
        <p>Copyright &copy; 2021 FindMovies. All Rights Reserved </p>
      </div>
    </footer>
  );
}
