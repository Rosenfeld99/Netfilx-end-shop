import React from "react";

const PriceEndHref = ({editItem,register,errors}) => {
  return (
    <div>
      <div className="mb-6">
        <label
          htmlFor="price"
          className="block text-sm font-bold mb-2"
        >
          Price
        </label>
        <input
          type="text"
          id="price"
          name="price"
          defaultValue={editItem?.price}
          placeholder="Enter price"
          className="my-2 p-4 w-full p-15 bg-[#444] rounded-md"
          {...register("price", {
            required: "price is required",
          })}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="href"
          className="block text-sm font-bold mb-2"
        >
          Href
        </label>
        <input
          type="text"
          id="href"
          name="href"
          defaultValue={editItem?.href}
          placeholder="Enter href"
          className="my-2 p-4 w-full p-15 bg-[#444] rounded-md"
          {...register("href", {
            required: "href is required",
          })}
        />
      </div>
    </div>
  );
};

export default PriceEndHref;
