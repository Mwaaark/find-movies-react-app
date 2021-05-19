import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Movie() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDBAPI_KEY}&i=${movieId}`
      );
      if (!response.ok) throw new Error("Something went wrong.");

      const data = await response.json();
      if (data.Error) throw new Error(data.Error);

      setMovie(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [movieId]);

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (movie) {
    content = (
      <div>
        <div>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div>
          <h2>
            {movie.Title} ({movie.Year})
          </h2>
          <div>
            <div>{movie.Rated}</div>
            <div>&#9733; {movie.imdbRating}</div>
            <div>{movie.Runtime}</div>
          </div>
          <p>{movie.Plot}</p>
          <p>Genre: {movie.Genre}</p>
          <p>Release: {movie.Released}</p>
          <p>Director: {movie.Director}</p>
          <p>Cast: {movie.Actors}</p>
        </div>
      </div>
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  return <div>{content}</div>;
}
