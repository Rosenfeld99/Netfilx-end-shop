import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeRole,
  clearError,
  clearMsg,
  deleteUser,
  getUserInfo,
  getUserList,
  resetStatus,
  signInRequest,
  signUpRequest,
} from "../redux/featrues/authSlice";
import { useNavigate } from "react-router-dom";
import { TOKEN_KEY } from "../constant/url";
import useUser from "./useUser";

const useAuth = () => {
  const { loading, status, error, user, usersList, msg } = useSelector(
    (store) => store.authReducer
  );
  const dispatch = useDispatch();

  const { logoutUser } = useUser();

  const signUp = (_bodyData) => {
    dispatch(signUpRequest(_bodyData));
  };
  const signIn = (_bodyData) => {
    dispatch(signInRequest(_bodyData));
  };
  const getUser = () => {
    dispatch(getUserInfo());
  };
  const resetStatusHandler = () => {
    dispatch(resetStatus());
  };
  const clearErrorHandler = () => {
    dispatch(clearError());
  };
  const clearMsgHandler = () => {
    dispatch(clearMsg());
  };
  const getUsersListAdmin = () => {
    dispatch(getUserList());
  };
  const changeRoleAdmin = (obj) => {
    dispatch(changeRole(obj));
  };

  useEffect(() => {
    if (localStorage.getItem(TOKEN_KEY)) {
      getUser();
    } else {
      logoutUser();
    }
  }, [status]);

  return {
    signUp,
    signIn,
    loading,
    error,
    status,
    resetStatusHandler,
    user,
    getUser,
    clearErrorHandler,
    getUsersListAdmin,
    usersList,
    msg,
    changeRoleAdmin,
    clearMsgHandler,
  };
};

export default useAuth;
