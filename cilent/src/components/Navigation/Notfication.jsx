import React, { useEffect, useState } from "react";
import { RiArrowUpSFill } from "react-icons/ri";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { BiBell } from "react-icons/bi";
import CardNotfication from "./CardNotfication";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesUpComing } from "../../redux/featrues/upComingSlice";

const Notfication = () => {

  const { moviesUpComing } = useSelector((store) => store.upComingSlice);
  const dispatch = useDispatch();

  const getMoviesAPI = () => {
    dispatch(getMoviesUpComing());
  };

  useEffect(() => {
    getMoviesAPI();
    // console.log("====");
  }, [dispatch]);

  // console.log(moviesUpComing.results);

  return (
    <Menu as="div" className="relative ml-3 ">
      <div>
        <Menu.Button className="flex items-center">
          <BiBell className="text-2xl" />
        </Menu.Button>
      </div>
      <Transition className="absolute left-[365px] sm:left-[400px] ">
        <RiArrowUpSFill className="text-2xl absolute right-[335px] sm:right-[375px]" />
        <Menu.Items className="absolute z-10 mt-4 w-[360px] sm:w-[400px] h-[350px] overflow-x-auto bg-[#000000cc] py-1 shadow-lg text-center border-t-2">
            {moviesUpComing.results?.map((item,i) =>(
              <CardNotfication key={item.id} item={item}/>
            ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Notfication;
