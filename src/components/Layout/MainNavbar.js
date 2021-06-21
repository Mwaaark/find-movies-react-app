import React from "react";
import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import classes from "./MainNavbar.module.css";

export default function MainNavbar() {
  return (
    <>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link className={`${classes.brand} text-yellow`} to="/movies">
              <BiCameraMovie /> FindMovies
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
