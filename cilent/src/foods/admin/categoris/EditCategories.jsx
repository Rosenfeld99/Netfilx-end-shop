import React, { useEffect, useState } from "react";
import useShop from "../../../hooks/useShop";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import BtnShowImg from "../products/forms/properties/BtnShowImg";
import CategoryForm from "./form/CategoryForm";

const EditCategories = () => {
  const { fetchCategoryById, singleCategory } = useShop();
  const { id } = useParams();

  useEffect(() => {
    fetchCategoryById(id);
  }, []);
  // console.log(singleCategory);

  // console.log(singleCategory?.featured);
  // console.log(id);
  return (
    <div className=" mt-20">
      {singleCategory?._id && <CategoryForm singleCategory={singleCategory} />}
    </div>
  );
};

export default EditCategories;
