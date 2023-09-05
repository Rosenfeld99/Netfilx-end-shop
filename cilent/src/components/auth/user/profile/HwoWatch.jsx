import React, { useEffect, useState } from "react";
import Loading from "../../../components/animation/loading/Loading";
import ScreenList from "./ScreenList";
import useScreen from "../../../../hooks/useScreen";

const HwoWatch = () => {
  const {
    getUserScreens,
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
    resetStatusHandler();
    getUserScreens();
  }, [status]);
  console.log(screens);
  
//   const [selectScreen,setSelectScreen] = useState(false);

  return (
    <div>
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
                  מי צופה ב-Netflix?{" "}
                </h1>
                <div>
                  <ScreenList
                    screens={screens}
                    // addProfile={addProfile}
                    // setAddProfile={setAddProfile}
                    // fetchItem={fetchItem}
                    // setAvatar={setAvatar}
                  />
                </div>
              </div>
            </main>
          </div>
        )}
      </>
    </div>
  );
};

export default HwoWatch;
