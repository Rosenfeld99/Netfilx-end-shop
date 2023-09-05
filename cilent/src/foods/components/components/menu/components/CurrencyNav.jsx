import React from "react";

const CurrencyNav = () => {
  return (
    <div className="hidden lg:ml-8 lg:flex">
      <a
        href="#"
        className="flex items-center text-white hover:text-gray-300"
      >
        <img
          src="https://tailwindui.com/img/flags/flag-canada.svg"
          alt=""
          className="block h-auto w-5 flex-shrink-0"
        />
        <span className="ml-3 block text-sm font-medium">CAD</span>
        <span className="sr-only">, change currency</span>
      </a>
    </div>
  );
};

export default CurrencyNav;
