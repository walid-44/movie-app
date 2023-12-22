import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const detailMovies = createAsyncThunk(
  "detailMovie, detailMovies",
  async (id) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=de966652aafa6bfb2a5b2935714d0eda&language=en-US`
    );
    const data = await res.json();
    return data;
  }
);
const detailMovie = createSlice({
  initialState: [],
  name: "detailMovie",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(detailMovies.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const {} = detailMovie.actions;
export default detailMovie.reducer;
