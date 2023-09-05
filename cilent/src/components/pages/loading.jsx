import React, { useEffect } from "react";
import useMovies from "../../hooks/useMovies";
import useAuth from "../../hooks/useAuth";
import CaruselList from "../components/carusel/CaruselList";
import Strip from "../components/strip/Strip";
import Loading from "../components/animation/loading/Loading";

const HomeContent = () => {
  const { movies, error, loading, getMovies } = useMovies();

  const { status } = useAuth();

  useEffect(() => {
    getMovies();
  }, [status]);

  console.log(movies);
  return (
    <div className=" overflow-hidden pb-20">
      <div>
        <Strip />
        {movies?.map((item, i) => (
          <CaruselList key={i} titleList={item.title} movies={item.list} />
        ))}
      </div>
    </div>
  );
};

export default HomeContent;
