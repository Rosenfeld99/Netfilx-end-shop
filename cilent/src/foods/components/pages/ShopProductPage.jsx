import React, { useEffect } from "react";
import { useState } from "react";
import Cart from "../cart/Cart";
import ImagesGalery from "../components/productPage/ImagesGalery";
import Reviews from "../components/productPage/Reviews";
import Sizes from "../components/productPage/Sizes";
import DetailesEndDes from "../components/productPage/DetailesEndDes";
import Nav from "../components/productPage/Nav";
import { product } from "../components/productPage/dataProductPage";
import useShop from "../../../hooks/useShop";
import { useParams } from "react-router-dom";
import ProductCompletion from "./ProductCompletion";
import ProductOverviews from "../components/overviews/ProductOverviews";

const FoodProductPage = () => {
  const { error, loading, singleProduct, fetchProductsByid, handelrAddtoCart } =
    useShop();
  // console.log(cart.length);
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    fetchProductsByid(id);
  }, [id]);
  // console.log(singleProduct);

  const reviews = { href: "#", average: 4, totalCount: 117 };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const onAddToCart = () => {
    const cartItem = {
      id: singleProduct?._id,
      name: singleProduct?.name,
      href: `shop/product/${singleProduct?._id}`,
      imageSrc: singleProduct?.imageBanner?.imageSrc,
      imageAlt: singleProduct?.imageBanner?.imageAlt,
      price: singleProduct?.price,
      quantity: 1,
      description: singleProduct?.description,
      size: selectedSize?.name,
    };
    handelrAddtoCart(cartItem);
  };

  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  // console.log(selectedSize);
  return (
    <div className=" max-w-6xl mx-auto">
      {/* <Cart /> */}
      <div dir="rtl" className="pt-6">
        {/* map site */}
        <nav aria-label="Breadcrumb">
          <Nav product={singleProduct} />
        </nav>

        {/* Image gallery */}
        <ImagesGalery product={singleProduct} />

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-400 sm:text-3xl">
              {singleProduct.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">מידע על הפריט</h2>
            <p className="text-3xl tracking-tight text-gray-100">
              {singleProduct.price} ₪
            </p>

            {/* Reviews */}
            <Reviews reviews={reviews} classNames={classNames} />

            <form className="mt-10">
              {/* Sizes */}
              {singleProduct?.sizes?.length > 0 ? (
                <Sizes
                  classNames={classNames}
                  product={singleProduct}
                  selectedSize={selectedSize}
                  setSelectedSize={setSelectedSize}
                />
              ) : null}
              {/*  */}

              <button
                type="button"
                onClick={onAddToCart}
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                הוסף לשקית
              </button>
            </form>
          </div>

          {/* Description and details */}
          <DetailesEndDes product={singleProduct} />
          {/*  */}
        </div>
        {/* product completion */}
        <ProductCompletion isHovered={isHovered} setIsHovered={setIsHovered} setOpen={setOpen}/>
      </div>
      {/* product over quickviews */}
      {/* <ProductOverviews
        open={open}
        setOpen={setOpen}
        product={product}
        setIsHovered={setIsHovered}
      /> */}
    </div>
  );
};

export default FoodProductPage;
