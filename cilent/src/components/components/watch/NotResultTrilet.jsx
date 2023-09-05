import React from "react";

const NotResultTrilet = ({nav,setShowMenu,moviesSingle}) => {
  return (
    <div className="min-h-screen">
      <h1 className=" text-xl md:text-3xl font-bold text-center py-6">
        לא נמצא טריילר להסרט שבחרת :({" "}
      </h1>{" "}
      <div className="hero " dir="rtl">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={`https://image.tmdb.org/t/p/original${moviesSingle?.poster_path}`}
            className="max-h-[30vw] min-h-[350px] rounded-lg shadow-2xl"
          />
          <div dir="rtl" className=" max-w-xl">
            <h3 className=" text-xl font-bold mt-6">{moviesSingle?.title}</h3>
            <p className="py-6">{moviesSingle?.overview}</p>
            <button
              onClick={() => {
                nav(-1);
                setShowMenu(true);
              }}
              type="button"
              className="mx-3 bg-transparent border-[1px] border-[#747474] px-5 py-1.5 text-[#747474] hover:border-[#ffffff] hover:text-white"
            >
              חזרה
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotResultTrilet;
