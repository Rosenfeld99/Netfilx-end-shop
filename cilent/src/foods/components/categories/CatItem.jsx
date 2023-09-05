import React from "react";
import { useNavigate } from "react-router-dom";

const CatItem = ({ callout }) => {
  const nav = useNavigate();

  return (
    <div
      key={callout.name}
      className="group relative"
      onClick={() => {
        nav("/shop/products/" + callout.url_name);
      }}
    >
      <div className="relative h-80 w-full overflow-hidden rounded-md bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-50 sm:h-64">
        <img
          src={callout.imageSrc}
          alt={callout.imageAlt}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <h3 className="mt-6 text-sm text-gray-100">
        <a href={callout.href}>
          <span className="absolute inset-0" />
          {callout.name}
        </a>
      </h3>
      <p className="text-base font-semibold text-gray-500">
        {callout.description}
      </p>
    </div>
  );
};

export default CatItem;
