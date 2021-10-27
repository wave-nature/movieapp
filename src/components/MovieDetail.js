import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./MovieDetail.module.css";
import { getMovies } from "../store/store";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const MovieDetail = () => {
  const params = useParams();
  const isLoading = useSelector((state) => state.request.isLoading);
  const data = useSelector((state) => state.request.data);
  const error = useSelector((state) => state.request.error);

  const dispatch = useDispatch();

  const { movieId } = params;

  useEffect(() => {
    dispatch(
      getMovies(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=a7077f0663471f41d782bd9cbc42a6db&language=en-US`
      )
    );
  }, [dispatch, movieId]);

  const {
    poster_path,
    title,
    status,
    spoken_languages,
    overview,
    production_companies,
    runtime,
    release_date,
    revenue,
    vote_average,
  } = data;

  if (error) {
    return <p>Something went wrong. Try again!</p>;
  }

  return (
    <section className={classes.movieDetail}>
      {isLoading && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <figure>
        <img src={`${IMG_PATH}${poster_path}`} alt="movie 1"></img>
        <h2>{title}</h2>
        <figcaption>
          <div>{release_date}</div>
          <div>{vote_average} IMDB</div>
        </figcaption>
      </figure>

      <div className={classes.aboutMovie}>
        <div className={classes.movieStatus}>
          <div className={classes.movieStatus__released}>{status}</div>
          <div className={classes.movieStatus__revenue}>
            ${Math.round(revenue / 1000000)}M
          </div>
          <div className={classes.movieStatus__runtime}>{runtime} minutes</div>
        </div>
        <div className={classes.productionHouse}>
          {production_companies?.map((company) => (
            <img
              key={company.id}
              src={`${IMG_PATH}${company.logo_path}`}
              alt="img 1"
            ></img>
          ))}
        </div>
        <div className={classes.languageSpoken}>
          {spoken_languages?.map((lang) => (
            <span key={lang.english_name}>{lang.english_name}</span>
          ))}
        </div>
        <div className={classes.description}>
          About
          <p>{overview}</p>
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
