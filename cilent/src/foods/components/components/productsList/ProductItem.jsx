import React, { useState } from "react";
import ProductOverviews from "../overviews/ProductOverviews";

const ProductItem = ({ product, nav }) => {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // console.log(product?.imageBanner?.imageSrc);
  return (
    <div key={product._id} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full max-h-60 overflow-hidden relative h-full rounded-sm bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          onClick={() => {
            nav(`/shop/product/${product._id}`);
          }}
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          src={product?.imageBanner?.imageSrc}
          alt={product?.imageBanner?.imageAlt}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
        {isHovered && (
          <p
            onClick={() => setOpen(true)}
            onMouseOver={() => setIsHovered(true)}
            className=" bg-red-600 hover:bg-red-700 rounded-sm text-white absolute bottom-2 m-1 p-2 text-center z-10 cursor-pointer"
          >
            צפיה מהירה
          </p>
        )}
      </div>
      <h3 className="mt-4 text-sm text-gray-100">{product.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-500">{product.price} ₪</p>
      {/* product over quickviews */}
      <ProductOverviews open={open} setOpen={setOpen} product={product} setIsHovered={setIsHovered}/>
    </div>
  );
};

export default ProductItem;
