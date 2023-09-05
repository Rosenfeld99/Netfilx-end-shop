import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { FaPlay } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { BiPlus } from "react-icons/bi";
import { BsCircleFill } from "react-icons/bs";
import useScreen from "../../../hooks/useScreen";
import useSingle from "../../../hooks/useSingle";
import { useNavigate } from "react-router-dom";
import ModalDetailes from "../MovieDetailes/ModalDetailes";

const GridItem = ({ item,type }) => {
  const { clearSingleMovie, error, loading, getSingle, moviesSingle } =
    useSingle();

  const { favs_ar, toggelFavoriet, singleScreen, getSingleScreen } =
    useScreen();

  const nav = useNavigate();

  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [asFavs, setAsFavs] = useState(null);

  useEffect(() => {
    const keys = {
      type: item?.type === "Scripted" ? "tv" : "movie",
      // type: type ? type : "movie",
      id: item?.id,
    };
    {
      isHovered ? (clearSingleMovie(), getSingle(keys), isAsFavs()) : null;
    }
  }, [isHovered]);

  const isAsFavs = () => {
    if (singleScreen?.favs_id?.includes(item?.id)) {
      setAsFavs(true);
    }
  };

  const handelrFavoriet = () => {
    const bodyData = {
      fav: moviesSingle,
      screenId: singleScreen._id,
    };
    toggelFavoriet(bodyData);
    setAsFavs(!asFavs);
  };

  return (
    <>
      {item?.backdrop_path && (
        <div className="relative">
          <div
            className={`w-full rounded-sm overflow-hidden cursor-pointer ${
              isHovered ? "active" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setOpen(true)}
          >
            <img
              className="w-full"
              src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
              alt="Movie"
            />

            {isHovered && (
              <div className="on-card-hover absolute inset-0 flex items-center justify-center z-50 w-full h-full">
                <div className="in-on-card-hover rounded-md overflow-hidden bg-[#141414] mx-auto relative top-0 transform scale-y-0 origin-bottom shadow-[#00000063] shadow-md">
                  <img
                    className=""
                    src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                    alt="Movie"
                  />
                  <div className="p-4">
                    <div className=" flex justify-between items-center">
                      <div className=" flex items-center">
                        <div
                          onClick={() => {
                            nav(`/watch/${item.id}`);
                          }}
                          className="text-[15px] p-2 border-2 rounded-full bg-white text-black"
                        >
                          <FaPlay />
                        </div>
                        <div
                          data-tip={
                            !asFavs ? "הוספה לרשימה שלך" : "הסרה מהרשימה שלך"
                          }
                          onClick={handelrFavoriet}
                          className="tooltip text-[25px] mx-2 p-1 border-2 rounded-full border-[#6e6d6d] hover:border-white hover:bg-[#ffffff1d]"
                        >
                          {!asFavs ? <BiPlus /> : <IoMdClose />}
                        </div>
                        <div className="text-[15px] p-2 border-2 rounded-full border-[#6e6d6d] hover:border-white hover:bg-[#ffffff1d]">
                          <SlLike />
                        </div>
                      </div>
                      <div
                        onClick={() => setOpen(true)}
                        data-tip="מידע נוסף"
                        className="tooltip text-[30px] border-2 rounded-full border-[#6e6d6d] hover:border-white hover:bg-[#ffffff1d]"
                      >
                        <MdOutlineKeyboardArrowDown />
                      </div>
                    </div>
                    <h2 className="my-1 text-xs flex items-center">
                      {moviesSingle?.genres?.map((g, i) => (
                        <div className="flex items-center" key={i}>
                          <span> {g?.name}</span>
                          <BsCircleFill className=" text-[6px] mx-1" />
                        </div>
                      ))}
                    </h2>
                  </div>
                </div>
              </div>
            )}
          </div>

          {open && (
            <ModalDetailes
              moviesSingle={moviesSingle}
              open={open}
              setOpen={setOpen}
              asFavs={asFavs}
              setAsFavs={setAsFavs}
              isAsFavs={isAsFavs}
            />
          )}
        </div>
      )}
    </>
  );
};

export default GridItem;
