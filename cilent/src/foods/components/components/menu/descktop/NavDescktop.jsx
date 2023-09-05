import React, { Fragment } from "react";
import CatNav from "../components/CatNav";
import { Popover, Transition } from "@headlessui/react";
import OferColaction from "./OferColaction";
import CatOptionNav from "./CatOptionNav";

const NavDescktop = ({ navigation, open, classNames,setOpen }) => {
  return (
    <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
      <div className="flex h-full space-x-8">
        {navigation?.map((category) => (
          <Popover key={category.name} className="flex">
            {({ open }) => (
              <>
                {/* categories nav */}
                <CatNav
                  category={category}
                  classNames={classNames}
                  open={open}
                />

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                    <div
                      className="absolute inset-0 top-1/2 bg-white shadow"
                      aria-hidden="true"
                    />

                    <div className="relative bg-gradient-to-b from-black via-[#141414] to-black bg-opacity-90 border-b-[1px]">
                      <div className="mx-auto max-w-7xl px-8">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                          {/* ofer colection */}
                          <OferColaction category={category} />

                          {/* catecories option colection */}
                          <CatOptionNav category={category} setOpen={setOpen} open={open}/>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        ))}

        {/* {navigation.pages.map((page) => (
          <a
            key={page.name}
            href={page.href}
            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
          >
            {page.name}
          </a>
        ))} */}
      </div>
    </Popover.Group>
  );
};

export default NavDescktop;
