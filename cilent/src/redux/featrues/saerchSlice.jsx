import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY } from "../../constant/url";

export const getMoviesSearch = createAsyncThunk(
  "movieSearch/getMoviesSearch",
  async (query, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&language=he&append_to_response=videos`
      );
      //   console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);

const initialState = {
  movieSearch: [],
  loading: true,
  error: null,
  flag: false,
};

const searchSlice = createSlice({
  name: "movieSearch",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesSearch.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getMoviesSearch.fulfilled, (state, action) => {
        // state.movieSearch = null;
        state.movieSearch = action.payload.results;
        // if (action.payload.results) {
        state.flag = true;
        // }
        console.log(state.movieSearch);
        state.loading = false;
      })
      .addCase(getMoviesSearch.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
  reducers: {
    resetFlag: (state) => {
      state.flag = false;
    },
  },
});

export default searchSlice.reducer;
export const { resetFlag } = searchSlice.actions;
