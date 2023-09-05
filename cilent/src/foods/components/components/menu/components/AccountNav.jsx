import React, { useEffect } from "react";
import { MDX_PROFILEID } from "../../../../../constant/url";
import useScreen from "../../../../../hooks/useScreen";
import { Link } from "react-router-dom";
import useShop from "../../../../../hooks/useShop";
import useAuth from "../../../../../hooks/useAuth";

const AccountNav = ({ hiddenClass, setOpen }) => {
  const { getSingleScreen, singleScreen } = useScreen();
  const { user, getUser } = useAuth();
  const { loading } = useShop();

  useEffect(() => {
    // getUser();
    {
      localStorage[MDX_PROFILEID]
        ? (getSingleScreen(localStorage[MDX_PROFILEID]), getUser())
        : null;
    }
  }, [localStorage[MDX_PROFILEID], loading]);
  // console.log(singleScreen);
  return (
    <div>
      {!singleScreen?._id ? (
        <div className={hiddenClass}>
          <Link
            to={"/login"}
            className="text-sm font-medium text-white hover:text-gray-300"
          >
            Sign in
          </Link>
          <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
          <Link
            to={"/register"}
            className="text-sm font-medium text-white hover:text-gray-300"
          >
            Create account
          </Link>
        </div>
      ) : (
        <div className=" mr-3 lg:mr-0 flex items-center gap-3">
          <Link to={`/shop/address/${user?._id}/${singleScreen?._id}`}>
            <img
              onClick={() => {
                setOpen(false);
              }}
              className="h-8 w-8 rounded-sm"
              // src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
              src={singleScreen.imageScreen}
              alt=""
            />
          </Link>
          {singleScreen?.address?.length === 0 && (
            <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
          )}
          {singleScreen?.address?.length === 0 ? (
            <div>
              <Link
                to={"/shop/addaddress"}
                className="text-sm font-medium text-white hover:text-gray-300"
              >
                Add address
              </Link>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default AccountNav;
