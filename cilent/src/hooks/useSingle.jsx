import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/featrues/authSlice";
import { clearSingle, getSingleMovie } from "../redux/featrues/singleSlice";

const useSingle = () => {
  const { error, loading, moviesSingle } = useSelector(
    (store) => store.singleSlice
  );
  const dispatch = useDispatch();

  const getSingle = (keys) => {
    dispatch(getSingleMovie(keys));
  };
  const clearSingleMovie = () => {
    dispatch(clearSingle());
  };

  return {
    clearSingleMovie,
    getSingle,
    error,
    loading,
    moviesSingle,
  };
};

export default useSingle;
