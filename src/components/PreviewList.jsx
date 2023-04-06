import React from "react";
import Styles from "./PreviewList.module.css";
import { useSelector } from "react-redux";

function PreviewList() {
  const movies = useSelector((state) => state.movies.filteredList);
  const URI = "https://image.tmdb.org/t/p/original/";
  const images = URI + movies[0]?.backdrop_path;

  return (
    <div className={Styles.previewContainer}>
      <div className={Styles.previewList}>
        <img className={Styles.previewImg} src={images} alt="" />
        <div className={Styles.previewDetail}>
          <h1 className={Styles.previewTitle}>{movies[0]?.title}</h1>
          <p>{movies[0]?.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default PreviewList;
