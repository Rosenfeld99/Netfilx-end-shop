import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { TOKEN_KEY } from "../../constant/url";
import { BiLogOutCircle } from "react-icons/bi";
import AuthAdmin from "../../components/auth/admin/AuthAdmin";

export default function MenuAdmin({ user }) {
  const nav = useNavigate();

  const onLogOut = () => {
    // Remove the token from local storage and navigate to the admin login page
    localStorage.removeItem(TOKEN_KEY);
    nav("/admin/login");
  };

  return (
    <header className="bg-black border-b fixed top-0 w-full z-50">
      <AuthAdmin />
      {localStorage[TOKEN_KEY] && user?.role === "admin" && (
        <div className="container mx-auto py-4 px-6">
          <div className="flex items-center justify-between">
            <div className="text-white text-lg font-semibold">
              <h4>Admin</h4>
            </div>
            <nav >
              <div className="space-x-4 flex items-center">
                <ul className="flex space-x-12">
                  <li>
                    <Link
                      className="text-white hover:text-gray-300"
                      to="/admin/users"
                    >
                      Users
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white hover:text-gray-300"
                      to="/admin/categories"
                    >
                      Categories
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white hover:text-gray-300"
                      to="/admin/products"
                    >
                      Products
                    </Link>
                  </li>
                </ul>
                <div>
                  <button
                    onClick={onLogOut}
                    className="bg-red-600 hover:bg-red-700 flex items-center gap-2 text-white py-2 px-4 rounded"
                  >
                    Log out
                    <p className=" text-xl">
                      <BiLogOutCircle />
                    </p>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
