import BtnShowImg from "./BtnShowImg";
import { BsTrash3Fill, BsPlusLg } from "react-icons/bs";

const Images = ({ images, setImages, register }) => {
  const handleImageAltChange = (index, event) => {
    const updatedImages = [...images];
    updatedImages[index] = { ...updatedImages[index], alt: event.target.value };
    setImages(updatedImages);
  };

  const handleImageSrcChange = (index, event) => {
    const updatedImages = [...images];
    updatedImages[index] = { ...updatedImages[index], src: event.target.value };
    setImages(updatedImages);
  };

  const handleAddImage = () => {
    setImages([...images, { src: "", alt: "" }]);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => {
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
        Images
      </label>
      {images.map((image, index) => (
        <div key={index} className="mb-2 flex items-center">
          <input
            type="text"
            placeholder="Enter image source"
            className="my-2 p-4 w-full p-15 bg-[#444] rounded-md"
            defaultValue={image?.src}
            onChange={(event) => handleImageSrcChange(index, event)}
            // {...register("imageBannerSrc", {
            //   required: "imageBannerSrc is required",
            // })}
          />
          <input
            type="text"
            placeholder="Enter image alt text"
            className="my-2 p-4 w-full p-15 bg-[#444] rounded-md ml-2"
            defaultValue={image?.alt ? image?.alt : null}
            onChange={(event) => handleImageAltChange(index, event)}
            // {...register("imageBannerSrc", {
            //   required: "imageBannerSrc is required",
            // })}
          />
          <button
            type="button"
            className="ml-2 px-3 py-2 bg-red-800 text-white rounded-md hover:bg-red-900 focus:outline-none focus:bg-red-600"
            onClick={() => handleRemoveImage(index)}
          >
            <BsTrash3Fill />
          </button>

          {/* show image modal */}
          <BtnShowImg imgAlt={image?.alt} imgSrc={image?.src} />
        </div>
      ))}
      <button
        type="button"
        className="bg-[#308a0d] text-white py-2 px-4 rounded-md hover:bg-[#256b09]"
        onClick={handleAddImage}
      >
        <div className="flex items-center gap-2">
          <span> Add Image</span>
          <BsPlusLg className=" text-xl" />
        </div>
      </button>
    </div>
  );
};

export default Images;
