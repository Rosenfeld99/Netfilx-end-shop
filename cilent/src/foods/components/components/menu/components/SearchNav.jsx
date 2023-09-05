import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {MdClose} from 'react-icons/md'
import useShop from "../../../../../hooks/useShop";
import { useNavigate } from "react-router-dom";

const SearchNav = () => {
  // const {fetchProductsBySearch,searchProducts} = useShop()
  const [open, setOpen] = useState(true);
  const [toggelInput, setToggelInput] = useState(false);
  const cancelButtonRef = useRef(null);
  const input = useRef(null);
  const nav = useNavigate()

  const handelSearch = () =>{
    const query = input?.current?.value
    if(query === "")return;
    console.log(query)
    nav(`/shop/products/search/${query}`)
    setOpen(false)
    // fetchProductsBySearch(query)
  }
  // console.log(searchProducts);
  return (
    <div className="flex lg:ml-6">
      <div className="p-2 text-white hover:text-gray-300">
        <MagnifyingGlassIcon
          onClick={() => {
            setToggelInput(true);
            setOpen(true);
          }}
          className="h-6 w-6"
          aria-hidden="true"
        />
        {toggelInput && (
          <Transition.Root show={open} as={Fragment}>
            <Dialog
              as="div"
              className=" absolute top-[85px] z-50 right-[125px]"
              initialFocus={cancelButtonRef}
              onClose={setOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed z-50 inset-0 backdrop-blur-sm bg-[#00000015] bg-opacity-75 transition-opacity" />
              </Transition.Child>
              <div className="fixed inset-0 z-50 overflow-y-auto">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <Dialog.Panel className="absolute top-[95px] right-20">
                      <input
                        dir="rtl"
                        type="text"
                        ref={input}
                        placeholder="חפשו ..."
                        className="py-2 px-3 pr-9 shadow-sm outline-none shadow-white rounded-sm border-2 bg-[#141414] absolute z-50 top-0 right-0"
                      />
                      <p className=" w-4 h-4 bg-white transform rotate-45 z-10 mt-1 ml-1.5 absolute top-[-10px] right-3"></p>
                      <p 
                      onClick={handelSearch}
                      className=" w-7 h-7 z-50 absolute right-2 top-2 cursor-pointer">
                        <MagnifyingGlassIcon />
                      </p>
                      <p 
                      // onClick={handelSearch}
                      className=" text-2xl z-50 absolute right-[200px] top-2.5 bg-[#141414] text-white cursor-pointer">
                        <MdClose />
                      </p>
                    </Dialog.Panel>
                  </Transition.Child>
              </div>
              {/*  */}
            </Dialog>
          </Transition.Root>
        )}
      </div>
    </div>
  );
};

export default SearchNav;
