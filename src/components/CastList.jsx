import React from "react";
import { useSelector } from "react-redux";
import Styles from "./MovieList.module.css";
import CastItem from "./CastItem.jsx";

function CastList() {
  const casts = useSelector((state) => state.movies.castList);
  const castArr = [];
  for (let i = 0; i < casts.length; i++) {
    castArr.push(
      <CastItem
        id={casts[i].id}
        backdrop={casts[i].backdrop_path}
        post={casts[i].profile_path}
        title={casts[i].title}
        key={i}
        name={casts[i].name}
        character={casts[i].character}
      />
    );
  }

  return (
    <>
      <div>
        <h3 className={Styles.popularCast}>Cast Lists</h3>
      </div>
      <div className={Styles.movieList}>{castArr}</div>
    </>
  );
}

export default CastList;
