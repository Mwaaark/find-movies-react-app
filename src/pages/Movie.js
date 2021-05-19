import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import MovieDetail from "../components/Movies/MovieDetail";

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
    content = <MovieDetail movie={movie} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  return (
    <section>
      <div className="container">{content}</div>
    </section>
  );
}
