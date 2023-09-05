import React, { useEffect } from "react";
import { apiGet } from "../../../services/services";
import { CHECK_ADMIN } from "../../../constant/url";
import { useNavigate } from "react-router-dom";

const AuthAdmin = () => {
  const nav = useNavigate();
  const checkAdmin = async () => {
    try {
      const { data } = await apiGet(CHECK_ADMIN);
      // console.log(data);
    } catch (err) {
      if (err) {
        nav("/admin/login");
      }
    }
  };

  useEffect(() => {
    checkAdmin();
  }, []);
  return <></>;
};

export default AuthAdmin;
