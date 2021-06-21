import React from "react";
import { Link } from "react-router-dom";

import classes from "./SeachMovieItem.module.css";

export default function SeachMovieItem({ id, image, title, year }) {
  return (
    <li className={classes.movie_item}>
      <Link to={`/movies/${id}`} key={id}>
        <div>
          <img src={image} alt={title} />
        </div>
        <div>
          <p>
            {title} <span>({year})</span>
          </p>
        </div>
      </Link>
    </li>
  );
}
