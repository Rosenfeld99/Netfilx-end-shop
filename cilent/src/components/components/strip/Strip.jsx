import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import ModalDetailes from "../MovieDetailes/ModalDetailes";
import useResults from "../../../hooks/useResults";

const Strip = ({keys}) => {
  const {
    error,
    loading,
    getSingleRandom,
    singleStrip,
  } = useResults();

  const nav = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getSingleRandom(keys);
  }, []);

  return (
    <div dir="rtl">
      <div className="w-[100%] h-[40vw] min-h-[400px] absolute top-0 to-transparent bg-gradient-to-t via-[#00000087] from-[#141414] z-10"></div>
      <div className="carousel">
        <div className="carousel-item w-[100%]">
          <img
            src={
              singleStrip?.backdrop_path &&
              `https://image.tmdb.org/t/p/original/${singleStrip?.backdrop_path}`
            }
            className="object-cover w-[100%] h-[40vw] min-h-[400px]"
          />
        </div>
      </div>
      <div className=" absolute top-72 right-14 z-40">
        <button
          onClick={() => {
            nav(`/watch/${singleStrip.id}`);
          }}
          className="btn btn-active btn-sm text-lg bg-white text-black rounded"
        >
          {" "}
          <FaPlay className="ml-2" /> הפעל
        </button>{" "}
        <button
          onClick={() => setOpen(true)}
          className="btn btn-active mr-4 btn-sm text-lg text-white bg-[#666] rounded"
        >
          {" "}
          <BiInfoCircle className="ml-2" /> מידע נוסף
        </button>{" "}
      </div>
      {open && (
        <ModalDetailes
          item={singleStrip}
          id={singleStrip.id}
          open={open}
          setOpen={setOpen}
        />
      )}
    </div>
  );
};

export default Strip;
