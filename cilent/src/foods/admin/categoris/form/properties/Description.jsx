import React from "react";

const Description = ({ singleCategory, register, errors }) => {
  return (
    <div className="mb-6">
      <label
        htmlFor="description"
        className="block text-sm font-bold mb-2"
      >
        description
      </label>
      <input
        type="text"
        placeholder="description"
        defaultValue={singleCategory?.description}
        className="my-2 p-4 w-full p-15 bg-[#444] rounded-md"
        {...register("description", {
          required: "description is required",
          minLength: {
            value: 2,
            message: "description should be at least 2 characters",
          },
          maxLength: {
            value: 150,
            message: "description should not exceed 15 characters",
          },
        })}
      />
      {errors.description && (
        <span className="text-red-500">{errors.description.message}</span>
      )}
    </div>
  );
};

export default Description;
