import React from "react";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const Btn = ({ singleAddress }) => {
  const nav = useNavigate();

  return (
    <div className=" flex gap-3">
      <button
        onClick={() => {
          nav(-1);
        }}
        className="my-2 p-3 w-full rounded-md bg-[#f00] text-white h-50 border-none font-bold text-lg mb-10"
      >
        {singleAddress ? "עדכון" : "הוספה"}
      </button>
      <button
        type="button"
        onClick={() => {
          nav(-1);
        }}
        className="my-2 p-3 w-full rounded-md bg-gray-200 text-black h-50 border-none font-bold text-lg mb-10"
      >
        סגירה
      </button>
    </div>
  );
};

export default Btn;
