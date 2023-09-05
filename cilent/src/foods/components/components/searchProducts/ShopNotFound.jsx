import React from "react";
import SaerchNotFound from "../../../../../utils/search/SaerchNotFound";
import { Link } from "react-router-dom";

const ShopNotFound = ({nav}) => {
  return (
    <SaerchNotFound>
      <Link
        to="/shop/categories"
        className="rounded-md btn bg-slate-300 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#353434] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Go to shop
      </Link>
      <div
        onClick={() => {
          nav(-1);
        }}
        className="text-sm font-semibold text-slate-300 cursor-pointer border-2 border-[#e3e2e2] btn bg-black hover:bg-[#353434]"
      >
        Back <span aria-hidden="true">&rarr;</span>
      </div>
    </SaerchNotFound>
  );
};

export default ShopNotFound;
