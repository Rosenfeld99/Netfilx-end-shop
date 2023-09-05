import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useShop from "../../../hooks/useShop";
import { FaPen, FaTrashAlt } from "react-icons/fa";


const AddressList = () => {
  const { handelrGetAddress, address_Ar, handelrDeleteAddress, loading, flag,handelrResetFlag } =
    useShop();
  const { userId, screenId } = useParams();

  // console.log(userId);

  useEffect(() => {
    const bodyData = {
      userId: userId,
      screenId: screenId,
    };
    handelrGetAddress(bodyData);
  }, [flag]);
  
  const handleDeleteAddress = (addressId) => {
    if (window.confirm("למחוק כתובת.?")) {
      let bodyData = {
        userId: userId,
        screenId: screenId,
        addressId: addressId,
      };
      handelrDeleteAddress(bodyData);
    }
  };

  // console.log(address_Ar);
  const nav = useNavigate();
  return (
    <div className=" min-h-screen py-10 md:flex md:justify-center">
      
      <div className=" py-20">
        {address_Ar?.length < 5 && <button
          onClick={() => nav("/shop/addAddress")}
          className="btn btn-active btn-sm bg-red-700 m-3 hover:bg-red-800 rounded-md text-white"
        >
          הוסף כתובת
        </button>}
        <div className="overflow-x-auto mx-3">
          {address_Ar.length > 0 ? (
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox rounded-md" />
                    </label>
                  </th>
                  <th>#</th>
                  <th>כתובת</th>
                  <th>עריכה</th>
                  <th>מחיקה</th> 
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {address_Ar?.map((item, i) => (
                  <tr key={item._id}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox rounded-md" />
                      </label>
                    </th>
                    <td>{i + 1}</td>
                    <td>
                      {item.city}, {item.street}, כניסה {item.entrance}
                      <br />
                      <span className="badge badge-ghost badge-sm bg-[#282828] rounded-md">
                        {item.zipCode}, {item.phone} - פלאפון
                      </span>
                    </td>
                    <th>
                      <button
                        onClick={() => {
                          nav(`/shop/editAddress/${userId}/${item._id}`);
                        }}
                        className="btn btn-ghost bg-blue-600 rounded-sm btn-xs text-opacity-40"
                      >
                        <FaPen />
                      </button>
                    </th>
                    <th>
                      <button
                        onClick={() => {
                          handleDeleteAddress(item._id);
                        }}
                        className="btn btn-ghost bg-red-600 rounded-sm btn-xs"
                      >
                        <FaTrashAlt/>
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div>{address_Ar.length === 0 ? null : <p>Loading...</p>}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddressList;
