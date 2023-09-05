import React from "react";

const Description = ({editItem,register,errors}) => {
  return (
    <div className="mb-6">
      <label
        htmlFor="description"
        className="block text-sm font-bold mb-2"
      >
        Description
      </label>
      <textarea
        type="text"
        id="description"
        name="description"
        defaultValue={editItem?.description}
        placeholder="Enter description"
        className="my-2 p-4 w-full p-15 bg-[#444] rounded-md"
        {...register("description", {
          required: "Description is required",
        })}
      />
      {errors.description && (
        <span className="text-red-500">{errors.description.message}</span>
      )}
    </div>
  );
};

export default Description;
