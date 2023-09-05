import React, { useEffect, useState } from "react";
import useShop from "../../../../hooks/useShop";
import useAuth from "../../../../hooks/useAuth";
import { MDX_PROFILEID } from "../../../../constant/url";
import { useNavigate } from "react-router-dom";

const SelectAddress = () => {
  const { address_Ar, handelrGetAddress, flag, gestAddress,handelrResetFlag,loading } = useShop();
  const { getUser, user } = useAuth();
  const nav = useNavigate();
  const [viewAddress, setViewAddress] = useState(user?._id ? address_Ar : gestAddress);
  useEffect(() => {
    handelrResetFlag()
    {
      localStorage[MDX_PROFILEID] ? getUser() : null;
    }
    if (user?._id) {
      const bodyData = {
        userId: user?._id,
        screenId: localStorage[MDX_PROFILEID],
      };
      handelrGetAddress(bodyData);
    }
  }, [flag]);

  return (
    <div className=" py-5  rounded-md">
      {viewAddress?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              {/* render address if have else button to add address */}
              <tr>
                {viewAddress?.map((item, i) => (
                  <td
                    key={i}
                    className="p-3 bg-black border flex items-center gap-3"
                  >
                    <label>
                      <input type="checkbox" className="checkbox rounded-md" />
                    </label>
                    <div>
                      {item.city}, {item.street}, כניסה {item.entrance}
                      <br />
                      <span className="badge badge-ghost badge-sm bg-[#282828] rounded-md">
                        {item.zipCode}, {item.phone} - פלאפון
                      </span>
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <button
          onClick={() => {
            nav("/shop/addAddress");
          }}
          type="button"
          className=" btn btn-sm bg-red-700 rounded"
        >
          הוסף כתובת{" "}
        </button>
      )}
    </div>
  );
};

export default SelectAddress;
