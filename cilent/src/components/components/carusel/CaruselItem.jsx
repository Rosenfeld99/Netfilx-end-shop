import React, { useEffect, useState } from "react";
import useMovies from "../../../hooks/useMovies";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { FaPlay } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { BiPlus } from "react-icons/bi";
import useSingle from "../../../hooks/useSingle";
import useScreen from "../../../hooks/useScreen";
import ModalDetailes from "../MovieDetailes/ModalDetailes";
import { MDX_PROFILEID } from "../../../constant/url";

const CaruselItem = ({ item, index, type,singleScreen }) => {
  const { clearSingleMovie, error, getSingle, moviesSingle } = useSingle();

  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [asFavs, setAsFavs] = useState(false);

  const { loading } = useMovies();
  // console.log(item);

  const isAsFavs = () => {
    if (singleScreen?.favs_id?.includes(item.id)) {
      setAsFavs(true);
    }
    // console.log(asFavs);
  };

  useEffect(() => {
    const keys = {
      type: item?.type === "Scripted" ? "tv" : "movie",
      id: item?.id,
    };
    {
      isHovered ? (clearSingleMovie(), getSingle(keys), isAsFavs()) : null;
    }
  }, [isHovered]);

  // const handelrFavoriet = () => {
  //   // getSingle(item.id);
  //   // console.log(favs_ar);
  //   console.log(moviesSingle);
  //   const bodyData = {
  //     fav: moviesSingle,
  //     screenId: singleScreen._id,
  //   };
  //   console.log(bodyData);
  //   // getSingleScreen(singleScreen._id)
  //   // console.log(singleScreen);
  //   toggelFavoriet(bodyData);
  //   setAsFavs(!asFavs);
  //   clearSingleMovie()
  // };

  return (
    <>
      {item.backdrop_path ? (
        <div
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="carousel-item w-fit m-1 cursor-pointer h-[10vw] min-h-[100px] overflow-hidden rounded-sm"
        >
          {
            <img
              onClick={() => setOpen(true)}
              src={
                loading
                  ? item.backdrop_path
                  : `https://image.tmdb.org/t/p/original/${item.backdrop_path}`
              }
              alt="Burger"
            />
          }
          {/* {isHovered && (
            <div
              style={{ left: isHovered && index * 170 }}
              dir="rtl"
              className="on-card-hover absolute inset-0 flex items-center justify-center z-50 min-w-[200px] w-[25vw] h-fit max-w-[270px] max-h-[200px]"
            >
              <div className="in-on-card-hover rounded-md overflow-hidden bg-[#141414] mx-auto relative top-0 transform scale-y-0 origin-bottom shadow-[#00000063] shadow-md">
                <img
                  className=""
                  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                  alt="Movie"
                />
                <div className="p-4">
                  <div className=" flex justify-between items-center">
                    <div className=" flex items-center">
                      <div className="text-[15px] p-1 lg:p-2 border-2 rounded-full bg-white text-black">
                        <FaPlay />
                      </div>
                      <div
                        data-tip={
                          !asFavs ? "הוספה לרשימה שלך" : "הסרה מהרשימה שלך"
                        }
                        onClick={handelrFavoriet}
                        className="tooltip text-[25px] mx-2 p-0.2 lg:p-1 border-2 rounded-full border-[#6e6d6d] hover:border-white hover:bg-[#ffffff1d]"
                      >
                        {!asFavs ? <BiPlus /> : <IoMdClose />}
                      </div>
                      <div className="text-[15px] p-1 lg:p-2 border-2 rounded-full border-[#6e6d6d] hover:border-white hover:bg-[#ffffff1d]">
                        <SlLike />
                      </div>
                    </div>
                    <div
                      onClick={() => setOpen(true)}
                      data-tip="מידע נוסף"
                      className="tooltip text-[25px] lg:text-[30px] border-2 rounded-full border-[#6e6d6d] hover:border-white hover:bg-[#ffffff1d]"
                    >
                      <MdOutlineKeyboardArrowDown />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )} */}
        </div>
      ) : null}
      {open && (
        <ModalDetailes
          moviesSingle={moviesSingle}
          open={open}
          setOpen={setOpen}
          asFavs={asFavs}
          isAsFavs={isAsFavs}
          setAsFavs={setAsFavs}
        />
      )}
    </>
  );
};

export default CaruselItem;
