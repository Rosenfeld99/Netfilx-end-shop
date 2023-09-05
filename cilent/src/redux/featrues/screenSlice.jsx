import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiGet, apiMethod } from "../../services/services";
import { MDX_PROFILEID, USER_SCREENS_ROUTE } from "../../constant/url";

export const getScreens = createAsyncThunk(
  "screen/getScreens",
  async (bodyData, thunkAPI) => {
    try {
      const { data } = await apiGet(USER_SCREENS_ROUTE + "getScreen");
      // console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(err.response.data.err);
    }
  }
);
export const getScreenById = createAsyncThunk(
  "screen/getScreenById",
  async (id, thunkAPI) => {
    try {
      const { data } = await apiGet(USER_SCREENS_ROUTE + "getScreen/" + id);
      // console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(err.response.data.err);
    }
  }
);
export const addScreens = createAsyncThunk(
  "screen/addScreens",
  async (bodyData, thunkAPI) => {
    try {
      const { data } = await apiMethod(
        USER_SCREENS_ROUTE + "/addScreen",
        "POST",
        bodyData
      );
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(err.response.data.err);
    }
  }
);
export const editScreens = createAsyncThunk(
  "screen/editScreens",
  async (bodyData, thunkAPI) => {
    try {
      const { data } = await apiMethod(
        USER_SCREENS_ROUTE + "editScreen/" + bodyData._id,
        "PUT",
        bodyData
      );
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(err.response.data.err);
    }
  }
);
export const deleteScreens = createAsyncThunk(
  "screen/deleteScreens",
  async (id, thunkAPI) => {
    try {
      const { data } = await apiMethod(
        USER_SCREENS_ROUTE + "deleteScreen/" + id,
        "DELETE",
        {}
      );
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(err.response.data.err);
    }
  }
);
export const toggelFavs_ar = createAsyncThunk(
  "screen/toggelFavs_ar",
  async (bodyData, thunkAPI) => {
    try {
      const data = await apiMethod(
        USER_SCREENS_ROUTE + `screens/${bodyData.screenId}/editFavs`,
        "PATCH",
        bodyData
      );
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(err.response.data.err);
    }
  }
);

const initialState = {
  screens: [],
  singleScreen: {},
  favs_ar: [],
  favs_id: [],
  loading: true,
  status: false,
  error: null,
  renderFirstTime: 0,
  booRender: false,
};

const screenSlice = createSlice({
  name: "screen",
  initialState,
  extraReducers: (builder) => {
    builder
      //! Get Screens
      //* Pending
      .addCase(getScreens.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      //* Fulfilled
      .addCase(getScreens.fulfilled, (state, action) => {
        state.error = null;
        state.screens = action.payload;
        // console.log(state.screens);
        state.loading = false;
      })
      //* Rejected
      .addCase(getScreens.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      //! Get Screen By id
      //* Pending
      .addCase(getScreenById.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      //* Fulfilled
      .addCase(getScreenById.fulfilled, (state, action) => {
        state.error = null;
        state.singleScreen = action.payload;
        console.log(action.payload?.favs_ar);
        state.favs_ar = state.singleScreen.favs_ar
        state.favs_id = state.singleScreen.favs_id
        if (state.singleScreen._id) {
          localStorage.setItem(MDX_PROFILEID, state.singleScreen._id);
          // console.log(state.singleScreen._id);
          if (state.renderFirstTime === 0) {
            state.renderFirstTime++;
            // console.log("WWW");
            state.booRender = true;
          }
        }
        // console.log(state.screens);
        state.loading = false;
      })
      //* Rejected
      .addCase(getScreenById.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      //! Add Screens
      //* Pending
      .addCase(addScreens.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      //* Fulfilled
      .addCase(addScreens.fulfilled, (state, action) => {
        state.error = null;
        state.screens = action.payload;
        state.status = true;
        console.log(state.screens);
        state.loading = false;
      })
      //* Rejected
      .addCase(addScreens.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      //! Edit Screens
      //* Pending
      .addCase(editScreens.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      //* Fulfilled
      .addCase(editScreens.fulfilled, (state, action) => {
        state.error = null;
        state.screens = action.payload;
        state.status = true;
        console.log(state.screens);
        state.loading = false;
      })
      //* Rejected
      .addCase(editScreens.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      //! Delete Screens
      //* Pending
      .addCase(deleteScreens.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      //* Fulfilled
      .addCase(deleteScreens.fulfilled, (state, action) => {
        state.error = null;
        state.screens = action.payload;
        state.status = true;
        console.log(state.screens);
        state.loading = false;
      })
      //* Rejected
      .addCase(deleteScreens.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      //! Toggel favorite   Check --> (if have id the object movie delete else add)
      //* Pending
      .addCase(toggelFavs_ar.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      //* Fulfilled
      .addCase(toggelFavs_ar.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.error = null;
        state.favs_ar = action.payload.screen.favs_ar;
        state.favs_id = action.payload.screen.favs_id;
        state.status = true;
        // console.log(state.favs_ar);
        state.loading = false;
      })
      //* Rejected
      .addCase(toggelFavs_ar.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
  reducers: {
    resetStatus: (state) => {
      state.status = false;
    },
    resetBoolRender: (state) => {
      state.booRender = false;
    },
  },
});

export default screenSlice.reducer;
export const { resetStatus, resetBoolRender } = screenSlice.actions;
