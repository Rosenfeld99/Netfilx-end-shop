import React from "react";

const Enterance = ({ register, singleAddress }) => {
  return (
    <div>
      <input
        defaultValue={singleAddress?.entrance}
        type="text"
        placeholder="כניסה "
        className="my-2 p-4 w-full p-15 bg-[#333] border-none rounded-md"
        {...register("entrance", {
          required: "כניסה חובה",
          minLength: {
            value: 1,
            message: "entrance short for 1 chars",
          },
          maxLength: {
            value: 100,
            message: "entrance length for 100 chars",
          },
        })}
      />
    </div>
  );
};

export default Enterance;
