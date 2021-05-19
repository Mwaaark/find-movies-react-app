import React from "react";
import SeachMovieItem from "./SeachMovieItem";

import classes from "./SearchMovieList.module.css";

export default function SearchMovieList({ items }) {
  return (
    <ul className={classes.movie_list}>
      {items.map(({ id, ...otherItemProps }) => (
        <SeachMovieItem key={id} id={id} {...otherItemProps} />
      ))}
    </ul>
  );
}
