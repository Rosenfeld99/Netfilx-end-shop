import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import NavMobile from "./NavMobile";
import NavDesctop from "./NavDesctop";
import Notfication from "./Notfication";
import Account from "./Account";
import { MDX_PROFILEID, TOKEN_KEY } from "../../constant/url";
import AuthUser from "../auth/user/AuthUser";
import InputSaerch from "./InputSaerch";
import useSearch from "../../hooks/useSearch";
import useAuth from "../../hooks/useAuth";
import { navigation } from "./navList";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Menus() {
  const [isScroll, setIsScroll] = useState(false);
  const { resetFlaghandler } = useSearch();
  const { getUser, user } = useAuth();

  window.onscroll = () => {
    setIsScroll(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  useEffect(
    () => {
      if (localStorage[TOKEN_KEY]) {
        getUser();
      }
    },
    [localStorage[TOKEN_KEY]],
    user
  );
  return (
    <div>
      {localStorage[TOKEN_KEY] && localStorage[MDX_PROFILEID] && user ? (
        <>
          <AuthUser />
          <Disclosure
            as="nav"
            className={
              isScroll
                ? "bg-black w-full text-white fixed top-0 z-50 "
                : "bg-gradient-to-b from-[#000000b6] via-[#0000008c] w-full text-white fixed top-0 z-50 "
            }
          >
            {({ open }) => (
              <>
                <div className="mx-auto px-2">
                  <div
                    className="relative flex h-16 items-center justify-between"
                    dir="rtl"
                  >
                    {/* logo */}
                    <div className="flex items-center">
                      <img
                        className="block h-6 w-auto "
                        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                        alt="Your Company"
                      />
                      <NavMobile
                        resetFlaghandler={resetFlaghandler}
                        navigation={navigation}
                        classNames={classNames}
                      />

                      {/* NavDesctop */}
                      <NavDesctop
                        resetFlaghandler={resetFlaghandler}
                        navigation={navigation}
                        classNames={classNames}
                      />
                    </div>

                    <div className="absolute inset-y-0 left-0 flex items-center ">
                      {/* left */}
                      <InputSaerch className="ml-3 text-2xl" />
                      <Notfication
                        notfication={navigation}
                        classNames={classNames}
                      />
                      <Account classNames={classNames} />
                    </div>
                  </div>
                </div>
              </>
            )}
          </Disclosure>
        </>
      ) : (
        <>
          {localStorage[MDX_PROFILEID] && (
            <div className="w-[200px] absolute right-4 top-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt=""
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
