import React from "react";

const Password = ({register}) => {
  return (
    <div>
      <input
        className="my-2 p-4 pasword w-full p-15 bg-[#333] border-none rounded-md"
        type="password"
        placeholder="Password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
          maxLength: {
            value: 10,
            message: "Password must not exceed 10 characters",
          },
        })}
      />
    </div>
  );
};

export default Password;
