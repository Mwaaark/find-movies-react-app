import React from "react";
import MovieItem from "../MovieItem/MovieItem";

import classes from "./MovieList.module.css";

export default function MovieList({ movies }) {
  return (
    <ul className={classes.movie_list}>
      {movies.map(({ id, ...otherMovieProps }) => (
        <MovieItem key={id} id={id} {...otherMovieProps} />
      ))}
    </ul>
  );
}
