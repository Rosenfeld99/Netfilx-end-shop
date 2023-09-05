import React, { useEffect } from "react";
import useShop from "../../../hooks/useShop";
import { PRODUCT_ROUT } from "../../../constant/url";
import { apiMethod } from "../../../services/services";
import { BsFillEyeFill } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { toastMsg } from "../../../../utils/toastify/ToastifyMsg";

const ProductList = () => {
  const { allProducts, fetchAllProducts } = useShop();
  const nav = useNavigate();
  const location = useLocation();
  const path = location.pathname.substring(1, 6);
  console.log(path);

  useEffect(() => {
    fetchAllProducts();
  }, []);
  const deleteProduct = async (_idDel) => {
    try {
      if (window.confirm("delete product.?")) {
        const url = PRODUCT_ROUT + "/" + _idDel;
        const data = await apiMethod(url, "DELETE", {});
        if (data?.deletedCount) {
          toastMsg(
            "Product deleted",
            "linear-gradient(to right, #000, #fc1818be)"
          );
          fetchAllProducts();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const viewProduct = async (_idView) => {
    if (window.confirm("view product.?")) {
      nav(`/shop/product/${_idView}`);
    }
  };
  console.log(allProducts);
  return (
    <div className="py-20 2xl:flex 2xl:justify-center min-h-screen">
      <div>
        <button
          onClick={() =>
            nav(path === "admin" ? "/admin/addProduct" : "/manager/addProduct")
          }
          className="btn btn-active btn-sm bg-red-700 m-3 hover:bg-red-800 rounded-md text-white"
        >
          Add product
        </button>
        <div className="overflow-x-auto mx-3">
          {allProducts.length > 0 ? (
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>#</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Created</th>
                  <th>Description</th>
                  <th>Detaile</th>
                  <th>Sizes</th>
                  <th>View</th>
                  <th>Edit</th>
                  <th>Del</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {allProducts?.map((item, i) => (
                  <tr key={item._id}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>{i + 1}</td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item?.imageBanner?.imageSrc}
                              alt={item.name}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.name}</div>
                          <div className="text-sm opacity-60">
                            another images
                            {" " + item.images.length}
                          </div>
                        </div>
                      </div>
                    </td>
                    {/* <td>
              Zemlak, Daniel and Leannon
              <br />
              <span className="badge badge-ghost badge-sm">
                Desktop Support Technician
              </span>
            </td> */}
                    <td>{item.category_url}</td>
                    <td>{item.price}</td>
                    <td>{item.createdAt?.substring(0, 10)}</td>
                    <td>{item.description?.substring(0, 20)}</td>
                    <td>{item.details?.substring(0, 20)}</td>
                    <td>
                      {item?.sizes[0]?.name ? (
                        <div className=" flex items-center">
                          <p className=" mr-2">{item?.sizes[0]?.name}</p>
                          <p
                            className={
                              item?.sizes[0]?.inStock
                                ? " text-green-500"
                                : "text-red-500"
                            }
                          >
                            {item?.sizes[0]?.inStock ? "במלאי" : "לא במלאי"}
                          </p>
                        </div>
                      ) : null}
                      {/* {item?.sizes[1]?.name ? (
                      <div className=" flex items-center">
                        <p className=" mr-2">{item?.sizes[1]?.name}</p>
                        <p>{item?.sizes[1]?.inStock ? "yes" : "no"}</p>
                      </div>
                    ) : null} */}
                      {/* {item.sizes.map((s) => (
                      <div className=" flex items-center">
                        <p className=" mr-2">{s.name}</p>
                        <p>{s.inStock ? "yes" : "no"}</p>
                      </div>
                    ))} */}
                    </td>
                    <th>
                      <button
                        onClick={() => {
                          viewProduct(item._id);
                        }}
                        className="btn btn-ghost bg-gray-600 btn-xs mx-2 text-opacity-40"
                      >
                        <BsFillEyeFill />
                      </button>
                    </th>
                    <th>
                      <button
                        onClick={() => {
                          nav(
                            path === "admin"
                              ? `/admin/editProduct/${item._id}`
                              : `/manager/editProduct/${item._id}`
                          );
                        }}
                        className="btn btn-ghost bg-blue-600 btn-xs mx-2 text-opacity-40"
                      >
                        <FaPen />
                      </button>
                    </th>
                    <th>
                      <button
                        onClick={() => {
                          deleteProduct(item._id);
                        }}
                        className="btn btn-ghost bg-red-600 btn-xs mx-2 text-black"
                      >
                        X
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
              {/* {msg && <p>deletedCount</p>} */}
              {/* foot */}
              {allProducts.length > 6 && (
                <tfoot>
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <th>#</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Created</th>
                    <th>Description</th>
                    <th>Detaile</th>
                    <th>Sizes</th>
                    <th>View</th>
                    <th>Edit</th>
                    <th>Del</th>
                  </tr>
                </tfoot>
              )}
            </table>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
