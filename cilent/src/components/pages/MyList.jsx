import React, { useEffect } from "react";
import GridList from "../components/grid/GridList";
import AuthUser from "../auth/user/AuthUser";
import useScreen from "../../hooks/useScreen";
import { MDX_PROFILEID } from "../../constant/url";

const MyList = () => {
  const { error, loading, singleScreen, getSingleScreen ,favs_ar} = useScreen();

  useEffect(() => {
    getSingleScreen(localStorage[MDX_PROFILEID]);
    console.log(favs_ar);
  }, [localStorage[MDX_PROFILEID]]);


  return (
    <div className=" min-h-screen ">
      <AuthUser />
      {/*  */}
      <GridList
        titleList={"הרשימה שלי"}
        renderMovies={favs_ar}
        loading={loading}
        type={"movie"}
      />
    </div>
  );
};

export default MyList;
