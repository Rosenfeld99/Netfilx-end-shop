import React from "react";

const ZipCode = ({ register, singleAddress }) => {
  return (
    <div>
      <input
        defaultValue={singleAddress?.zipCode}
        type="text"
        placeholder="מיקוד "
        className="my-2 p-4 w-full p-15 bg-[#333] border-none rounded-md"
        {...register("zipCode", {
          required: "מיקוד חובה",
          minLength: {
            value: 1,
            message: "zipCode short for 2 chars",
          },
          maxLength: {
            value: 999999999,
            message: "zipCode length for 10 chars",
          },
        })}
      />
    </div>
  );
};

export default ZipCode;
