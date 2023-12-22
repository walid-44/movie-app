import { createSlice } from "@reduxjs/toolkit";
const initialState = localStorage.getItem("savedMovies")
  ? JSON.parse(localStorage.getItem("savedMovies"))
  : [];
const movieSlices = createSlice({
  initialState,
  name: "movieSlices",
  reducers: {
    addMovie: (state, action) => {
      const movieArry = state.find((movie) => movie.id === action.payload.id);
      if (!movieArry) {
        state.unshift(action.payload);
        localStorage.setItem("savedMovies", JSON.stringify(state));
      } else {
        const states = state.filter((movie) => movie.id !== action.payload.id);
        localStorage.setItem("savedMovies", JSON.stringify(states));
        return states;
      }
      // state.push(action.payload)
    },
    deleteMovie: (state, action) => {
      const newMovie = state.filter((movie) => movie.id !== action.payload.id);
      localStorage.setItem("savedMovies", JSON.stringify(newMovie));
      return newMovie;
    },
    clear: (state, action) => {
      localStorage.removeItem("savedMovies" );
      return [];
    },
  },
});
export const { addMovie, deleteMovie, clear } = movieSlices.actions;
export default movieSlices.reducer;
