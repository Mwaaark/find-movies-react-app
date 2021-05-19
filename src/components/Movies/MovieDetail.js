import React from "react";
import classes from "./MovieDetail.module.css";

export default function MovieDetail(props) {
  const { movie } = props;

  return (
    <div className={classes.movie_detail}>
      <div>
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div>
        <h2>
          {movie.Title} ({movie.Year})
        </h2>
        <div className={classes.sub_info}>
          <div>{movie.Rated}</div>
          <div>{movie.imdbRating} rating</div>
          <div>{movie.Runtime}</div>
        </div>
        <p className={classes.plot}>{movie.Plot}</p>
        <div className={classes.info}>
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
