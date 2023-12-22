import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk(
  "movieList/fetchMovies",
  async () => {
    const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=de966652aafa6bfb2a5b2935714d0eda&language=en-US");
    const data = await res.json();
    return data.results;
  }
);

const movieList = createSlice({
  initialState: [],
  name: "movieList",

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = movieList.actions;
export default movieList.reducer;
