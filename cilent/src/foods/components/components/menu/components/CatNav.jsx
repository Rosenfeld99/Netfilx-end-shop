import React from "react";
import { Popover } from "@headlessui/react";

const CatNav = ({ category, open, classNames }) => {
  return (
    <div className="relative flex">
      <Popover.Button
        className={classNames(
          open
            ? "border-red-600 text-red-600 outline-none"
            : "border-transparent text-white hover:text-gray-300",
          "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
        )}
      >
        {category.name}
      </Popover.Button>
    </div>
  );
};

export default CatNav;
