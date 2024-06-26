import React, { useReducer, useEffect } from "react";
import axios from "axios";
import "./MoviePage.css";

import MovieList from "../components/MovieList";
import SearchBox from "../components/SearchBox";

export const MovieContext = React.createContext(null);

const saveToLocalStoarge = (movies) => {
  localStorage.setItem("react-app-fav-movies", JSON.stringify(movies));
};

const initialState = {
  movie: "Toy Story",
  movieData: [],
  favmovies: [],
  loading: false,
  err: "",
};

const reducer = (state, action) => {
  let movies;
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, err: action.error };

    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        movieData: action.payload,
        err: action.error,
      };

    case "FETCH_ERROR":
      console.log(action.err);
      return { ...state, loading: false, err: action.error };

    case "SET_MOVIE":
      return {
        ...state,
        movie: action.payload,
      };

    case "SET_FAV":
      return {
        ...state,
        favmovies: [...action.payload],
      };

    case "ADD_FAV":
      if (state.favmovies.filter((m) => m.imdbID === action.id).length > 0) {
        return state;
      } else {
        movies = [...state.favmovies, action.payload];
        saveToLocalStoarge(movies);
        return {
          ...state,
          favmovies: movies,
        };
      }

    case "REMOVE_FAV":
      movies = state.favmovies.filter(
        (movie) => movie.imdbID !== action.payload
      );
      saveToLocalStoarge(movies);
      return {
        ...state,
        favmovies: movies,
      };

    default:
      return state;
  }
};

export default function MoviePage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const interval = setTimeout(() => {
      dispatch({ type: "FETCH_REQUEST", error: "" });
      axios
        .get(`https://www.omdbapi.com/?s=${state.movie}&apikey=53acb18d`)
        .then((response) => {
          if (response.data.Response !== "False") {
            dispatch({
              type: "FETCH_SUCCESS",
              payload: response.data.Search,
              error: "",
            });
          } else {
            dispatch({
              type: "FETCH_ERROR",
              error: "💀 MOVIE NOT FOUND! 💀",
            });
          }
          //   console.log(response.data.Search, process.env.REACT_APP_API_KEY);
        })
        .catch((err) => {
          console.log(err);
          dispatch({ type: "FETCH_ERROR", error: "SOMETHING WENT WRONG :(" });
        });
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [state.movie]);

  useEffect(() => {
    const newMovies = JSON.parse(localStorage.getItem("react-app-fav-movies"));
    // const movies = newMovies[0];
    if (newMovies !== null && newMovies.length > 0) {
      dispatch({ type: "SET_FAV", payload: newMovies });
      console.log(newMovies.length);
    }
  }, []);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      <div className="fluid_container">
        <section>
          <h1>Mini FakeFlix</h1>
          <SearchBox />
        </section>
        {state.loading && <h1 className="messages">Loading &#9685;</h1>}
        {state.err && <h1 className="messages">{state.err}</h1>}
        {state.movieData.length !== 0 && !state.err && !state.loading && (
          <MovieList
            type="Search Results"
            movies={state.movieData}
            icon={"fa-heart"}
          />
        )}
        {state.favmovies.length !== 0 && state.favmovies !== null && (
          <MovieList
            type="Favourites"
            movies={state.favmovies}
            icon={"fas fa-times-circle"}
          />
        )}
      </div>
    </MovieContext.Provider>
  );
}

/* {state.movieData.length === 0 && state.favmovies.length === 0 && (
          <h1>Search For Movies</h1>
        )} */
