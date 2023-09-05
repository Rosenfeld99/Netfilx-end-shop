import React, { useEffect } from "react";
import { apiGet } from "../../../services/services";
import { CHECK_MANAGER } from "../../../constant/url";
import useUser from "../../../hooks/useUser";
import { useNavigate } from "react-router-dom";

const AuthManager = () => {
  const { logoutUser } = useUser();
  const nav = useNavigate();
  const checkManager = async () => {
    try {
      const { data } = await apiGet(CHECK_MANAGER);
      // console.log(data);
    } catch (err) {
      if (err) {
        nav('/manager/login');
      }
    }
  };

  useEffect(() => {
    checkManager();
  }, []);
  return <></>;
};

export default AuthManager;
