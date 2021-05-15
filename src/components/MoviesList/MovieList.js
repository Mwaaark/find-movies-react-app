import React from "react";
import MovieItem from "../MovieItem/MovieItem";

export default function MovieList({ movies }) {
  return (
    <ul>
      {movies.map(({ id, ...otherMovieProps }) => (
        <MovieItem key={id} id={id} {...otherMovieProps} />
      ))}
    </ul>
  );
}
