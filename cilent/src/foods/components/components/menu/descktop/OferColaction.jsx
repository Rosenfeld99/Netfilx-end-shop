import React from "react";

const OferColaction = ({category}) => {
  return (
    <div className="col-start-2 grid grid-cols-2 gap-x-8">
      {category.featured.map((item) => (
        <div key={item.name} className="group relative text-base sm:text-sm">
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 ">
            <img
              src={item.imageSrc}
              alt={item.imageAlt}
              className="object-cover object-center w-[25vw] h-[20vw] "
            />
          </div>
          <a href={item.href} className="mt-6 block font-medium text-gray-100">
            <span className="absolute inset-0 z-10" aria-hidden="true" />
            {item.name}
          </a>
          <p aria-hidden="true" className="mt-1">
            Shop now
          </p>
        </div>
      ))}
    </div>
  );
};

export default OferColaction;
