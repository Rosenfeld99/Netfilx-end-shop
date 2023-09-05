import React from "react";
import CaruselItem from "./CaruselItem";

const CaruselList = ({ movies, titleList, type,singleScreen }) => {
 
  return (
    <div dir="rtl" className=" relative">
      <p className="text-xl m-2 font-bold text-white">{titleList}</p>
      <div className="carousel mx-2">
        {movies?.map((item, i) => (
          <CaruselItem
            key={item.id}
            item={item}
            index={i}
            type={type}
            singleScreen={singleScreen}
          />
        ))}
      </div>
    </div>
  );
};

export default CaruselList;
