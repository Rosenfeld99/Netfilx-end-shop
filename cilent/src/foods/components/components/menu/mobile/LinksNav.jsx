import React from "react";
import { Tab } from "@headlessui/react";

const LinksNav = ({ navigation, classNames }) => {
  console.log(navigation);
  return (
    <div className="border-b border-gray-200">
      <Tab.List className="-mb-px flex space-x-8 px-4">
        {navigation?.map((category) => (
          <Tab
            key={category.name}
            className={({ selected }) =>
              classNames(
                selected
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-white",
                "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
              )
            }
          >
            {category.name}
          </Tab>
        ))}
      </Tab.List>
    </div>
  );
};

export default LinksNav;
