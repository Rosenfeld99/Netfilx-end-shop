import React, { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { DELETE_USER_ROUTE, TOKEN_KEY } from "../../../constant/url";
import axios from "axios";
import ChangeRole from "./ChangeRole";
import { toastMsg } from "../../../../utils/toastify/ToastifyMsg";
const UserList = () => {
  const {
    getUsersListAdmin,
    usersList,
    msg,
    error,
    loading,
    deleteUserAdmin,
    clearMsgHandler,
  } = useAuth();

  useEffect(() => {
    getUsersListAdmin();
    console.log(msg);
  }, [msg]);
  console.log(error);
  const deleteUser = async (_idDel) => {
    // if (window.confirm("delete user.?")) {
    //   deleteUserAdmin(_idDel);
    //   handleButtonClick();
    // }

    try {
      if (window.confirm("delete user.?")) {
        const url = DELETE_USER_ROUTE + _idDel;
        const { data } = await axios({
          url: url,
          method: "DELETE",
          headers: {
            "x-api-key": localStorage[TOKEN_KEY],
          },
        });
        if (data.deletedCount) {
          getUsersListAdmin();
          toastMsg(
            "User deleted",
            "linear-gradient(to right, #000, #fc1818be)"
          );
          clearMsgHandler();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen py-20">
      {loading && <p>Loading...</p>}
      <div className="overflow-x-auto py-20 md:flex md:justify-center mx-3 ">
        {usersList.length > 0 && !error ? (
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
                <th>Profile</th>
                <th>Address</th>
                <th>Email</th>
                <th>Role</th>
                <th>Created</th>
                <th>Del</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {usersList?.map((item, i) => (
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
                          <img src={item.pofileImage} alt={item.name} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.name}</div>
                        <div className="text-sm opacity-60">
                          screens
                          {" " + item.screens.length}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item?.screens[0]?.address[0]?.city},{" "}
                    {item?.screens[0]?.address[0]?.street}, כניסה{" "}
                    {item?.screens[0]?.address[0]?.entrance}
                    <br />
                    <span className="badge badge-ghost badge-sm bg-[#282828] rounded-md">
                      {item?.screens[0]?.address[0]?.zipCode},{" "}
                      {item?.screens[0]?.address[0]?.phone} - פלאפון
                    </span>
                  </td>
                  <td>{item.email}</td>
                  <td>
                    {/* <button
                    className="tooltip btn btn-ghost btn-xs mx-2"
                    data-tip="change role .?"
                  >
                    {item.role}
                  </button> */}
                    <ChangeRole
                      role={item.role}
                      id={item._id}
                      getUsersListAdmin={getUsersListAdmin}
                    />
                  </td>
                  <td>{item.createdAt.substring(0, 10)}</td>
                  <th>
                    <button
                      onClick={() => {
                        deleteUser(item._id);
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
            {usersList.length > 6 && (
              <tfoot>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Created</th>
                  <th>Del</th>
                </tr>
              </tfoot>
            )}
          </table>
        ) : (
          <div>
            {" "}
            <p>You must be admin in this endpoint...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;
