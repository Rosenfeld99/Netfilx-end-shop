import useShop from "../../../../../../hooks/useShop";
import { useEffect } from "react";

const Items = ({
  items_Ar,
  setItems_Ar,
  indexSection,
  handleItems_ArChange,
}) => {
  const { fetchAllProducts, allProducts } = useShop();

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const handleAddItems = (item, indexSection) => {
    setItems_Ar((prevItems) => {
      const newItems = [...prevItems];
      const sectionItems = [...newItems[indexSection]]; // Create a deep copy

      const itemIndex = sectionItems.findIndex((val) => val?._id === item?._id);
      console.log(sectionItems);
      console.log(itemIndex);

      // If the item is already in the sub-array, remove it; otherwise, add it
      if (handleCheckboxChange(item, indexSection)) {
        sectionItems.splice(itemIndex, 1);
      } else {
        sectionItems.push({ name: item?.name, href: item?._id });
      }

      newItems[indexSection] = sectionItems; // Assign the modified copy back

      handleItems_ArChange(indexSection);
      console.log(newItems);
      return newItems;
    });
  };

  const handleCheckboxChange = (item, indexSection) => {
    const isChecked = items_Ar[indexSection].some(
      (elem) => elem.href === item._id
    );
    return isChecked ? true : false;
  };

  return (
    <div className="dropdown dropdown-top dropdown-end">
      <label tabIndex={0} className=" p-4 bg-[#444] rounded-sm m-1">
        Items
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] bg-[#444] rounded-sm w-72 h-72 overflow-auto border"
      >
        {allProducts?.length > 0 &&
          allProducts?.map((item, i) => (
            <li
              key={i}
              className=" p-2 border-t flex items-center gap-3 hover:bg-[#00000026]"
              onClick={() => {
                handleAddItems(item, indexSection);
              }}
            >
              <div>
                <label>
                  <input
                    onChange={() => handleItems_ArChange(indexSection)}
                    type="checkbox"
                    className="checkbox"
                    checked={handleCheckboxChange(item, indexSection)}
                  />
                </label>
              </div>
              <div>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item?.imageSrc} alt={item?.name} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item?.name}</div>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Items;
