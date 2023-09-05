import React, { useEffect } from "react";
import CatItem from "../categories/CatItem";
import useShop from "../../../hooks/useShop";

const FoodCategories = () => {
  const { error, loading, fetchCategories, categories } = useShop();

  useEffect(() => {
    fetchCategories();
  }, []);

  console.log(categories);
  return (
    <div dir="rtl" className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-white">תפריט</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {categories.map((callout) => (
              <CatItem callout={callout} key={callout._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCategories;
