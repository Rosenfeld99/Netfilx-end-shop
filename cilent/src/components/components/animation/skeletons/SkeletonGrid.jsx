import React from "react";
import SkeletonArticale from "./SkeletonArticale";
import useScreen from "../../../../hooks/useScreen";

const SkeletonGrid = ({ num }) => {

    const {} = useScreen()

  return (
    <div dir="rtl" className="p-3">
      <div className="pt-20 pb-10 text-xl font-bold text-white w-[100px]">
        <SkeletonArticale theme={"dark"} widthHeigth={"h-[1vw] w-56"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {num?.map((n) => (
          <SkeletonArticale
            key={n.id}
            theme={"dark"}
            widthHeigth={"h-[10vw] min-h-[100px] "}
          />
        ))}
      </div>
    </div>
  );
};

export default SkeletonGrid;
