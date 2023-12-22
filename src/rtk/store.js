import { configureStore } from "@reduxjs/toolkit";
import moviesList from "./slices/movies-list";
import detailMovie from "./slices/detail-movie";
import searchMovie from "./slices/search-movie";
import movieSlices from "./slices/movie-slices";

export const store = configureStore({
  reducer:{
    movies:moviesList,
    movieDetail:detailMovie,
    search: searchMovie,
    movieSlice:movieSlices,
  }
})