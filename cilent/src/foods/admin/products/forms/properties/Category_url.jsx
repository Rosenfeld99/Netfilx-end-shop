import React from "react";

const Category_url = ({ categories, register, editItem }) => {
  // console.log(editItem);
  return (
    <select
      name="category_url"
      {...register("category_url", { required: "Please select a category" })}
      className="my-2 p-4 w-full bg-[#444] rounded-md"
      defaultValue={editItem ? editItem : ""}
    >
      {editItem && <option value={editItem}>{editItem}</option>}
      {editItem && <option disabled>-- Other categories --</option>}
      {categories
        .filter((category) => !editItem || category.url_name !== editItem)
        .map((category, index) => (
          <option key={index} value={category.url_name}>
            {category.url_name}
          </option>
        ))}
    </select>
  );
};

export default Category_url;
