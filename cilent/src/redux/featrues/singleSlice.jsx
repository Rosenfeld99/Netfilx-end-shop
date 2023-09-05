import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY } from "../../constant/url";

export const getSingleMovie = createAsyncThunk(
  "moviesSingle/getSingleMovie",
  async (keys, thunkAPI) => {
    // console.log(keys);
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${keys.type}/${keys.id}?api_key=${API_KEY}&language=he&append_to_response=videos`
      );
    //   console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  moviesSingle: {},
  loading: true,
  error: null,
};

const singleSlice = createSlice({
  name: "moviesSingle",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getSingleMovie.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getSingleMovie.fulfilled, (state, action) => {
        state.moviesSingle = null;
        state.moviesSingle = action.payload;
        state.loading = false;
      })
      .addCase(getSingleMovie.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
  reducers: {
    clearSingle: (state) => {
      state.moviesSingle = null;
    },
  },
});

export default singleSlice.reducer;
export const { clearSingle } = singleSlice.actions;
