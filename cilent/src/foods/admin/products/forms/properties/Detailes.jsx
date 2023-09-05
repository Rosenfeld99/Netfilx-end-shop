import React from "react";

const Detailes = ({ editItem, register, errors }) => {
  return (
    <div className="mb-6">
      <label
        htmlFor="details"
        className="block text-sm font-bold mb-2"
      >
        Details
      </label>
      <textarea
        type="text"
        id="details"
        name="details"
        defaultValue={editItem?.details}
        placeholder="Enter details"
        className="my-2 p-4 w-full p-15 bg-[#444] rounded-md"
        {...register("details", {
          required: "details is required",
        })}
      />
      {errors.details && (
        <span className="text-red-500">{errors.details.message}</span>
      )}
    </div>
  );
};

export default Detailes;
