import React from "react";
import { Link } from "react-router-dom";

const CatOptionMobile = ({ category, setOpen }) => {
  return (
    <div>
      {category.sections.map((section) => (
        <div key={section.name}>
          <p
            id={`${category.id}-${section.id}-heading-mobile`}
            className="font-medium text-red-500 hover:text-red-800 pt-9"
          >
            {section.name}
          </p>
          <ul
            role="list"
            aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
            className="mt-6 flex flex-col space-y-6"
          >
            {section.items.map((item) => (
              <li key={item.name} className="flow-root">
                <Link
                  onClick={() => {
                    setOpen(false);
                  }}
                  to={`/shop/product/${item.href}`}
                  className="-m-2 block p-2 text-white hover:text-gray-300"
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

export default CatOptionMobile;
