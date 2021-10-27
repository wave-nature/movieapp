import React, { useRef } from "react";
import classes from "./Search.module.css";
import { useDispatch } from "react-redux";
import { getMovies } from "../store/store";

const serachUrl = `https://api.themoviedb.org/3/search/movie?api_key=a7077f0663471f41d782bd9cbc42a6db&language=en-US&page=1&include_adult=false&query="`;

const Search = () => {
  const serachInputRef = useRef();
  const dispatch = useDispatch();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const searchedMovieUrl = `${serachUrl}${serachInputRef.current.value}`;
    dispatch(getMovies(searchedMovieUrl));
  };

  return (
    <form className={classes.search} onSubmit={formSubmitHandler}>
      <input
        ref={serachInputRef}
        type="search"
        placeholder="search for movies"
      ></input>
      <button className={`btn ${classes.search__btn}`}>Search</button>
    </form>
  );
};

export default Search;
