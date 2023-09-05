import React, { useEffect } from "react";
import ProductCompletion from "./ProductCompletion";
import { useNavigate, useParams } from "react-router-dom";
import ProductItem from "../components/productsList/ProductItem";
import { products } from "../components/productsList/dataProductList";
import useShop from "../../../hooks/useShop";
import List from "../../../../utils/list/List";

const FoodProductsList = ({ children }) => {
  const nav = useNavigate();

  const { loading, error, fetchProductsByCat, productsCat } = useShop();

  const { cat } = useParams();
  console.log(cat);

  useEffect(() => {
    fetchProductsByCat(cat);
  }, [cat]);

  console.log(productsCat);

  return (
    <List titel={cat} name={"מוצרים"}>
      {productsCat.map((product, i) => (
        <ProductItem product={product} nav={nav} key={i} />
      ))}
    </List>
  );
};

export default FoodProductsList;
