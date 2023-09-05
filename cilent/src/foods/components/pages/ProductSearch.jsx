import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useShop from "../../../hooks/useShop";
import List from "../../../../utils/list/List";
import ProductItem from "../components/productsList/ProductItem";
import SaerchNotFound from "../../../../utils/search/SaerchNotFound";
import ShopNotFound from "../components/searchProducts/ShopNotFound";

const ProductSearch = () => {
  const { fetchProductsBySearch, searchProducts } = useShop();
  const { query } = useParams();
  console.log(query);
  const nav = useNavigate();

  useEffect(() => {
    fetchProductsBySearch(query);
  }, [query]);
  console.log(searchProducts);
  return (
    <>
      {searchProducts.length > 0 ? (
        <List titel={query} name={"תוצאות חיפוש ל "}>
          {searchProducts.map((product, i) => (
            <ProductItem product={product} key={i} nav={nav} />
          ))}
        </List>
      ) : (
        <ShopNotFound nav={nav} />
      )}
    </>
  );
};

export default ProductSearch;
