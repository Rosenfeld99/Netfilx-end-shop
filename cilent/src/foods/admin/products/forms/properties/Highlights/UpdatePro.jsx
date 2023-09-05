import React from "react";
import { BsTrash3Fill, BsPlusLg } from "react-icons/bs";

const UpdatePro = ({ setHighlights, highlights }) => {
  const handleHighlightChange = (index, value) => {
    const updatedHighlights = [...highlights];
    updatedHighlights[index] = value;
    setHighlights(updatedHighlights);
  };

  const handleAddHighlight = () => {
    setHighlights([...highlights, ""]);
  };

  const handleRemoveHighlight = (index) => {
    const updatedHighlights = [...highlights];
    updatedHighlights.splice(index, 1);
    setHighlights(updatedHighlights);
  };

  return (
    <div>
      <div className="mb-6">
        <label
          htmlFor="highlights"
          className="block text-sm font-bold mb-2"
        >
          Highlights
        </label>
        {highlights.map((highlight, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              placeholder="Enter highlight"
              className="my-2 p-4 w-full p-15 bg-[#444] rounded-md"
              value={highlight}
              onChange={(event) =>
                handleHighlightChange(index, event.target.value)
              }
            />
            <button
              type="button"
              className="ml-2 px-3 py-2 bg-red-800 text-white rounded-md hover:bg-red-900 focus:outline-none focus:bg-red-600"
              onClick={() => handleRemoveHighlight(index)}
            >
              <BsTrash3Fill />
            </button>
          </div>
        ))}
        <button
          type="button"
          className="bg-[#308a0d] text-white py-2 px-4 rounded-md hover:bg-[#256b09]"
          onClick={handleAddHighlight}
        >
          <div className="flex items-center gap-2">
            <span>Add Highlight</span>
            <BsPlusLg className=" text-xl" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default UpdatePro;
