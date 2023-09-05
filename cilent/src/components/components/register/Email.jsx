import React from "react";

const Email = ({ register }) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  return (
    <div>
      <input
        type="text"
        placeholder="Email "
        className="my-2 p-4 w-full p-15 bg-[#333] border-none rounded-md"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: emailRegex,
            message: "Invalid email address",
          },
        })}
      />
    </div>
  );
};

export default Email;
