import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiGet, apiMethod, apiPost } from "../../services/services";
import {
  CHANGE_ROLE_ROUTE,
  DELETE_USER_ROUTE,
  LOGIN_ROUTE,
  MDX_PROFILEID,
  REGISTER_ROUTE,
  TOKEN_KEY,
  USER_INFO_ROUTE,
  USER_LIST_ROUTE,
} from "../../constant/url";

export const signUpRequest = createAsyncThunk(
  "auth/signUpRequest",
  async (bodyData, thunkAPI) => {
    try {
      const { data } = await apiPost(REGISTER_ROUTE, bodyData);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.err);
    }
  }
);
export const signInRequest = createAsyncThunk(
  "auth/signInRequest",
  async (bodyData, thunkAPI) => {
    try {
      const { data } = await apiPost(LOGIN_ROUTE, bodyData);
      console.log(data);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.err);
    }
  }
);
export const getUserInfo = createAsyncThunk(
  "auth/getUserInfo",
  async (bodyData, thunkAPI) => {
    try {
      const { data } = await apiGet(USER_INFO_ROUTE);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.err);
    }
  }
);
export const getUserList = createAsyncThunk(
  "auth/getUserList",
  async (bodyData, thunkAPI) => {
    try {
      const { data } = await apiGet(USER_LIST_ROUTE);
      console.log(data);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.err);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "auth/deleteUser",
  async (id, thunkAPI) => {
    try {
      const data = await apiMethod(DELETE_USER_ROUTE + id, "DELETE", {});
      console.log(data);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.err);
    }
  }
);

export const changeRole = createAsyncThunk(
  "auth/changeRole",
  async (obj, thunkAPI) => {
    try {
      const data = await apiMethod(
        `${CHANGE_ROLE_ROUTE}/${obj.id}/${obj.role}`,
        "PATCH",
        {}
      );
      // console.log(data);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.err);
    }
  }
);

//! 1. LOGIN
/* 
1. LOGIN
2. SAVE TOKEN TO LOCAL STORAGE
3. GET USER INFO WITH TOKEN
4. SAVE USER ^ TO REDUX
5. REDIRECT TO HOME PAGE if USER != NULL
*/

//!USER LOGED IN
/*
1. Get Token After Login and Save it in Local Storage
2.(ADD NEW EXTRA REDUCER (API REQUEST)) Get User Info with Token and Save it in Redux Store (user = action.payload)
3. Redirect to Home Page (if user exists) && close modal
*/
const initialState = {
  user: null,
  loading: false,
  error: null,
  status: false,
  role: null,
  usersList: [],
  msg: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      //! Sign Up
      //* Pending
      .addCase(signUpRequest.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      //* Fulfilled
      .addCase(signUpRequest.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        if (action.payload._id) {
          state.status = true;
        }
      })
      //* Rejected
      .addCase(signUpRequest.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      //! Sign In
      //* Pending
      .addCase(signInRequest.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      //* Fulfilled
      .addCase(signInRequest.fulfilled, (state, action) => {
        state.error = null;
        if (action.payload.token) {
          localStorage.setItem(TOKEN_KEY, action.payload.token);
          console.log(action.payload.token);
          state.status = true;
        }
      })
      //* Rejected
      .addCase(signInRequest.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        console.log(action.payload);
      })
      //! Get User Info
      //* Pending
      .addCase(getUserInfo.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      //* Fulfilled
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.error = null;
        state.user = action.payload.user;
        // console.log(action.payload.user);
        // console.log(action.payload.user.role);
        state.role = action.payload.user.role;
        // console.log(action.payload);
        state.loading = false;
      })
      //* Rejected
      .addCase(getUserInfo.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        state.status = true;
        console.log(action.payload);
      })
      //! Get User List (Admin)
      //* Pending
      .addCase(getUserList.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      //* Fulfilled
      .addCase(getUserList.fulfilled, (state, action) => {
        state.error = null;
        state.usersList = action.payload;
        console.log(action.payload);
        state.loading = false;
      })
      //* Rejected
      .addCase(getUserList.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        state.status = true;
        console.log(action.payload);
      })
      //! Delete User (Admin)
      //* Pending
      .addCase(deleteUser.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      //* Fulfilled
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.error = null;
        if (action.payload.deletedCount === 1) {
          state.msg = action.payload;
          console.log(state.msg);
        }
        state.loading = false;
      })
      //* Rejected
      .addCase(deleteUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        state.status = true;
        console.log(action.payload);
      })
      //! Change role (Admin)
      //* Pending
      .addCase(changeRole.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      //* Fulfilled
      .addCase(changeRole.fulfilled, (state, action) => {
        state.error = null;
        if (action.payload.modifiedCount === 1) {
          state.msg = action.payload;
          console.log(state.msg);
        }
        state.loading = false;
      })
      //* Rejected
      .addCase(changeRole.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        state.status = true;
        console.log(state.error);
      });
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearMsg: (state) => {
      state.msg = null;
    },
    resetStatus: (state) => {
      state.status = false;
    },
    logout: (state) => {
      state.user = null;
      state.status = false;
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(MDX_PROFILEID);
    },
  },
});

export const { clearError, resetStatus, logout, clearMsg } = authSlice.actions;
export default authSlice.reducer;
