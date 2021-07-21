import React, { useContext } from "react";
import "./Movie.css";

import { MovieContext } from "../Layout/MoviePage";

export default function Movie({ imdbID, Poster, Title, Year, icon }) {
  const { dispatch } = useContext(MovieContext);

  const handleClick = (e) => {
    if (icon === "fa-heart")
      dispatch({
        type: "ADD_FAV",
        payload: { imdbID, Poster, Title, Year },
      });
    else {
      dispatch({ type: "REMOVE_FAV", payload: imdbID });
    }
  };

  return (
    <article className="Card">
      <div className="image_container">
        <img src={Poster} alt={Title} className="Image_Card"></img>
        <div className="overlay blur" onClick={handleClick}>
          <button>
            <i className={`fas ${icon} ${icon === "fa-heart" && "fill"}`}></i>
            {icon === "fa-heart"
              ? "Add To Favourites"
              : "Remove From Favourite"}
          </button>
        </div>
      </div>
      <p className="title">{Title}</p>
      <p>{Year}</p>
    </article>
  );
}
