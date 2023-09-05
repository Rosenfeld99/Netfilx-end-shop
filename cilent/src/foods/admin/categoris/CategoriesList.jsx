import React, { useEffect } from "react";
import useShop from "../../../hooks/useShop";
import { CATEGORIES_ROUT } from "../../../constant/url";
import { apiMethod } from "../../../services/services";
import { FaPen } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { toastMsg } from "../../../../utils/toastify/ToastifyMsg";

const CategoriesList = () => {
  const { categories, fetchCategories } = useShop();
  const nav = useNavigate();

  const location = useLocation();
  const path = location.pathname.substring(1, 6);
  console.log(path);

  useEffect(() => {
    fetchCategories();
  }, []);
  const deleteCategories = async (_idDel) => {
    try {
      if (window.confirm("delete categories.?")) {
        const url = CATEGORIES_ROUT + "/" + _idDel;
        const data = await apiMethod(url, "DELETE", {});
        if (data?.deletedCount) {
          toastMsg(
            "Categories deleted",
            "linear-gradient(to right, #000, #fc1818be)"
          );
          fetchCategories();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(categories);
  return (
    <div className=" py-20 min-h-screen xl:flex xl:justify-center">
      <div>
        <button
          onClick={() =>
            nav(
              path === "admin" ? "/admin/addCategory" : "/manager/addCategory"
            )
          }
          className="btn btn-active btn-sm bg-red-700 m-3 hover:bg-red-800 rounded-md text-white"
        >
          Add category
        </button>
        <div className="overflow-x-auto mx-3 ">
          {categories?.length > 0 ? (
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
                  <th>Created</th>
                  <th>Description</th>
                  <th>Featured</th>
                  <th>Sections</th>
                  <th>Edit</th>
                  <th>Del</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {categories?.map((item, i) => (
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
                            <img src={item?.imageSrc} alt={item.name} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.name}</div>
                          <div className="text-sm opacity-60">
                            sections
                            {" " + item?.sections?.length}
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
                    <td>{item.url_name}</td>
                    <td>{item.createdAt?.substring(0, 10)}</td>
                    <td>{item.description?.substring(0, 20)}</td>
                    <td>
                      {item?.featured.map((feat, i) => (
                        <div
                          key={i}
                          className="p-2 flex items-center space-x-3"
                        >
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={feat?.imageSrc} alt={feat?.imageAlt} />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{feat?.name}</div>
                            <div className="text-sm opacity-60">
                              {i + 1 + " end"} - {" " + item?.featured?.length}
                            </div>
                          </div>
                        </div>
                      ))}
                    </td>
                    {/* sections */}
                    <td>
                      {item?.sections.map((section, i) => (
                        <p key={i}>{section?.name}</p>
                      ))}
                    </td>
                    <th>
                      <button
                        onClick={() => {
                          nav(
                            path === "admin"
                              ? `/admin/editCategory/${item._id}`
                              : `/manager/editCategory/${item._id}`
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
                          deleteCategories(item._id);
                        }}
                        className="btn btn-ghost bg-red-600 btn-xs mx-2 text-black"
                      >
                        X
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
              {/* foot */}
              {categories?.length > 6 && (
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
                    <th>Created</th>
                    <th>Description</th>
                    <th>Featured</th>
                    <th>Sections</th>
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

export default CategoriesList;
