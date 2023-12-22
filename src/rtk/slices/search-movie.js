import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const searchMovies = createAsyncThunk(
  "searchMovie, searchMovies",
  async (query) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query= ${query}&include_adult=true&language=en-US&page=1&api_key=de966652aafa6bfb2a5b2935714d0eda`
    );
    const data = await res.json();
    console.log(data);
    return data.results;
  }
  );


const searchMovie = createSlice({
  name: 'search',
  initialState: {
    query: '',
    results: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    updateQuery: (state, action) => {
      state.query = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.results = action.payload;
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
})
export const {updateQuery} = searchMovie.actions;
export default searchMovie.reducer;
