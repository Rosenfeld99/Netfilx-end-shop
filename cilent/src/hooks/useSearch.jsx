import { useDispatch, useSelector } from "react-redux";
import { getMoviesSearch, resetFlag } from "../redux/featrues/saerchSlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const useSearch = () => {
  const { error, loading, movieSearch, flag } = useSelector(
    (store) => store.searchReducer
  );

  const { query } = useParams(null);

  useEffect(() => {
    if (query) {
      getSaerch();
    }
  }, [flag]);

  const dispatch = useDispatch();

  const getSaerch = () => {
    console.log(query);
    if (query != undefined) {
      dispatch(getMoviesSearch(query));
      console.log(movieSearch);
    }
  };
  const resetFlaghandler = () => {
    dispatch(resetFlag());
  };
  return { error, loading, getSaerch, movieSearch, flag, resetFlaghandler };
};

export default useSearch;
