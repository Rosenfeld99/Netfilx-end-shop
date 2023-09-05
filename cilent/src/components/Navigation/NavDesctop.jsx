import { current } from "@reduxjs/toolkit";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavDesctop = ({ navigation, classNames ,resetFlaghandler}) => {
  const location = useLocation()
  const pathName = location.pathname.substring(1)
  // console.log(pathName);

  return (
    <div className="nav-desctop sm:ml-6 mr-3">
      <div className="flex space-x-4">
        {navigation.map((item) => (
          <Link
            to={`/${item.href}`}
            key={item.name}
            className={classNames(
              pathName === item.href
                ? "bolder text-white font-bold"
                : "text-[#e7e5e5] hover:text-[#766d6d]",
              " px-2 py-1 text-sm "
            )}
            aria-current={item.current ? "page" : undefined}
            onClick={item.href == "home" || "/" ? resetFlaghandler : null}
          >
            {item?.name == "Shop" ? <span className=" font-bold text-red-600"> חדש </span> : null}
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavDesctop;
