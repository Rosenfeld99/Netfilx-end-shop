import React, { useEffect } from "react";
import GridList from "../components/grid/GridList";
import useSearch from "../../hooks/useSearch";
import SkeletonGrid from "../components/animation/skeletons/SkeletonGrid";
import NotFoundMovie from "../components/search/NotFoundMovie";

const SaerchMovie = () => {
  const { error, getSaerch, loading, movieSearch, flag, resetFlaghandler } =
    useSearch();

  useEffect(() => {
    if (flag) {
      console.log(movieSearch);
    }
  }, [flag]);

  return (
    <>
      {loading ? (
        <SkeletonGrid num={movieSearch} />
      ) : (
        <div className=" min-h-screen">
          {movieSearch.length > 0 ? (
            <div>
              <GridList
                renderMovies={movieSearch}
                titleList={"חיפוש סרטים, סדרות"}
              />
            </div>
          ) : (
            <NotFoundMovie resetFlaghandler={resetFlaghandler} />
          )}
        </div>
      )}
    </>
  );
};

export default SaerchMovie;
