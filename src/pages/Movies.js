import { useEffect, useState, useCallback } from "react";
import { Image, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Movies() {
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
    content = (
      <ListGroup>
        {movies.map((movie) => (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            style={{ textDecoration: "none" }}
          >
            <ListGroup.Item action variant="light">
              <div className="d-flex align-items-center">
                <Image src={movie.image} style={{ width: "30px" }} />
                <p style={{ paddingLeft: "10px" }}>
                  {movie.title} <span>({movie.year})</span>
                </p>
              </div>
            </ListGroup.Item>
          </Link>
        ))}
      </ListGroup>
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  return (
    <>
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={searchChangeHandler}
      ></input>

      {content}
    </>
  );
}
