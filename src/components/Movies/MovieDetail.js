import React from "react";
import { FaStar, FaClock } from "react-icons/fa";
import classes from "./MovieDetail.module.css";

export default function MovieDetail(props) {
  const { movie } = props;

  return (
    <div className={classes.movie_detail}>
      <img src={movie.Poster} alt={movie.Title} />
      <div>
        <h2>
          {movie.Title} ({movie.Year})
        </h2>
        <div className={classes.info}>
          <div className={classes.rated}>{movie.Rated}</div>
          <div>
            <FaStar /> {movie.imdbRating} rating
          </div>
          <div>
            <FaClock /> {movie.Runtime}
          </div>
        </div>
        <p className={classes.plot}>{movie.Plot}</p>
        <div className={classes.sub_info}>
          <p>
            Genre: <span>{movie.Genre}</span>
          </p>
          <p>
            Release: <span>{movie.Released}</span>
          </p>
          <p>
            Director: <span>{movie.Director}</span>
          </p>
          <p>
            Cast: <span>{movie.Actors}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
