import React, { useEffect } from "react";
import { apiGet } from "../../../services/services";
import { CHECK_TOKEN } from "../../../constant/url";
import useUser from "../../../hooks/useUser";
import { useNavigate } from "react-router-dom";

const AuthUser = () => {
  const { logoutUser } = useUser();
  const nav = useNavigate();
  const checkToken = async () => {
    try {
      const { data } = await apiGet(CHECK_TOKEN);
      // console.log(data);
    } catch (err) {
      if (err) {
        logoutUser();
        nav("/login");
      }
    }
  };
console.log("render");
  useEffect(() => {
    checkToken();
  }, []);
  return <></>;
};

export default AuthUser;
