import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Name from "./properties/Name";
import Description from "./properties/Description";
import Category from "./properties/Category";
import ImgEndAlt from "./properties/ImgEndAlt";
import Featrued from "./properties/Featrued";
import Sections from "./properties/sections/Sections";
import useShop from "../../../../hooks/useShop";
import Btns from "./properties/Btns";

const CategoryForm = ({ singleCategory }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { editCategory, addNewCategory } = useShop();

  const [featured, setFeatured] = useState(
    singleCategory?.featured || [
      { imageSrc: "", imageAlt: "", name: "", href: "" },
    ]
  );
  // console.log(featured);
  const [addItems, setAddItems] = useState([]);
  // console.log(secItems);

  const [items_Ar, setItems_Ar] = useState([
    singleCategory?.sections[0]?.items || [],
    singleCategory?.sections[1]?.items || [],
    singleCategory?.sections[2]?.items || [],
  ]);
  const [sections, setSections] = useState(
    singleCategory?.sections || [
      {
        id: "",
        name: "",
        items: singleCategory ? items_Ar : addItems,
      },
    ]
  );
  console.log(sections[0].items);

  const onSubmit = (bodyData) => {
    bodyData.featured = featured;
    bodyData.sections = sections;

    const res = {
      bodyData,
      id: singleCategory?._id,
    };
    console.log(res);
    {
      singleCategory ? editCategory(res) : addNewCategory(res);
    }
  };

  // console.log(sections);
  return (
    <div className="py-16">
      <form
        // dir="rtl"
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl lg:max-w-4xl mx-auto px-5 py-10 lg:px-10 lg:py-20 bg-black mt-20 rounded-sm"
      >
        <h2 className="text-xl text-center pb-14 font-bold text-white">
          {singleCategory ? "Edit Category" : "Add Category"}
        </h2>
        {/* --- properties --- */}
        <div className=" lg:flex lg:justify-between gap-3">
          <div className=" flex-col min-w-[300px]">
            {/* name */}
            <Name
              errors={errors}
              register={register}
              singleCategory={singleCategory}
            />
            {/* description */}
            <Description
              errors={errors}
              register={register}
              singleCategory={singleCategory}
            />
            {/* category */}
            <Category register={register} singleCategory={singleCategory} />
            {/* image banner Alt end Src */}
            <ImgEndAlt register={register} singleCategory={singleCategory} />
          </div>
          {/* featrued */}
          {/* {featured.length > 0 && ( */}
            <Featrued
              register={register}
              setFeatured={setFeatured}
              featured={featured}
            />
          {/* )} */}
        </div>
        {/* sections */}
        <Sections
          setAddItems={setAddItems}
          addItems={addItems}
          sections={sections}
          setSections={setSections}
          items_Ar={items_Ar}
          setItems_Ar={setItems_Ar}
        />
        {/* Btns Controler */}
        <Btns singleCategory={singleCategory} />
      </form>
    </div>
  );
};

export default CategoryForm;
