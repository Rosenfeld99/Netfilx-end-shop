import React, { useEffect } from "react";
import Strip from "../strip/Strip";
import GridList from "../grid/GridList";
import useResults from "../../../hooks/useResults";

const TvContent = () => {
  const keys = {
    type: "tv",
    sort: "top_rated",
  };

  const { error, loading, getResults, list_results } = useResults();

  useEffect(() => {
    getResults(keys);
  }, []);

  // console.log(list_results);
  return (
    <div>
      <Strip keys={keys} />
      <div>
        <GridList
          titleList={"תוכניות טלוויזיה"}
          renderMovies={list_results}
          loading={loading}
          type={"tv"}
        />
      </div>
    </div>
  );
};

export default TvContent;
