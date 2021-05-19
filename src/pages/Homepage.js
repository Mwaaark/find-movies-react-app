import { useEffect, useState, useCallback } from "react";
import SearchMovieList from "../components/Movies/SearchMovieList";
import Search from "../components/UI/Search";

export default function Homepage() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDBAPI_KEY}&s=${searchTerm}`
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
    const identifier = setTimeout(fetchMoviesHandler, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [fetchMoviesHandler]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  let content;

  if (movies.length > 0) {
    content = <SearchMovieList items={movies} />;
  }

  if (error) {
    content = <p className="margin-top">{error}</p>;
  }

  if (isLoading) {
    content = <p className="margin-top">Loading...</p>;
  }

  return (
    <section>
      <div className="container">
        <Search
          onSearchChange={searchChangeHandler}
          placeholder="Search for movies"
        />

        {content}
      </div>
    </section>
  );
}
