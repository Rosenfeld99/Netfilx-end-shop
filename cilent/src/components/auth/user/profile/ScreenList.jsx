import React from "react";
import ScreenItem from "../profile/ScreenItem";
import { MdAddCircle } from "react-icons/md";

const ScreenList = ({
  setHwoWatch,
  screens,
  getSingleScreen,
  addProfile,
  setAddProfile,
  editScreen,
  setEditScreen,
  fetchItem,
  setAvatar,
  hwoWatch,
}) => {
  return (
    <div className="mt-10 flex items-center justify-center flex-wrap ">
      {screens?.map((item, i) => (
        <ScreenItem
          getSingleScreen={getSingleScreen}
          item={item}
          key={item._id}
          fetchItem={fetchItem}
          setAvatar={setAvatar}
          hwoWatch={hwoWatch}
          setHwoWatch={setHwoWatch}
        />
      ))}
      {screens?.length < 5 && !hwoWatch && (
        <div
          onClick={() => setAddProfile(true)}
          className=" cursor-pointer w-[20vw] max-w-[120px] min-w-[70px] mx-3 my-5 rounded-md flex flex-col items-center text-center relative text-[#747474]"
        >
          <MdAddCircle className="sm:text-[90px] text-[50px] " />
          <h2 className="sm:text-[1.2em] text-[11px] ">הוסף פרופיל</h2>
        </div>
      )}
    </div>
  );
};

export default ScreenList;
