import React, { useEffect } from "react";
import useResults from "../../hooks/useResults";
import GridList from "../components/grid/GridList";
import Strip from "../components/strip/Strip";


const MoviesPage = () => {
  const keys = {
    type: "movie",
    sort: "top_rated",
  };

  const {error,loading,getResults,list_results} = useResults()

  useEffect(()=>{
    getResults(keys)
  },[])

  // console.log(list_results);
  return (
    <div>
      <Strip keys={keys} />
      <GridList
        titleList={"סרטים"}
        renderMovies={list_results}
        loading={loading}
        type={"movie"}
      />
    </div>
  );
};

export default MoviesPage;