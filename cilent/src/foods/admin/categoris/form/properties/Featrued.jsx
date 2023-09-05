// import BtnShowImg from "./BtnShowImg";
import { BsTrash3Fill, BsPlusLg } from "react-icons/bs";
import BtnShowImg from "../../../products/forms/properties/BtnShowImg";

const Featured = ({ featured, setFeatured }) => {
  const handleImageAltChange = (index, event) => {
    const updatedImages = [...featured];
    updatedImages[index] = {
      ...updatedImages[index],
      imageAlt: event.target.value,
    };
    setFeatured(updatedImages);
  };

  const handleImageSrcChange = (index, event) => {
    const updatedImages = [...featured];
    updatedImages[index] = {
      ...updatedImages[index],
      imageSrc: event.target.value,
    };
    setFeatured(updatedImages);
  };
  const handleNameChange = (index, event) => {
    const updatedImages = [...featured];
    updatedImages[index] = {
      ...updatedImages[index],
      name: event.target.value,
    };
    setFeatured(updatedImages);
  };
  const handlehrefChange = (index, event) => {
    const updatedImages = [...featured];
    updatedImages[index] = {
      ...updatedImages[index],
      href: event.target.value,
    };
    setFeatured(updatedImages);
  };

  const handleAddImage = () => {
    setFeatured([
      ...featured,
      { imageSrc: "", imageAlt: "", name: "", href: "" },
    ]);
  };

  const handleRemoveImage = (index) => {
    setFeatured((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });
  };

  return (
    <div className="mb-6">
      <label
        htmlFor="images"
        className="block text-sm font-bold mb-2"
      >
        Featured
      </label>
      {featured?.map((image, index) => (
        <div key={index} className="mb-2 flex items-center">
          <div className="w-full">
            <div>
              <input
                type="text"
                placeholder="Enter image source"
                className="my-2 p-4 w-full p-15 bg-[#444] rounded-md"
                defaultValue={image?.imageSrc}
                onChange={(event) => handleImageSrcChange(index, event)}
              />
              <input
                type="text"
                placeholder="Enter image alt text"
                className="my-2 p-4 w-full p-15 bg-[#444] rounded-md"
                defaultValue={image?.imageAlt ? image?.imageAlt : null}
                onChange={(event) => handleImageAltChange(index, event)}
              />
            </div>
            <div className=" flex items-center">
              <input
                type="text"
                placeholder="Enter href featured"
                className="my-2 p-4 w-full p-15 bg-[#444] rounded-md"
                defaultValue={image?.href ? image?.href : null}
                onChange={(event) => handlehrefChange(index, event)}
              />
              <input
                type="text"
                placeholder="Enter name featured"
                className="my-2 p-4 w-full p-15 bg-[#444] rounded-md ml-2"
                defaultValue={image?.name ? image?.name : null}
                onChange={(event) => handleNameChange(index, event)}
              />
            </div>
          </div>
          <div>
            <button
              type="button"
              className="m-2 px-3 py-2 bg-red-800 text-white rounded-md hover:bg-red-900 focus:outline-none focus:bg-red-600"
              onClick={() => handleRemoveImage(index)}
            >
              <BsTrash3Fill />
            </button>

            {/* show image modal */}
            <BtnShowImg imgAlt={image?.imageAlt} imgSrc={image?.imageSrc} />
          </div>
        </div>
      ))}
      <button
        type="button"
        className="bg-[#308a0d] text-white py-2 px-4 rounded-md hover:bg-[#256b09]"
        onClick={handleAddImage}
      >
        <div className="flex items-center gap-2">
          <span> Add Featrue</span>
          <BsPlusLg className=" text-xl" />
        </div>
      </button>
    </div>
  );
};

export default Featured;
