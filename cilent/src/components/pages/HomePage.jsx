import React from "react";
import AuthUser from "../auth/user/AuthUser";
import useSearch from "../../hooks/useSearch";
import SaerchMovie from "./SaerchMovie";
import HomeContent from "../components/home/HomeContent";

const HomePage = () => {

  const { flag } = useSearch();

  return (
    <>
      <AuthUser />
      {flag ? (
        <div>
          <SaerchMovie/>
        </div>
      ) : (
        <HomeContent/>
      )}
    </>
  );
};

export default HomePage;
