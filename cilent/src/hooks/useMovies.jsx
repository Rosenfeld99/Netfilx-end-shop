import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/featrues/moviesSlice";

const useMovies = () => {
  const { movies, error, loading } = useSelector(
    (store) => store.moviesReducer
  );

  const dispatch = useDispatch();

  const getMovies = () => {
    dispatch(fetchMovies());
  };
  return { movies, error, loading, getMovies };
};

export default useMovies;
