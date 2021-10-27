import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SingleMovie from "./SingleMovie";
import classes from "./Movies.module.css";
import { getMovies } from "../store/store";
import LoadingSpinner from "../UI/LoadingSpinner";

const Movies = () => {
  const [page, setPage] = useState(1);

  const dipatch = useDispatch();
  const isLoading = useSelector((state) => state.request.isLoading);
  const data = useSelector((state) => state.request.data);
  const error = useSelector((state) => state.request.error);

  useEffect(() => {
    dipatch(
      getMovies(
        `https://api.themoviedb.org/3/movie/popular?api_key=a7077f0663471f41d782bd9cbc42a6db&language=en-US&page=${page}`
      )
    );
  }, [dipatch, page]);

  const previousMovieHandler = () => {
    if (page === 1) return;
    if (page >= 1) setPage((prevState) => prevState - 1);
  };
  const nextMovieHandler = () => {
    if (page <= 500) setPage((prevState) => prevState + 1);
    else setPage(500);
  };

  const allMovies = data?.results?.map((movie) => (
    <SingleMovie
      id={movie.id}
      key={movie.id}
      title={movie.title}
      posterPath={movie.poster_path}
      voteAverage={movie.vote_average}
      releaseDate={movie.release_date}
    />
  ));

  // const sortMovieHandler = () => {};

  if (error) {
    return <p>Something went wrong try again</p>;
  }

  return (
    <main className={classes.movies}>
      {isLoading && <LoadingSpinner />}
      {/* <button
        onClick={sortMovieHandler}
        className={`btn ${classes.movies__sort}`}
      >
        High Rated
      </button> */}
      <section>{allMovies}</section>
      <div className={classes.loadMoreMovies}>
        <button onClick={previousMovieHandler} className={`btn`}>
          Previous
        </button>
        <button onClick={nextMovieHandler} className={`btn`}>
          Next
        </button>
      </div>
    </main>
  );
};

export default Movies;
