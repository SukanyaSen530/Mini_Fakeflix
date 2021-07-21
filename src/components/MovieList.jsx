import React from "react";
import Movie from "./Movie";

import "./MovieList.css";

function MovieList({ type, movies, icon }) {
  return (
    <>
      <h2>{type}</h2>
      <div className="container">
        <div className="row">
          {movies &&
            movies.map((movie) => (
              <Movie key={movie.imdbID} {...movie} icon={icon} />
            ))}
        </div>
      </div>
    </>
  );
}

export default MovieList;
