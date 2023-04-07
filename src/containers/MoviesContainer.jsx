import React from "react";
import MovieList from "../components/MovieList.jsx";
import { useDispatch } from "react-redux";
import Styles from "../components/PreviewList.module.css";

function MoviesContainer() {
  const dispatch = useDispatch();
  const handleTextChange = (e) =>
    dispatch({ type: "SEARCH_MOVIE", payload: e.target.value.toLowerCase() });
  return (
    <div>
      <div className={Styles.searchContainer}>
        <input
          onChange={(e) => handleTextChange(e)}
          className={Styles.search}
          type="text"
          placeHolder="   Search Movie"
        />
      </div>
      <MovieList />
    </div>
  );
}

export default MoviesContainer;
