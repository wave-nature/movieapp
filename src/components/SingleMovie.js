import React from "react";
import classes from "./SingleMovie.module.css";
import Card from "../UI/Card";
import { useHistory } from "react-router-dom";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const SingleMovie = (props) => {
  const history = useHistory();

  const onClickToMovieDetailPageHandler = () => {
    history.push(`/movies-detail/${props.id}`);
  };

  return (
    <Card>
      <div className={classes.movie__card}>
        <div className={classes[`movie__card-img`]}>
          <img src={`${IMG_PATH}${props.posterPath}`} alt="Movie 1"></img>
        </div>
        <div className={classes.movie__name}>{props.title}</div>
        <div className={classes.movie__details}>
          <div className={classes.movie__details_releasedate}>
            {props.releaseDate}
          </div>
          <div className={classes.movie__details_ratings}>
            {props.voteAverage} IMDB
          </div>
        </div>
        <button
          onClick={onClickToMovieDetailPageHandler}
          className={`btn ${classes.movie__details_btn}`}
        >
          Details
        </button>
      </div>
    </Card>
  );
};

export default SingleMovie;
