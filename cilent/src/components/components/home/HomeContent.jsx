import React, { useEffect } from "react";
import useMovies from "../../../hooks/useMovies";
import useAuth from "../../../hooks/useAuth";
import CaruselList from "../carusel/CaruselList";
import Strip from "../strip/Strip";
import SkeletonCarusel from "../animation/skeletons/SkeletonCarusel";
import useScreen from "../../../hooks/useScreen";
import { MDX_PROFILEID } from "../../../constant/url";

const HomeContent = () => {
  const { movies, error, loading, getMovies } = useMovies();
  const { status } = useAuth();
  const { favs_ar, getSingleScreen, singleScreen } = useScreen();

  useEffect(() => {
    getMovies();
    getSingleScreen(localStorage[MDX_PROFILEID]);
  }, [status, localStorage[MDX_PROFILEID]]);

  const keys = {
    type: "movie",
    sort: "popular",
  };
  // console.log(movies);
  // console.log(favs_ar);
  return (
    <>
      {!loading ? (
        <div className=" overflow-hidden pb-20">
          <div>
            <Strip keys={keys} />
            <div>
              {favs_ar?.length > 0 ? (
                <CaruselList
                  movies={favs_ar}
                  titleList={"הרשימה שלי"}
                  key={"0"}
                  type={"movie"}
                  singleScreen={singleScreen}
                />
              ) : null}
            </div>
            {movies?.map((item, i) => (
              <CaruselList
                type={"movie"}
                key={i}
                titleList={item.title}
                movies={item.list}
                singleScreen={singleScreen}
              />
            ))}
          </div>
        </div>
      ) : (
        <SkeletonCarusel loading={loading} />
      )}
    </>
  );
};

export default HomeContent;
