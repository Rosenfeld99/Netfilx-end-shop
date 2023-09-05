import React, { useEffect, useState } from "react";
import useShop from "../../../hooks/useShop";
import { CART_KEY } from "../../../constant/url";
import { Link } from "react-router-dom";

const FooterCart = ({ setOpen }) => {
  const { cartItems } = useShop();
  const [totalPrice, setTotalPrice] = useState(null);

  useEffect(() => {
    calcTotal();
  }, [localStorage[CART_KEY]]);

  const calcTotal = () => {
    let sum = 0;
    for (let i = 0; i < cartItems.length; i++) {
      let current = parseInt(cartItems[i].price);
      sum += current;
    }
    // console.log(sum);
    setTotalPrice(sum);
  };

  return (
    <div dir="rtl" className="border-t border-gray-200 px-4 py-6 sm:px-6">
      <div className="flex justify-between text-base font-medium text-gray-200">
        <p>סה"כ</p>
        <p>{totalPrice} ₪</p>
      </div>
      <p className="mt-0.5 text-sm text-gray-300">
        משלוח ומיסים מחושבים בקופה.
      </p>
      <div className="mt-6">
        <Link
          onClick={() => {
            setOpen(false);
          }}
          to={"/shop/checkaut"}
          className="flex items-center justify-center rounded-md border border-transparent bg-red-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700"
        >
          מעבר לתשלום
        </Link>
      </div>
    </div>
  );
};

export default FooterCart;
