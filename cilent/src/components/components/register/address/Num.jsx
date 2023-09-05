import React from "react";

const Num = ({ register, singleAddress }) => {
  return (
    <div>
      <input
        defaultValue={singleAddress?.num}
        type="text"
        placeholder="מספר דירה "
        className="my-2 p-4 w-full p-15 bg-[#333] border-none rounded-md"
        {...register("num", {
          required: "מספר דירה חובה",
          minLength: {
            value: 1,
            message: "num short for 1 chars",
          },
          maxLength: {
            value: 300,
            message: "num length for 300 chars",
          },
        })}
      />
    </div>
  );
};

export default Num;
