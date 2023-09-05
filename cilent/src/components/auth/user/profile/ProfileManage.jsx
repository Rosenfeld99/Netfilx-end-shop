import React, { useEffect, useState } from "react";
import ScreenList from "../profile/ScreenList";
import Loading from "../../../components/animation/loading/Loading";
import AddProfile from "./AddProfile";
import useScreen from "../../../../hooks/useScreen";
import useUser from "../../../../hooks/useUser";
import EditProfile from "./EditProfile";
import { filterAvatars } from "./avatarData";
import { useLocation, useNavigate } from "react-router-dom";
import { MDX_PROFILEID } from "../../../../constant/url";

const ProfileManage = ({ show, setShowMenu }) => {
  const { user } = useUser();
  const location = useLocation();
  console.log(location.pathname);
  const {
    getUserScreens,
    getSingleScreen,
    addUserScreens,
    editUserScreens,
    deleteUserScreens,
    screens,
    loading,
    error,
    status,
    resetStatusHandler,
  } = useScreen();
  useEffect(() => {
    if (location.pathname === "/profile/manage") {
      setShowMenu(false);
    }
    resetStatusHandler();
    getUserScreens();
  }, [status, localStorage[MDX_PROFILEID]]);
  // console.log(screens);

  // useEffect(() => {
  //   if (localStorage[MDX_PROFILEID]) {
  //     nav(1);
  //   }
  // }, [status, localStorage[MDX_PROFILEID]]);

  const nav = useNavigate();

  const [addProfile, setAddProfile] = useState(false);
  const [editScreen, setEditScreen] = useState(false);
  const [getItem, setGetItem] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [openGalery, setopenGalery] = useState(false);
  const [listImages, setListImages] = useState([]);
  const [defalutAvatar, setDefaultAvatar] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
  );
  // state changens (how watch) to (profile manage) -->true is how watch -->false is profle manage
  const [hwoWatch, setHwoWatch] = useState(show);

  useEffect(() => {
    resetStatusHandler();
    filterAvatars(screens, setListImages, setDefaultAvatar);
  }, [addProfile, editScreen]);

  const editAvatarProfile = () => {
    setopenGalery(true);
  };
  const fetchItem = (item) => {
    setGetItem(item);
    setEditScreen(true);
  };

  return (
    <>
      {loading ? (
        <div className=" min-h-screen flex items-center justify-center">
          <Loading width={"w-20"} />
        </div>
      ) : (
        <div>
          <main className="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
              <h1
                dir="rtl"
                className="mt-4 text-xl tracking-tight text-[#e3e2e2] sm:text-3xl"
              >
                {!hwoWatch ? "ניהול פרופילים :" : "מי צופה ב-Netflix?"}
              </h1>
              <div>
                <ScreenList
                  getSingleScreen={getSingleScreen}
                  setHwoWatch={setHwoWatch}
                  hwoWatch={hwoWatch}
                  screens={screens}
                  addProfile={addProfile}
                  setAddProfile={setAddProfile}
                  fetchItem={fetchItem}
                  setAvatar={setAvatar}
                />
              </div>
            </div>
            {hwoWatch && (
              <button
                onClick={() => setHwoWatch(false)}
                type="button"
                className=" mt-14 mx-3 bg-transparent border-[1px] border-[#747474] px-5 py-1.5 text-[#747474] hover:border-[#ffffff] hover:text-white"
              >
                נהל פרופילים
              </button>
            )}
            {!hwoWatch && (
              <button
                onClick={() => {
                  setHwoWatch(true);
                  setShowMenu(true);
                  // nav("/home");
                }}
                type="button"
                className=" mt-14 mx-3 bg-white px-5 py-1.5 text-black hover:bg-red-600 hover:text-white"
              >
                בצע
              </button>
            )}
            <button className=" "></button>
          </main>
          {addProfile && !hwoWatch && (
            <AddProfile
              loading={loading}
              defalutAvatar={defalutAvatar}
              setDefaultAvatar={setDefaultAvatar}
              avatar={avatar}
              listImages={listImages}
              setAvatar={setAvatar}
              user={user}
              addProfile={addProfile}
              setAddProfile={setAddProfile}
              addUserScreens={addUserScreens}
              editAvatarProfile={editAvatarProfile}
              openGalery={openGalery}
              setopenGalery={setopenGalery}
            />
          )}
          {editScreen && !hwoWatch && (
            <EditProfile
              loading={loading}
              listImages={listImages}
              setGetItem={setGetItem}
              avatar={avatar}
              setAvatar={setAvatar}
              user={user}
              getItem={getItem}
              editUserScreens={editUserScreens}
              deleteUserScreens={deleteUserScreens}
              editScreen={editScreen}
              setEditScreen={setEditScreen}
              editAvatarProfile={editAvatarProfile}
              openGalery={openGalery}
              setopenGalery={setopenGalery}
            />
          )}
        </div>
      )}
    </>
  );
};

export default ProfileManage;
