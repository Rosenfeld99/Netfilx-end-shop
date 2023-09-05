import React from "react";
import { BsTrash3Fill, BsPlusLg } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiCloseCircleLine } from "react-icons/ri";

const Sizes = ({ sizes, register, setSizes }) => {
  const handleAddSize = () => {
    setSizes([...sizes, { name: "", inStock: false }]);
  };

  const handleRemoveSize = (index) => {
    setSizes((prevSizes) => {
      const updatedSizes = [...prevSizes];
      updatedSizes.splice(index, 1);
      return updatedSizes;
    });
  };

  const handleToggleSizeStock = (index) => {
    setSizes((prevSizes) => {
      const updatedSizes = [...prevSizes];
      updatedSizes[index] = {
        ...updatedSizes[index],
        inStock: !updatedSizes[index].inStock,
      };
      return updatedSizes;
    });
  };

  const handleSizeNameChange = (index, event) => {
    if (event.target.value.trim() !== "") {
      const updatedSizes = [...sizes];
      updatedSizes[index] = {
        ...updatedSizes[index],
        name: event.target.value,
      };
      setSizes(updatedSizes);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Sizes</h2>
      {sizes.map((size, index) => (
        <div key={index} className="mb-4">
          <label htmlFor={`size-${index}`} className="block font-semibold">
            Size {index + 1}
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id={`size-${index}`}
              {...register(`sizes[${index}].name`, {
                required: "Name is required",
                minLength: {
                  value: 1,
                  message: "Name should be at least 1 character",
                },
                maxLength: {
                  value: 15,
                  message: "Name should not exceed 15 characters",
                },
              })}
              defaultValue={size?.name}
              onChange={(e) => handleSizeNameChange(index, e)}
              placeholder="S,M,L,XL"
              className="mr-2 px-3 py-2 bg-[#444] rounded-md"
            />

            <button
              type="button"
              onClick={() => handleToggleSizeStock(index)}
              className={`px-3 py-2 rounded-md ${
                size.inStock
                  ? "bg-green-800 text-white"
                  : "bg-red-600 text-white"
              }`}
            >
              {size.inStock ? (
                <div className=" flex items-center gap-2">
                  <span>In Stock</span>
                  <FaRegCheckCircle />
                </div>
              ) : (
                <div className=" flex items-center gap-2">
                  <span>Out of Stock</span>
                  <RiCloseCircleLine />
                </div>
              )}
            </button>
            <button
              type="button"
              onClick={() => handleRemoveSize(index)}
              className="ml-2 px-3 py-2 bg-red-800 text-white rounded-md hover:bg-red-900 focus:outline-none focus:bg-red-600"
            >
              <BsTrash3Fill />
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddSize}
        className="bg-[#308a0d] text-white py-2 px-4 rounded-md hover:bg-[#256b09]"
      >
        <div className="flex items-center gap-2">
          <span>Add Size</span>
          <BsPlusLg className=" text-xl" />
        </div>
      </button>
    </div>
  );
};

export default Sizes;
