import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY } from "../../constant/url";

export const getList_results = createAsyncThunk(
  "list_results/getList_results",
  async (keys, thunkAPI) => {
    try {
      const url = `https://api.themoviedb.org/3/${keys.type}/${keys.sort}?api_key=${API_KEY}&language=he`;
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(err.response.data.err);
    }
  }
);
export const getSingleByRandom = createAsyncThunk(
  "singleStrip/getSingleByRandom",
  async (keys, thunkAPI) => {
    try {
      const url = `https://api.themoviedb.org/3/${keys.type}/${keys.sort}?api_key=${API_KEY}&language=he`;
      // console.log(url);
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(err.response.data.err);
    }
  }
);

const initialState = {
  list_results: [],
  singleStrip: {},
  loading: true,
  error: null,
};

const resultReducer = createSlice({
  name: "list_results",
  initialState,
  extraReducers: (builder) => {
    builder
      // All Movies popular
      .addCase(getList_results.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getList_results.fulfilled, (state, action) => {
        state.list_results = action.payload.results;
        state.loading = false;
      })
      .addCase(getList_results.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      // Single Random Movie popular
      .addCase(getSingleByRandom.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getSingleByRandom.fulfilled, (state, action) => {
        if (action.payload.results) {
          const randomNumber = Math.ceil(Math.random() * 20);
          state.singleStrip = action.payload.results[randomNumber];
          // console.log(state.singleStrip);
        }
        state.loading = false;
      })
      .addCase(getSingleByRandom.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
  reducers: {},
});

export default resultReducer.reducer;
