import React from "react";

const Name = ({ editItem, register, errors }) => {
  return (
    <div className="mb-6">
      <label
        htmlFor="name"
        className="block text-sm font-bold mb-2"
      >
        Name
      </label>
      <input
        type="text"
        placeholder="Name"
        defaultValue={editItem?.name}
        className="my-2 p-4 w-full p-15 bg-[#444] rounded-md"
        {...register("name", {
          required: "Name is required",
          minLength: {
            value: 2,
            message: "Name should be at least 2 characters",
          },
          maxLength: {
            value: 25,
            message: "Name should not exceed 25 characters",
          },
        })}
      />
      {errors.name && (
        <span className="text-red-500">{errors.name.message}</span>
      )}
    </div>
  );
};

export default Name;
