import React from "react";

const City = ({ register, singleAddress }) => {
  return (
    <div className=" flex gap-3">
      <input
        defaultValue={singleAddress?.city}
        type="text"
        placeholder="עיר "
        className="my-2 p-4 w-full p-15 bg-[#333] border-none rounded-md"
        {...register("city", {
          required: "עיר חובה",
          minLength: {
            value: 2,
            message: "city short for 2 chars",
          },
          maxLength: {
            value: 20,
            message: "city length for 20 chars",
          },
        })}
      />
    </div>
  );
};

export default City;
