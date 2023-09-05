import { useEffect, useRef, useState } from "react";
import useSingle from "../../../hooks/useSingle";
import useScreen from "../../../hooks/useScreen";
import BtnsCtrl from "./BtnsCtrl";
import ContentMovie from "./ContentMovie";
import Modal from "../../../../utils/modals/Modal";
import { MDX_PROFILEID } from "../../../constant/url";

export default function ModalDetailes({ setOpen, open, id, moviesSingle,asFavs,isAsFavs,setAsFavs }) {
  const { favs_ar, favs_id, toggelFavoriet, singleScreen, getSingleScreen } =
    useScreen();
  console.log(moviesSingle);
  const cancelButtonRef = useRef(null);



  const handelrFavoriet = () => {
    const bodyData = {
      fav: moviesSingle,
      screenId: localStorage[MDX_PROFILEID],
    };
    setAsFavs(!asFavs);
    isAsFavs()
    console.log(bodyData);
    toggelFavoriet(bodyData);
  };

  return (
    <>
      {moviesSingle?.id ? (
        <Modal open={open} setOpen={setOpen}>
          <BtnsCtrl
            getSingleScreen={getSingleScreen}
            handelrFavoriet={handelrFavoriet}
            setOpen={setOpen}
            moviesSingle={moviesSingle}
            asFavs={asFavs}
            isAsFavs={isAsFavs}
            cancelButtonRef={cancelButtonRef}
            setAsFavs={setAsFavs}
          />
          <ContentMovie moviesSingle={moviesSingle} />
        </Modal>
      ) : null}
    </>
  );
}
