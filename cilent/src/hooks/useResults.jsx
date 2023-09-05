import { useDispatch, useSelector } from "react-redux";
import {
  getList_results,
  getSingleByRandom,
} from "../redux/featrues/resultSlice";

const useResults = () => {
  const { list_results, error, loading, singleStrip } = useSelector(
    (store) => store.resultReducer
  );

  const dispatch = useDispatch();

  const getResults = (keys) => {
    dispatch(getList_results(keys));
  };
  const getSingleRandom = (keys) => {
    dispatch(getSingleByRandom(keys));
  };
  return {
    list_results,
    loading,
    error,
    singleStrip,
    getResults,
    getSingleRandom,
  };
};

export default useResults;
