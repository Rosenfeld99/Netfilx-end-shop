import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { ColorRing } from "react-loader-spinner";

const Login = () => {
  const { error, loading, signIn, status, user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const nav = useNavigate();

  const onSubmit = (bodyData) => {
    // console.log(bodyData);
    signIn(bodyData);
  };

  useEffect(() => {
    if (!error && !loading && status && user) {
      nav("/home");
    }
  }, [error, loading, user]);

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  return (
    <div
      className="w-[100%] h-[100%] v-login bg-gradient-to-b from-transparent bg-cover"
      style={{
        backgroundImage:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/d049a3bd-40ee-411b-9f16-d1def798d43b/e31351a9-f2f0-4bab-87cc-6c863bf29ca1/IL-en-20230313-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
      }}
    >
      <div className="header-login p-20 bg-[#00000087] w-[100%] h-[100vh]">
      </div>
      <div className="contact-login pt-10 flex items-center justify-center flex-col absolute top-0 left-0 w-full h-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" bg-[#000000d4] p-10 rounded-lg max-w-md w-400 h-400 p-30 rounded-6 bg-var(--bgk-open)"
        >
          <h1 className="text-left py-5 text-white text-3xl font-bold">
            Sign In
          </h1>
          {error && !errors.password && !errors.email && (
            <p className=" bg-orange-500 text-white p-3 rounded-lg border-b-2">
              {error}
            </p>
          )}
          <input
            type="text"
            placeholder="Email "
            className="my-2 p-4 w-full p-15 bg-[#333] border-none rounded-md text-white"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: emailRegex,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className="text-orange-500">{errors.email.message}</span>
          )}
          <input
            className="my-2 p-4 pasword w-full p-15 bg-[#333] border-none rounded-md text-white"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              maxLength: {
                value: 10,
                message: "Password must not exceed 10 characters",
              },
            })}
          />
          <br />
          {errors.password && (
            <span className="text-orange-500">{errors.password.message}</span>
          )}
          <button className="my-2 p-3 w-full rounded-md bg-[#f00] text-white h-50 border-none font-bold text-lg mb-10">
            {loading ? (
              <div className=" text-center flex justify-center items-center">
                <ColorRing
                  visible={true}
                  height="40"
                  width="40"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={["#fff", "#fff", "#fff", "#fff", "#fff"]}
                />
              </div>
            ) : (
              "Sing In"
            )}
          </button>
          <span className="text-gray-500">
            New to Netflix?
            <span
              onClick={() => nav("/register")}
              className=" text-white mx-1 cursor-pointer"
            >
              Sign up now
            </span>
          </span>
          <br />
          <small className="text-gray-500">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
