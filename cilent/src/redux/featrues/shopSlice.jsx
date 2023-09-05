import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiGet, apiMethod, apiPost } from "../../services/services";
import {
  CART_KEY,
  CATEGORIES_ROUT,
  GEST_ADDRES,
  PRODUCT_ROUT,
  USER_ROUTE,
} from "../../constant/url";
import { toastMsg } from "../../../utils/toastify/ToastifyMsg";

// Get categories
export const getCategories = createAsyncThunk(
  "shop/getCategories",
  async (thunkAPI) => {
    try {
      const { data } = await apiGet(CATEGORIES_ROUT);
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);

// Get category by id
export const getCategoryById = createAsyncThunk(
  "shop/getCategoryById",
  async (id, thunkAPI) => {
    try {
      const { data } = await apiGet(`${CATEGORIES_ROUT}/${id}`);
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);

// Add category
export const addCategory = createAsyncThunk(
  "shop/addCategory",
  async (res, thunkAPI) => {
    try {
      const { data } = await apiMethod(CATEGORIES_ROUT, "POST", res.bodyData);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);

// Edit category by id
export const editCategoryById = createAsyncThunk(
  "shop/editCategoryById",
  async (res, thunkAPI) => {
    try {
      const data = await apiMethod(
        `${CATEGORIES_ROUT}/${res.id}`,
        "PUT",
        res.bodyData
      );
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);

// Get all products
export const getAllproducts = createAsyncThunk(
  "shop/getAllproducts",
  async (thunkAPI) => {
    try {
      const { data } = await apiGet(PRODUCT_ROUT);
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);

// Get products by categories
export const getproductsByCat = createAsyncThunk(
  "shop/getproductsByCat",
  async (cat, thunkAPI) => {
    try {
      const { data } = await apiGet(PRODUCT_ROUT + `?category=${cat}`);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);

// Get products by id
export const getSingleProduct = createAsyncThunk(
  "shop/getSingleProduct",
  async (id, thunkAPI) => {
    try {
      const { data } = await apiGet(`${PRODUCT_ROUT}/${id}`);
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);
// Search products by name
export const getSearchProduct = createAsyncThunk(
  "shop/getSearchProduct",
  async (query, thunkAPI) => {
    try {
      const { data } = await apiGet(`${PRODUCT_ROUT}?s=${query}`);
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);

// Add product
export const addProduct = createAsyncThunk(
  "shop/addProduct",
  async (_bodyData, thunkAPI) => {
    try {
      const { data } = await apiPost(PRODUCT_ROUT, _bodyData);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);
// Edit product
export const editProduct = createAsyncThunk(
  "shop/editProduct",
  async (res, thunkAPI) => {
    try {
      const data = await apiMethod(
        `${PRODUCT_ROUT}/${res.editId}`,
        "PUT",
        res.bodyData
      );
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);
// Get address
export const getAddress = createAsyncThunk(
  "shop/getAddress",
  async (bodyData, thunkAPI) => {
    console.log(bodyData);
    try {
      const url = `${USER_ROUTE}/getAddress/${bodyData.userId}/${bodyData.screenId}`;
      const data = await apiMethod(url, "GET", {});
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);
// Get single address
export const getSingleAddress = createAsyncThunk(
  "shop/getSingleAddress",
  async (bodyData, thunkAPI) => {
    try {
      const data = await apiMethod(
        USER_ROUTE +
          `/getSingleAddress?userId=${bodyData.userId}&screenId=${bodyData.screenId}&addressId=${bodyData.addressId}`,
        "GET",
        {}
      );
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);
// Add address
export const addAddress = createAsyncThunk(
  "shop/addAddress",
  async (bodyData, thunkAPI) => {
    try {
      const data = await apiMethod(
        USER_ROUTE + "/addAddress",
        "POST",
        bodyData
      );
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);
// Edit address
export const editAddress = createAsyncThunk(
  "shop/editAddress",
  async (bodyData, thunkAPI) => {
    try {
      const data = await apiMethod(
        USER_ROUTE + "/editAddress",
        "PUT",
        bodyData
      );
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);
// Delete address
export const deleteAddress = createAsyncThunk(
  "shop/deleteAddress",
  async (bodyData, thunkAPI) => {
    try {
      const data = await apiMethod(
        USER_ROUTE + "/deleteAddress",
        "DELETE",
        bodyData
      );
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);

const initialState = {
  categories: [],
  singleCategory: {},
  allProducts: [],
  productsCat: [],
  searchProducts: [],
  singleProduct: {},
  loading: true,
  error: null,
  flag: false,
  cartItems: JSON.parse(localStorage.getItem(CART_KEY)) || [],
  singleAddress: {},
  address_Ar: [],
  gestAddress: JSON.parse(localStorage.getItem(GEST_ADDRES)) || [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  extraReducers: (builder) => {
    builder
      // Get categories
      // panding
      .addCase(getCategories.pending, (state, action) => {
        state.loading = true;
      })
      // fullfild
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.flag = true;
        // console.log(state.categories);
        state.loading = false;
      })
      // rejected
      .addCase(getCategories.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      // Get category by id
      // panding
      .addCase(getCategoryById.pending, (state, action) => {
        state.loading = true;
      })
      // fullfild
      .addCase(getCategoryById.fulfilled, (state, action) => {
        state.singleCategory = action.payload;
        state.flag = true;
        // console.log(state.singleCategory);
        state.loading = false;
      })
      // rejected
      .addCase(getCategoryById.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      // Add category
      // panding
      .addCase(addCategory.pending, (state, action) => {
        state.loading = true;
      })
      // fullfild
      .addCase(addCategory.fulfilled, (state, action) => {
        state.singleCategory = action.payload;
        state.flag = true;
        // console.log(state.singleCategory);
        state.loading = false;
      })
      // rejected
      .addCase(addCategory.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      // Edit category by id
      // panding
      .addCase(editCategoryById.pending, (state, action) => {
        state.loading = true;
      })
      // fullfild
      .addCase(editCategoryById.fulfilled, (state, action) => {
        state.singleCategory = action.payload;
        state.flag = true;
        // console.log(state.singleCategory);
        state.loading = false;
      })
      // rejected
      .addCase(editCategoryById.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      // Get all products
      // panding
      .addCase(getAllproducts.pending, (state, action) => {
        state.loading = true;
      })
      // fullfild
      .addCase(getAllproducts.fulfilled, (state, action) => {
        state.allProducts = action.payload;
        state.flag = true;
        // console.log(state.allProducts);
        state.loading = false;
      })
      // rejected
      .addCase(getAllproducts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      // Get products by categories
      // panding
      .addCase(getproductsByCat.pending, (state, action) => {
        state.loading = true;
      })
      // fullfild
      .addCase(getproductsByCat.fulfilled, (state, action) => {
        state.productsCat = action.payload;
        state.flag = true;
        // console.log(state.productsCat);
        state.loading = false;
      })
      // rejected
      .addCase(getproductsByCat.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      // Get product by id
      // panding
      .addCase(getSingleProduct.pending, (state, action) => {
        state.loading = true;
      })
      // fullfild
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.singleProduct = action.payload;
        state.flag = true;
        // console.log(state.singleProduct);
        state.loading = false;
      })
      // rejected
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      // Search product by name
      // panding
      .addCase(getSearchProduct.pending, (state, action) => {
        state.loading = true;
      })
      // fullfild
      .addCase(getSearchProduct.fulfilled, (state, action) => {
        state.searchProducts = action.payload;
        state.flag = true;
        // console.log(state.searchProducts);
        state.loading = false;
      })
      // rejected
      .addCase(getSearchProduct.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      // Add product
      // panding
      .addCase(addProduct.pending, (state, action) => {
        state.loading = true;
      })
      // fullfild
      .addCase(addProduct.fulfilled, (state, action) => {
        console.log(action.payload);
        if (action?.payload?._id) {
          toastMsg(
            "Product Added",
            "linear-gradient(to right, #000, #fc1818be)"
          );
        }
        state.flag = true;
        state.loading = false;
      })
      // rejected
      .addCase(addProduct.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      // Edit product
      // panding
      .addCase(editProduct.pending, (state, action) => {
        state.loading = true;
      })
      // fullfild
      .addCase(editProduct.fulfilled, (state, action) => {
        // console.log(action.payload);
        if (action.payload.modifiedCount === 1) {
          toastMsg(
            "Product Updated",
            "linear-gradient(to right, #000, #fc1818be)"
          );
        }
        state.flag = true;
        state.loading = false;
      })
      // rejected
      .addCase(editProduct.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      // Get address
      // panding
      .addCase(getAddress.pending, (state, action) => {
        state.loading = true;
      })
      // fullfild
      .addCase(getAddress.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.address_Ar = action.payload;
        state.flag = true;
        state.loading = false;
      })
      // rejected
      .addCase(getAddress.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      // Get single address
      // panding
      .addCase(getSingleAddress.pending, (state, action) => {
        state.loading = true;
      })
      // fullfild
      .addCase(getSingleAddress.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.singleAddress = action.payload;
        state.flag = true;
        state.loading = false;
      })
      // rejected
      .addCase(getSingleAddress.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      // Add address
      // panding
      .addCase(addAddress.pending, (state, action) => {
        state.loading = true;
      })
      // fullfild
      .addCase(addAddress.fulfilled, (state, action) => {
        // console.log(action.payload);
        if (action.payload.length > state.address_Ar.length) {
          state.address_Ar = action.payload;
          toastMsg("כתובת נוספה", "linear-gradient(to right, #000, #fc1818be)");
        }
        state.flag = true;
        state.loading = false;
      })
      // rejected
      .addCase(addAddress.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      // Edit address
      // panding
      .addCase(editAddress.pending, (state, action) => {
        state.loading = true;
      })
      // fullfild
      .addCase(editAddress.fulfilled, (state, action) => {
        // console.log(action.payload);
        if (action.payload.dataChanged) {
          state.address_Ar = action.payload.data;
          toastMsg(
            "כתובת עודכנה",
            "linear-gradient(to right, #000, #fc1818be)"
          );
        }
        state.flag = true;
        state.loading = false;
      })
      // rejected
      .addCase(editAddress.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      // Delete address
      // panding
      .addCase(deleteAddress.pending, (state, action) => {
        state.loading = true;
      })
      // fullfild
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.address_Ar = action.payload.address;
        // console.log(action.payload);
        if (action.payload) {
          toastMsg("כתובת נמחקה", "linear-gradient(to right, #000, #fc1818be)");
        }
        state.flag = true;
        state.loading = false;
      })
      // rejected
      .addCase(deleteAddress.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
  reducers: {
    resetFlag: (state) => {
      state.flag = false;
    },
    // on Add To Cart
    handleCart: (state, action) => {
      const updatedCart = [...state.cartItems, action.payload];
      console.log(action.payload);
      state.cartItems = updatedCart;
      console.log(state.cartItems);
      saveCartToLocal(state.cartItems, CART_KEY);
    },

    // on Delete To Cart
    handleRemoveFromCart: (state, action) => {
      console.log(action.payload);
      state.cartItems = action.payload;
      saveCartToLocal(state.cartItems, CART_KEY);
    },
    handelGest: (state, action) => {
      const gest = [...state.gestAddress, action.payload];
      state.gestAddress = gest;
      saveCartToLocal(state.gestAddress, GEST_ADDRES);
    },
  },
});

// save to local
const saveCartToLocal = (value, key) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export default shopSlice.reducer;
export const { resetFlag, handleCart, handleRemoveFromCart, handelGest } =
  shopSlice.actions;
