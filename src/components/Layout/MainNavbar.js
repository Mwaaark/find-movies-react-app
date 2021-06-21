import React from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavbar.module.css";

export default function MainNavbar() {
  return (
    <>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link className={`${classes.logo} text-yellow`} to="/movies">
              FindMovies
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
