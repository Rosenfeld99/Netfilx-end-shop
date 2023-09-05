import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ProductCart from "./ProductCart";
import FooterCart from "./FooterCart";
import HeaderCart from "./HeaderCart";

const products = [
  {
    id: 1,
    name: "קוקה קולה",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/8879621/pexels-photo-8879621.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$5",
    quantity: 1,
    color: "קלאסית",
    description: "כוס קוקה קולה: מרענן, מתוק, פיצוץ, קלאסי.",
  },
  {
    id: 2,
    name: "קוקה קולה",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/8879621/pexels-photo-8879621.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$5",
    quantity: 1,
    color: "קלאסית",
    description: "כוס קוקה קולה: מרענן, מתוק, פיצוץ, קלאסי.",
  },
  // More products...
];

const Cart = ({ open, setOpen }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-gradient-to-r from-black via-[#141414] to-black bg-opacity-90 shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      {/* headre cart */}
                      <HeaderCart setOpen={setOpen} />
                      {/* product cart */}
                      <ProductCart setOpen={setOpen}/>
                      {/*  */}
                    </div>
                    {/* footer cart */}
                    <FooterCart setOpen={setOpen} />
                    {/*  */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Cart;
