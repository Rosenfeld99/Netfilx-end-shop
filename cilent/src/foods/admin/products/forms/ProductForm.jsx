import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useShop from "../../../../hooks/useShop";
import Name from ".././forms/properties/Name";
import Description from ".././forms/properties/Description";
import Detailes from ".././forms/properties/Detailes";
import Category_url from ".././forms/properties/Category_url";
import PriceEndHref from ".././forms/properties/PriceEndHref";
import ImageBanner from ".././forms/properties/ImageBanner";
import CreatePro from "./properties/Highlights/CreatePro";
import Images from ".././forms/properties/Images";
import Sizes from ".././forms/properties/Sizes";
import Btns from ".././forms/properties/Btns";
import UpdatePro from "./properties/Highlights/UpdatePro";
import { useNavigate } from "react-router-dom";

const ProductForm = ({ editItem, id }) => {
  const { handelrAddProduct, fetchCategories, categories, handelrEditProduct } =
    useShop();
  // console.log(categories);
  const nav = useNavigate()

  useEffect(() => {
    fetchCategories();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [sizes, setSizes] = useState(
    editItem?.sizes || [{ name: "", inStock: false }]
  );
  const [images, setImages] = useState(
    editItem?.images || [{ src: "", alt: "" }]
  );
  const [highlights, setHighlights] = useState(editItem?.highlights || []);

  const onSubmit = (bodyData) => {
    const imageBanner = {
      imageSrc: bodyData.imageBannerSrc,
      imageAlt: bodyData.imageBannerAlt,
    };
    delete bodyData.imageBannerSrc;
    delete bodyData.imageBannerAlt;

    delete bodyData.category;

    bodyData.imageBanner = imageBanner;
    bodyData.highlights = highlights;
    bodyData.images = images;
    bodyData.sizes = sizes;

    console.log(bodyData);

    const res = {
      bodyData,
      editId: id,
    };
    console.log(res);
    {
      editItem?._id ? handelrEditProduct(res) : handelrAddProduct(res.bodyData);
    }
    nav(-1)
  };

  return (
    <div className=" py-16">
      {categories.length > 0 && (
        <form
          // dir="rtl"
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-xl lg:max-w-4xl mx-auto px-5 py-10 lg:px-10 lg:py-20 bg-black mt-20 rounded-sm "
        >
          <h2 className="text-xl text-center pb-14 font-bold text-white">
            {editItem ? "Edit Product" : "Add Product"}
          </h2>
          {/* --- properties --- */}
          <div className=" lg:flex lg:justify-center ">
            <div>
              {/* name */}
              <Name editItem={editItem} register={register} errors={errors} />
              {/* description */}
              <Description
                editItem={editItem}
                register={register}
                errors={errors}
              />
              {/* details */}
              <Detailes
                editItem={editItem}
                register={register}
                errors={errors}
              />
              {/* select catecories */}
              <Category_url
                errors={errors}
                editItem={editItem?.category_url}
                categories={categories}
                register={register}
              />
              {/* price end href */}
              <PriceEndHref
                editItem={editItem}
                errors={errors}
                register={register}
              />
            </div>
            <div className=" lg:px-5">
              {/* image banner Alt end Src */}
              <ImageBanner editItem={editItem} register={register} />
              {/* images */}
              {/* <Images images={images} setImages={setImages} /> */}
              {editItem?._id && editItem?.images.length > 0 ? (
                <Images
                  images={images}
                  setImages={setImages}
                  register={register}
                />
              ) : (
                <Images
                  images={images}
                  setImages={setImages}
                  register={register}
                />
              )}
              {/* highlights */}
              {editItem?._id && editItem?.highlights?.length > 0 ? (
                <UpdatePro
                  setHighlights={setHighlights}
                  highlights={highlights}
                />
              ) : (
                <CreatePro
                  highlights={highlights}
                  setHighlights={setHighlights}
                />
              )}

              {/* Sizes */}
              {editItem?._id && editItem?.sizes.length > 0 ? (
                <Sizes register={register} sizes={sizes} setSizes={setSizes} />
              ) : (
                <Sizes register={register} sizes={sizes} setSizes={setSizes} />
              )}
            </div>
          </div>
          {/* btn subnit */}
          <Btns editItem={editItem} />
        </form>
      )}
    </div>
  );
};

export default ProductForm;
