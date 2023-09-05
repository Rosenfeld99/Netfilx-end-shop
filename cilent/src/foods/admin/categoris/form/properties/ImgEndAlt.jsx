import React from "react";
import BtnShowImg from "../../../products/forms/properties/BtnShowImg";

const ImgEndAlt = ({singleCategory,register}) => {
  return (
    <div>
      <div className="mb-6">
        <label
          htmlFor="imageAlt"
          className="block text-sm font-bold mb-2"
        >
          Image Alt Text
        </label>
        <input
          type="text"
          id="imageAlt"
          name="imageAlt"
          defaultValue={singleCategory?.imageAlt}
          placeholder="Enter image alt text"
          className="my-2 p-4 w-full p-15 bg-[#444] rounded-md"
          {...register("imageAlt", {
            required: "imageAlt is required",
          })}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="imageSrc"
          className="block text-sm font-bold mb-2"
        >
          Image Source
        </label>
        <div className=" flex items-center">
          <input
            type="text"
            id="imageSrc"
            name="imageSrc"
            defaultValue={singleCategory?.imageSrc}
            placeholder="Enter image source"
            className="my-2 p-4 w-full p-15 bg-[#444] rounded-md"
            {...register("imageSrc", {
              required: "imageSrc is required",
            })}
            // onChange={(event) => handleImageSrcChange(event)}
          />
          {/* show image modal */}
          <BtnShowImg
            imgSrc={singleCategory?.imageSrc ? singleCategory?.imageSrc : null}
            // imgAlt={editItem?.imageBanner?.imageAlt}
          />
        </div>
      </div>
    </div>
  );
};

export default ImgEndAlt;
