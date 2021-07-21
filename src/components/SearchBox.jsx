import React, { useContext } from "react";
import "./SearchBox.css";
import { MovieContext } from "../Layout/MoviePage";

const SearchBox = () => {
  const { state, dispatch } = useContext(MovieContext);

  const handleSearch = (e) => {
    dispatch({ type: "SET_MOVIE", payload: e.target.value });
  };

  return (
    <div className="form_group">
      <input
        className="form_control"
        onChange={handleSearch}
        placeholder="Type to search..."
        defaultValue={state.movie}
      ></input>
    </div>
  );
};

export default SearchBox;
