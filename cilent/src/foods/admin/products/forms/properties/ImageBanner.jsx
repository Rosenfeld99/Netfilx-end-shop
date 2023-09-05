import React, { useRef, useState } from "react";
import BtnShowImg from "./BtnShowImg";

const ImageBanner = ({ editItem, register }) => {
  const [value, setValue] = useState("");
  const handleImageSrcChange = (event) => {
    setValue(event?.target?.value);
    console.log(value);
    // console.log(event?.target?.value);
  };

  return (
    <div>
      <div className="mb-6">
        <label
          htmlFor="imageBannerAlt"
          className="block text-sm font-bold mb-2"
        >
          Image Alt Text
        </label>
        <input
          type="text"
          id="imageBannerAlt"
          name="imageBannerAlt"
          defaultValue={editItem?.imageBanner?.imageAlt}
          placeholder="Enter image alt text"
          className="my-2 p-4 w-full p-15 bg-[#444] rounded-md"
          {...register("imageBannerAlt", {
            required: "imageBannerAlt is required",
          })}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="imageBannerSrc"
          className="block text-sm font-bold mb-2"
        >
          Image Source
        </label>
        <div className=" flex items-center">
          <input
            type="text"
            id="imageBannerSrc"
            name="imageBannerSrc"
            defaultValue={editItem?.imageBanner?.imageSrc}
            placeholder="Enter image source"
            className="my-2 p-4 w-full p-15 bg-[#444] rounded-md"
            {...register("imageBannerSrc", {
              required: "imageBannerSrc is required",
            })}
            onChange={(event) => handleImageSrcChange(event)}
          />
          {/* show image modal */}
          <BtnShowImg
            imgSrc={
              editItem?.imageBanner?.imageSrc
                ? editItem?.imageBanner?.imageSrc
                : value
            }
            // imgAlt={editItem?.imageBanner?.imageAlt}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageBanner;
