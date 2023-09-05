import { BsTrash3Fill, BsPlusLg } from "react-icons/bs";
import Items from "./Items";

const Sections = ({
  sections,
  setSections,
  addItems,
  setAddItems,
  items_Ar,
  setItems_Ar,
}) => {
  const handleNameChange = (index, event) => {
    const updatedImages = [...sections];
    updatedImages[index] = {
      ...updatedImages[index],
      name: event.target.value,
    };
    setSections(updatedImages);
  };
  // console.log(secItems);
  const handleIdChange = (index, event) => {
    const updatedImages = [...sections];
    updatedImages[index] = {
      ...updatedImages[index],
      id: event.target.value,
    };
    setSections(updatedImages);
  };

  const handleItems_ArChange = (indexSection) => {
    console.log(indexSection);
    const updatedItems_Ar = [...sections];
    updatedItems_Ar[indexSection] = {
      ...updatedItems_Ar[indexSection],
      items: items_Ar[indexSection],
    };
    setSections(updatedItems_Ar);
  };

  const handleAddSections = () => {
    setSections([...sections, { id: "", name: "", items: items_Ar }]);
  };

  const handleRemoveSections = (index) => {
    setSections((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });
  };

  console.log(items_Ar);

  return (
    <div className="mb-6">
      <label htmlFor="images" className="block text-sm font-bold mb-2">
        Sections
      </label>
      {sections?.map((section, index) => (
        <div key={index}>
          <div className="mb-2 flex items-center">
            <div className=" w-full max-w-xl">
              <input
                type="text"
                placeholder="Enter name sections"
                className="my-2 p-4 w-full p-15 rounded-md"
                defaultValue={section?.name ? section?.name : null}
                onChange={(event) => handleNameChange(index, event)}
              />
              <div className=" flex items-center">
                <input
                  type="text"
                  placeholder="Enter id sections"
                  className="my-2 p-4 w-full p-15 rounded-md"
                  defaultValue={section?.id ? section?.id : null}
                  onChange={(event) => handleIdChange(index, event)}
                />
                {/* items */}
                <Items
                  handleItems_ArChange={handleItems_ArChange}
                  indexSection={index}
                  sections={sections}
                  setSections={setSections}
                  setAddItems={setAddItems}
                  addItems={addItems}
                  items_Ar={items_Ar}
                  setItems_Ar={setItems_Ar}
                />
              </div>
            </div>
            <div>
              <button
                type="button"
                className="m-2 px-3 py-2 bg-red-800 text-white rounded-md hover:bg-red-900 focus:outline-none focus:bg-red-600"
                onClick={() => handleRemoveSections(index)}
              >
                <BsTrash3Fill />
              </button>
            </div>
          </div>
        </div>
      ))}
      <button
        type="button"
        className="bg-[#308a0d] text-white py-2 px-4 rounded-md hover:bg-[#256b09]"
        onClick={handleAddSections}
      >
        <div className="flex items-center gap-2">
          <span> Add Section</span>
          <BsPlusLg className=" text-xl" />
        </div>
      </button>
    </div>
  );
};

export default Sections;
