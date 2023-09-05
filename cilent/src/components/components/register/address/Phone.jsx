import React from "react";

const Phone = ({ register, singleAddress }) => {
  return (
    <div>
      <input
        defaultValue={singleAddress?.phone}
        type="text"
        placeholder="פלאפון "
        className="my-2 p-4 w-full p-15 bg-[#333] border-none rounded-md"
        {...register("phone", {
          required: "פלאפון חובה",
          minLength: {
            value: 1,
            message: "phone short for 1 chars",
          },
          maxLength: {
            value: 300,
            message: "phone length for 300 chars",
          },
        })}
      />
    </div>
  );
};

export default Phone;
