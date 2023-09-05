import React, { useEffect, useState } from "react";
import ConfirmAvatar from "./ConfirmAvatar";

const GaleryAvatars = ({
  listImages,
  isAddAvatar,
  setIsAddAvatar,
  setopenGalery,
  currentAvatar,
  setAvatar,
  setGetItem,
  defalutAvatar,
  setDefaultAvatar,
}) => {
  const [openConfirm, setOpenConfirm] = useState(false);
  const [newAvatar, setNewAvatar] = useState("");
 

  console.log(listImages);
  return (
    <div className=" absolute top-0 w-full min-h-screen bg-[#141414] py-24 sm:py-32 lg:px-8 z-20">
      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
        {listImages?.map((item, i) => (
          <div key={i}>
            <img
              onClick={() => {
                setOpenConfirm(true);
                setNewAvatar(item.url);
              }}
              className="w-[20vw] max-w-[140px] min-h-fit rounded-md m-3"
              src={item.url}
              alt=""
            />
          </div>
        ))}
        {openConfirm && (
          <ConfirmAvatar
            defalutAvatar={defalutAvatar}
            setDefaultAvatar={setDefaultAvatar}
            setGetItem={setGetItem}
            isAddAvatar={isAddAvatar}
            setIsAddAvatar={setIsAddAvatar}
            newAvatar={newAvatar}
            currentAvatar={currentAvatar}
            setAvatar={setAvatar}
            setOpenConfirm={setOpenConfirm}
            setopenGalery={setopenGalery}
          />
        )}
      </div>
    </div>
  );
};

export default GaleryAvatars;
