import React from "react";

const Category = ({register,singleCategory}) => {
  return (
    <div className="mb-6">
      <label
        htmlFor="imageAlt"
        className="block text-sm font-bold mb-2"
      >
        url_name
      </label>
      <input
        type="text"
        id="url_name"
        name="url_name"
        defaultValue={singleCategory?.url_name}
        placeholder="Enter url_name"
        className="my-2 p-4 w-full p-15 bg-[#444] rounded-md"
        {...register("url_name", {
          required: "url_name is required",
        })}
      />
    </div>
  );
};

export default Category;
