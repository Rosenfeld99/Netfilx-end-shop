import { useDispatch, useSelector } from "react-redux";
import {
  addScreens,
  deleteScreens,
  editScreens,
  getScreenById,
  getScreens,
  resetBoolRender,
  resetStatus,
  toggelFavs_ar,
} from "../redux/featrues/screenSlice";

const useScreen = () => {
  const { error, loading, screens, status,singleScreen,favs_ar,favs_id,booRender  } = useSelector(
    (store) => store.screensReducer
  );

  const dispatch = useDispatch();
  const getUserScreens = () => {
    dispatch(getScreens());
  };
  const getSingleScreen = (id) => {
    dispatch(getScreenById(id));
  };
  const addUserScreens = (bodyData) => {
    dispatch(addScreens(bodyData));
  };
  const editUserScreens = (bodyData) => {
    dispatch(editScreens(bodyData));
  };
  const deleteUserScreens = (id) => {
    dispatch(deleteScreens(id));
  };
  const resetStatusHandler = () => {
    dispatch(resetStatus());
  };
  const resetBoolRenderHandler = () => {
    dispatch(resetBoolRender());
  };
  const toggelFavoriet = (bodyData) => {
    dispatch(toggelFavs_ar(bodyData));
  };
  return {
    getUserScreens,
    getSingleScreen,
    addUserScreens,
    editUserScreens,
    deleteUserScreens,
    resetStatusHandler,
    toggelFavoriet,
    resetBoolRenderHandler,
    screens,
    singleScreen,
    error,
    loading,
    status,
    favs_ar,
    booRender,
    favs_ar,
    favs_id,
  };
};

export default useScreen;
