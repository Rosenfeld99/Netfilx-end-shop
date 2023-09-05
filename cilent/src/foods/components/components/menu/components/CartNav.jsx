import React, { useEffect, useState } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Cart from "../../../cart/Cart";
import useShop from "../../../../../hooks/useShop";

const CartNav = () => {
  const [open, setOpen] = useState(false);

  const { cartItems } = useShop();

  // console.log(cartItems);

  // useEffect(() => {
  //   console.log(cart.length);
  // }, [cart.length]);

  return (
    <div className="ml-4 flow-root lg:ml-6">
      <div
        onClick={() => setOpen(true)}
        className="group -m-2 flex items-center p-2"
      >
        <ShoppingBagIcon
          className="h-6 w-6 flex-shrink-0 text-white hover:text-gray-300"
          aria-hidden="true"
        />
        <span className="ml-2 text-sm font-medium text-gray-200 hover:text-gray-300">
          {/* {cart.length} */}
          {cartItems.length}
        </span>
        <span className="sr-only">items in cart, view bag</span>
      </div>
      {open ? <Cart open={open} setOpen={setOpen} /> : null}
    </div>
  );
};

export default CartNav;
