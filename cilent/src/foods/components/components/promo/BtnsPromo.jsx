import React from "react";

const BtnsPromo = ({nav}) => {
  return (
    <div>
      <button
        onClick={() => {
          nav("/shop/categories");
        }}
        className=" bg-white px-5 py-1.5 text-black hover:bg-red-600 hover:text-white"
      >
        לתפריט
      </button>
      <button
        onClick={() => nav(-1)}
        type="button"
        className="mx-3 bg-transparent border-[1px] border-[#747474] px-5 py-1.5 text-[#747474] hover:border-[#ffffff] hover:text-white"
      >
        חזרה
      </button>
    </div>
  );
};

export default BtnsPromo;
