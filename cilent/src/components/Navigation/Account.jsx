import React, { useEffect } from "react";
import { RiArrowUpSFill } from "react-icons/ri";
import { Menu, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import useScreen from "../../hooks/useScreen";
import { MDX_PROFILEID } from "../../constant/url";

const Account = ({ classNames }) => {
  const nav = useNavigate();

  const { logoutUser } = useUser();
  const {
    screens,
    getUserScreens,
    status,
    singleScreen,
    getSingleScreen,
    loading,
    error,
  } = useScreen();

  const handlerChangeProfile = (id) => {
    getSingleScreen(id);
    getUserScreens();
  };

  useEffect(() => {
    getUserScreens();
    getSingleScreen(localStorage[MDX_PROFILEID]);
  }, [status, localStorage[MDX_PROFILEID]]);

  // console.log(screens);
  // console.log(singleScreen);

  return (
    <Menu as="div" className="relative ml-3 ">
      {singleScreen.imageScreen != null && (
        <div>
          <Menu.Button className="flex items-center">
            <img
              className="h-8 w-8 rounded-sm"
              // src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
              src={singleScreen.imageScreen}
              alt=""
            />
          </Menu.Button>
        </div>
      )}
      <Transition className="absolute left-56">
        <RiArrowUpSFill className="text-2xl absolute right-[200px]" />
        <Menu.Items className="absolute border-[#605f5f3b] border-[1px] z-10 mt-4 w-56 bg-[#000000c3] py-1 shadow-lg text-center ">
          {screens?.map((item, i) => (
            <div key={i}>
              {item._id != singleScreen._id && (
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      // to={`/${item.href}`}
                      className={classNames(
                        active ? "bg-[#000000e7] text-white" : "",
                        "block px-2.5 py-2.5 text-sm text-gray-300"
                      )}
                    >
                      <div
                        onClick={() => handlerChangeProfile(item._id)}
                        className=" flex items-center"
                      >
                        <img
                          className="h-8 rounded-sm"
                          src={item.imageScreen}
                          alt=""
                        />
                        <p className=" mx-3 hover:underline">
                          {item.nameScreen}
                        </p>
                      </div>
                    </Link>
                  )}
                </Menu.Item>
              )}
            </div>
          ))}
          {/* profile detailes */}
          <Menu.Item>
            {({ active }) => (
              <Link
                to={`/profile/manage`}
                className={classNames(
                  active ? "bg-[#000000e7] text-white" : "",
                  "block px-2.5 py-2.5 text-sm text-gray-300 border-t-[1px] border-[#605f5f]"
                )}
              >
                <div className=" flex items-center">
                  <img
                    className="h-8 rounded-sm p-1"
                    src={
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/OOjs_UI_icon_edit-ltr-gray.svg/1024px-OOjs_UI_icon_edit-ltr-gray.svg.png"
                    }
                    alt=""
                  />
                  <p className=" mx-3 hover:underline"> נהל פרופילים </p>
                </div>
              </Link>
            )}
          </Menu.Item>

          <Menu.Items
            className="py-3 shadow-lg text-center border-t-[1px] border-[#605f5f]"
            onClick={() => {
              logoutUser();
              nav("/login");
            }}
          >
            <Menu.Item>
              <div>
                <p className=" mx-3 hover:underline ">יציאה מ-Netflix</p>
              </div>
            </Menu.Item>
          </Menu.Items>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Account;
