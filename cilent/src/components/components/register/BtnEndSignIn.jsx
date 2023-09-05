import React from "react";
import { ColorRing } from "react-loader-spinner";

const BtnEndSignIn = ({loading,nav,showMsg}) => {
  return (
    <div>
      <button className={`my-2 p-3 w-full rounded-md text-white h-50 border-none font-bold text-lg mb-10 ${showMsg ? "bg-[#f00] opacity-80" : "bg-[#f00]"}`}>
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
          <>{showMsg ? "Check your email to verified email address, is can send a few minutes" : "Register"}</>
        )}
      </button>
      <span className="text-gray-500">
        Have Netflix?
        <span
          onClick={() => nav("/login")}
          className=" text-white mx-1 cursor-pointer"
        >
          Sign in now
        </span>
      </span>
      <br />
      <small className="text-gray-500">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
        Learn more.
      </small>
    </div>
  );
};

export default BtnEndSignIn;
