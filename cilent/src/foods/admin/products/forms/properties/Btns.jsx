import React from "react";
import { useNavigate } from "react-router-dom";

const Btns = ({ editItem }) => {
  const nav = useNavigate()
  return (
    <div className="flex justify-center">
      <div className=" py-7 flex">
        <button
          type="submit"
          className=" bg-red-600 px-5 py-1.5 text-white hover:bg-red-800 hover:text-black"
        >
          {editItem ? "עדכון" : "צור"}
        </button>
        <button
          onClick={() => {nav(-1)}}
          type="button"
          className="mx-3 bg-transparent border-[1px] border-[#747474] px-5 py-1.5 text-[#747474] hover:border-[#ffffff] hover:text-white"
        >
          השלך
        </button>
      </div>
    </div>
  );
};

export default Btns;
