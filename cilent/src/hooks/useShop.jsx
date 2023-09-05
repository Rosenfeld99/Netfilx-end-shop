import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAddress,
  addCategory,
  addProduct,
  deleteAddress,
  editAddress,
  editCategoryById,
  editProduct,
  getAddress,
  getAllproducts,
  getCategories,
  getCategoryById,
  getSearchProduct,
  getSingleAddress,
  getSingleProduct,
  getproductsByCat,
  handelGest,
  handleCart,
  handleRemoveFromCart,
} from "../redux/featrues/shopSlice";
import { CART_KEY } from "../constant/url";
import { resetFlag } from "../redux/featrues/saerchSlice";

const useShop = () => {
  const {
    loading,
    status,
    error,
    flag,
    allProducts,
    categories,
    productsCat,
    singleProduct,
    singleCategory,
    cartItems,
    searchProducts,
    address_Ar,
    singleAddress,
    gestAddress,
  } = useSelector((store) => store.shopReducer);
  const dispatch = useDispatch();

  const fetchCategories = () => {
    dispatch(getCategories());
  };
  const fetchCategoryById = (id) => {
    dispatch(getCategoryById(id));
  };
  const addNewCategory = (res) => {
    dispatch(addCategory(res));
  };
  const editCategory = (res) => {
    dispatch(editCategoryById(res));
  };
  const fetchAllProducts = () => {
    dispatch(getAllproducts());
  };
  const fetchProductsByCat = (cat) => {
    dispatch(getproductsByCat(cat));
  };
  const fetchProductsByid = (id) => {
    dispatch(getSingleProduct(id));
  };
  const fetchProductsBySearch = (qurey) => {
    dispatch(getSearchProduct(qurey));
  };
  const handelrAddProduct = (_bodyData) => {
    dispatch(addProduct(_bodyData));
  };
  const handelrEditProduct = (res) => {
    dispatch(editProduct(res));
  };
  const handelrGetAddress = (bodyData) => {
    dispatch(getAddress(bodyData));
  };
  const handelrGetSingleAddress = (bodyData) => {
    dispatch(getSingleAddress(bodyData));
  };
  const handelrAddAddress = (bodyData) => {
    dispatch(addAddress(bodyData));
  };
  const handelrEditAddress = (bodyData) => {
    dispatch(editAddress(bodyData));
  };
  const handelrDeleteAddress = (bodyData) => {
    dispatch(deleteAddress(bodyData));
  };
  const handelrAddtoCart = (cartItem) => {
    dispatch(handleCart(cartItem));
  };
  const handelrRemoveCart = (product) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem !== product);
    dispatch(handleRemoveFromCart(updatedCart));
  };
  const handelrResetFlag = () => {
    dispatch(resetFlag());
  };
  const handelrGestAddress = (address) => {
    dispatch(handelGest(address));
  };

  return {
    loading,
    status,
    error,
    flag,
    allProducts,
    categories,
    productsCat,
    singleProduct,
    singleCategory,
    cartItems,
    searchProducts,
    address_Ar,
    singleAddress,
    gestAddress,
    fetchAllProducts,
    fetchCategories,
    fetchProductsByCat,
    fetchProductsByid,
    handelrAddProduct,
    handelrEditProduct,
    fetchCategoryById,
    editCategory,
    addNewCategory,
    handelrRemoveCart,
    handelrAddtoCart,
    fetchProductsBySearch,
    handelrAddAddress,
    handelrEditAddress,
    handelrGetAddress,
    handelrGetSingleAddress,
    handelrDeleteAddress,
    handelrResetFlag,
    handelrGestAddress,
  };
};

export default useShop;
