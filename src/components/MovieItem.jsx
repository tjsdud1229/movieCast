import React from "react";
import Styles from "./MovieItem.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const MovieItem = (props) => {
  const URI = "https://image.tmdb.org/t/p/w500/";
  const image = URI + props.post;
  const dispatch = useDispatch();
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const getCasts = () => {
    dispatch({ type: "SEARCH_MOVIE", payload: props.title.toLowerCase() });
    return fetch(
      `https://api.themoviedb.org/3/movie/${props.id}/credits?api_key=2824910ce318ceabd50d2661187c1b9e`,
      requestOptions
    )
      .then((response) => response.json())
      .then((casts) => {
        dispatch({ type: "ADD_CAST", payload: casts });
      })
      .catch((error) => console.log("error fetching", error));
  };

  return (
    <div className={Styles.movieItem}>
      <Link to={`/movie/${props.id}/casts`} key={props.i}>
        <img className={Styles.posters} src={image} alt="" onClick={getCasts} />
      </Link>
    </div>
  );
};

export default MovieItem;

// https://image.tmdb.org/t/p/w500/
