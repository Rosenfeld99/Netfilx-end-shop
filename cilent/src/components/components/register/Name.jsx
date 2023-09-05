import React from "react";

const Name = ({ register }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Name "
        className="my-2 p-4 w-full p-15 bg-[#333] border-none rounded-md text-white"
        {...register("name", {
          required: "name is required",
          minLength: {
            value: 2,
            message: "name short for 2 chars",
          },
          maxLength: {
            value: 15,
            message: "name length for 10 chars",
          },
        })}
      />
    </div>
  );
};

export default Name;
