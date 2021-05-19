import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainNavbar.module.css";

export default function MainNavbar() {
  return (
    <>
      <div className={classes.logo}>Find Movies</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/movies" activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName={classes.active}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName={classes.active}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
