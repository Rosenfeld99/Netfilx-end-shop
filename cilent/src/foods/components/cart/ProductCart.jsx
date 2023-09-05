import React from "react";
import useShop from "../../../hooks/useShop";
import { useNavigate } from "react-router-dom";

const ProductCart = ({setOpen}) => {
  const { cartItems, handelrRemoveCart } = useShop();
  const nav = useNavigate();
  console.log(cartItems);
  return (
    <div className="mt-8">
      <div className="flow-root">
        <ul role="list" className="-my-6 divide-y divide-gray-200">
          {cartItems?.map((product, i) => (
            <div key={i}>
              {product && (
                <li className="flex py-6">
                  <div
                    onClick={() => {
                      nav(`/shop/product/${product.id}`);
                      setOpen(false)
                    }}
                    className="h-24 w-24 cursor-pointer flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                  >
                    <img
                      src={product?.imageSrc}
                      alt={product?.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-200">
                        <h3>
                          <a href={product?.href}>{product?.name}</a>
                        </h3>
                        <p className="ml-4">₪ {product?.price}</p>
                      </div>
                      {product?.size ? (
                        <p className="mt-3 text-sm bg-gray-200 text-black p-2 rounded-sm h-[30px] w-[30px] flex items-center justify-center font-bold">
                          {product?.size}
                        </p>
                      ) : null}
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-400">כמות {product?.quantity}</p>

                      <div className="flex">
                        <button
                          onClick={() => handelrRemoveCart(product)}
                          type="button"
                          className="font-medium text-red-600 hover:text-red-700"
                        >
                          מחיקה
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductCart;
