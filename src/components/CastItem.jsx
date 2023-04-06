import React from "react";
import Styles from "./MovieItem.module.css";

const CastItem = (props) => {
  // size can be adjusted by updating 'w500' value
  const URI = "https://image.tmdb.org/t/p/w200/";
  const castURI = "https://www.themoviedb.org/person/";
  const images = props.post
    ? URI + props.post
    : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png";

  const castDetail = () => {
    window.location.href = `${castURI}${props.id}-${props.name}`;
  };

  return (
    <div className={Styles.card} onClick={castDetail}>
      <div>
        <img
          className={Styles.image}
          src={images}
          alt=""
          onClick={castDetail}
        />
      </div>
      <div>
        <h2 className={Styles.name}>{props.name}</h2>
        <h2 className={Styles.character}>{props.character}</h2>
      </div>
    </div>
  );
};

export default CastItem;

// https://image.tmdb.org/t/p/w500/
