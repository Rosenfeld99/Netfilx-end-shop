import React from "react";
import { Link } from "react-router-dom";

const CatOptionNav = ({ category, setOpen, open }) => {
  console.log(open);
  return (
    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
      {category.sections.map((section) => (
        <div key={section.name}>
          <p
            id={`${section.name}-heading`}
            className="font-medium text-gray-200"
          >
            {section.name}
          </p>
          <ul
            role="list"
            aria-labelledby={`${section.name}-heading`}
            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
          >
            {section.items.map((item, i) => (
              <li key={i} className="flex">
                <Link
                  onClick={() => {
                    setOpen(false);
                  }}
                  to={`/shop/product/${item.href}`}
                  className="text-gray-400 hover:text-gray-600"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CatOptionNav;
