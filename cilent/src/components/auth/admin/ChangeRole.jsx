import React from "react";
import { CHANGE_ROLE_ROUTE, TOKEN_KEY } from "../../../constant/url";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import { toastMsg } from "../../../../utils/toastify/ToastifyMsg";

const ChangeRole = ({ role, id, getUsersListAdmin }) => {
  const { changeRoleAdmin, msg, error, clearErrorHandler, clearMsgHandler } =
    useAuth();
  const roles = ["user", "manager", "admin"];
  const filterRoles = roles.filter((r) => r !== role);

  const handelrChangeRole = async (event) => {
    const value = event.target.textContent;
    console.log(value);
    try {
      if (window.confirm("change role.?")) {
        const url = `${CHANGE_ROLE_ROUTE}/${id}/${value}`;
        const { data } = await axios({
          url: url,
          method: "PATCH",
          headers: {
            "x-api-key": localStorage[TOKEN_KEY],
          },
        });
        if (data.modifiedCount === 1) {
          console.log("==== ====");
          toastMsg(
            "Changet role",
            "linear-gradient(to right, #000, #fc1818be)"
          );
          //   clearMsgHandler();
          getUsersListAdmin();
        }
      }
    } catch (error) {
      console.log(error.response.data.err);
      toastMsg(
        error.response.data.err,
        "linear-gradient(to right, #000, #fc1818be)"
      );
      clearErrorHandler();
    }
  };

  return (
    <div className="dropdown tooltip" data-tip="change role .?">
      <label
        tabIndex={0}
        className={`btn btn-ghost m-1 ${
          role === "admin"
            ? "text-red-500"
            : role === "manager"
            ? "text-green-700"
            : ""
        }`}
      >
        {role}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-1 shadow bg-[#141414] rounded-box w-auto"
      >
        <li onClick={handelrChangeRole}>
          {filterRoles?.map((item, i) => (
            <a className=" border border-red-500" key={i}>
              {item}
            </a>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default ChangeRole;
