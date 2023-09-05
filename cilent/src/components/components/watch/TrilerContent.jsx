import React from "react";
import Loading from "../animation/loading/Loading";
import { BsArrowLeft } from "react-icons/bs";

const TrilerContent = ({ nav, setShowMenu, moviesSingle, loading }) => {
  console.log(moviesSingle);
  return (
    <div className="watch relative overflow-hidden">
      <div
        onClick={() => {
          nav(-1);
          setShowMenu(true);
        }}
        className="back absolute z-30 flex items-center text-xl text-red-500 cursor-pointer bg-black w-full h-16"
      >
        <BsArrowLeft className="mx-2" />
        <p>יציאה</p>
      </div>
      {!loading ? (
        <iframe
          className="min-h-screen min-w-full z-10"
          src={`https://www.youtube.com/embed/${moviesSingle?.videos?.results[0]?.key}/v=ABCDEFG?controls=0&amp&showinfo=0?&modestbranding=1&autoplay=1&mute=1&controls=0&iv_load_policy=3`}
        ></iframe>
      ) : (
        <div className=" min-h-screen flex items-center justify-center">
          <Loading width={"w-20"} />
        </div>
      )}
    </div>
  );
};

export default TrilerContent;
