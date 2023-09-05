import React from "react";
import { BiPlus } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const BtnsCtrl = ({
  moviesSingle,
  handelrFavoriet,
  setOpen,
  getSingleScreen,
  asFavs,
  isAsFavs,
  setAsFavs,
  cancelButtonRef,
}) => {
  const nav = useNavigate();
  return (
    <>
      <div className="absolute top-[35%] m-5 sm:m-10 z-20 min-h-[250px] h-[20vw] ">
        <img
          className="max-w-[20vw] max-h-[95px]"
          src={
            moviesSingle?.production_companies[0]?.logo_path
              ? `https://image.tmdb.org/t/p/original/${moviesSingle?.production_companies[0]?.logo_path}`
              : "https://seeklogo.com/images/N/netflix-logo-6A5D357DF8-seeklogo.com.png"
          }
          alt="Burger"
        />
        <div className="flex items-center justify-between relative">
          <button
            onClick={() => {
              nav(`/watch/${moviesSingle.id}`);
            }}
            className="btn btn-active btn-sm bg-white text-black my-4 rounded"
          >
            {" "}
            <FaPlay className="ml-2" /> הפעל
          </button>
          <button
            onClick={() => {
              handelrFavoriet();
            }}
            className="mr-3 cursor-pointer"
          >
            {!asFavs ? (
              <BiPlus className="text-[35px] border-2 rounded-full p-1 border-[#6e6d6d] hover:border-white hover:bg-[#ffffff1d]" />
            ) : (
              <IoMdClose className="text-[35px] border-2 rounded-full p-1 border-[#6e6d6d] hover:border-white hover:bg-[#ffffff1d]" />
            )}
          </button>
          <button className="mr-3">
            <SlLike className="text-[35px] border-2 rounded-full p-2 border-[#6e6d6d] hover:border-white hover:bg-[#ffffff1d]" />
          </button>

          <label className="swap border-2 rounded-full p-1 border-[#6e6d6d] text-[#6e6d6d] mr-[50%] sm:mr-[90%] hover:border-white ">
            {/* <!-- this hidden checkbox controls the state --> */}
            <input type="checkbox" />
            {/* <!-- volume on icon --> */}
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
            </svg>
            {/* <!-- volume off icon --> */}
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <path d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z" />
            </svg>
          </label>
        </div>
      </div>
    </>
  );
};

export default BtnsCtrl;
