import React from "react";

const Street = ({ register, singleAddress }) => {
  return (
    <div>
      <input
        defaultValue={singleAddress?.street}
        type="text"
        placeholder="רחוב "
        className="my-2 p-4 w-full p-15 bg-[#333] border-none rounded-md"
        {...register("street", {
          required: "רחוב חובה",
          minLength: {
            value: 2,
            message: "street short for 2 chars",
          },
          maxLength: {
            value: 20,
            message: "street length for 20 chars",
          },
        })}
      />
    </div>
  );
};

export default Street;
