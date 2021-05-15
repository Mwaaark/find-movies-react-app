import { useEffect, useState, useCallback } from "react";
import MovieList from "./components/MoviesList/MovieList";
import Search from "./components/Search/Search";

import "./App.css";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDBAPI_KEY}&s=${searchTerm}`
      );
      if (!response.ok) throw new Error("Something went wrong.");

      const data = await response.json();
      if (data.Error) throw new Error("Found no movies.");

      const transformedMovies = data.Search.map((movieData) => {
        return {
          id: movieData.imdbID,
          title: movieData.Title,
          year: movieData.Year,
          type: movieData.Type,
          image: movieData.Poster,
        };
      });

      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [searchTerm]);

  useEffect(() => {
    const identifier = setTimeout(fetchMovies, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [fetchMovies]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  let content;

  if (movies.length > 0) {
    content = <MovieList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <>
      <h1>Find Movies</h1>
      <Search onSearchChange={searchChangeHandler} />
      <section>{content}</section>
    </>
  );
}
