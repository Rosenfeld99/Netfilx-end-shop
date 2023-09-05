import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { MDX_PROFILEID, TOKEN_KEY } from "../../constant/url";
import useAuth from "../../hooks/useAuth";

export default function LoginAdmin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn, error, status, loading, user } = useAuth();
  const nav = useNavigate();

  const onSubForm = (_bodyData) => {
    console.log(_bodyData);
    signIn(_bodyData);
  };

  useEffect(() => {
    if (!loading && error && !user) {
      alert(error);
    }
    if (
      !error &&
      !loading &&
      status &&
      user.role === "user" &&
      localStorage[TOKEN_KEY]
    ) {
      alert("You user, logetIn!");
    }
    if (!error && !loading && status && user.role === "admin") {
      console.log(user);
      localStorage.setItem(MDX_PROFILEID, user?.screens[0]?._id);
      nav("/admin/users");
    }
  }, [error, loading, user]);

  return (
    <div className="container flex flex-col items-center w-full justify-center min-h-screen">
      {loading && <div>Loading...</div>}
      <form
        onSubmit={handleSubmit(onSubForm)}
        className="max-w-md w-full mx-auto py-10 px-5 bg-[#000000d4] rounded"
      >
        <h2 className="text-2xl font-bold mb-4">Log in to Admin:</h2>
        <div className="mb-4">
          <label className="block">Email</label>
          <input
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            className="w-full px-2 py-3 rounded bg-[#444]"
            type="text"
          />
          {errors.email && (
            <div className="text-red-500">* Enter valid email</div>
          )}
        </div>
        <div className="mb-4">
          <label className="block">Password</label>
          <input
            {...register("password", { required: true, minLength: 3 })}
            className="w-full px-2 py-3 rounded bg-[#444]"
            type="password"
          />
          {errors.password && (
            <div className="text-red-500">* Enter valid password</div>
          )}
        </div>
        <div className=" flex justify-between">
          <button className="bg-red-700 hover:bg-red-800 text-white py-2 px-4 rounded">
            Log in
          </button>
          <p className=" cursor-pointer" onClick={()=>{nav('/login')}}>
            not admin.? <span className=" text-red-700 hover:underline">login for user</span>
          </p>
        </div>
      </form>
    </div>
  );
}
