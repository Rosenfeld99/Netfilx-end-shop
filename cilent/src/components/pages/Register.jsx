import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Name from "../components/register/Name";
import Email from "../components/register/Email";
import Password from "../components/register/Password";
import BtnEndSignIn from "../components/register/BtnEndSignIn";
import Num from "../components/register/address/Num";
import Street from "../components/register/address/Street";
import City from "../components/register/address/City";
import ZipCode from "../components/register/address/ZipCode";
import Enterance from "../components/register/address/Enterance";
import Phone from "../components/register/address/Phone";

const Register = () => {
  const { error, status, loading, signUp, clearErrorHandler } = useAuth();
  console.log(error);
  const [showMsg, setShowMsg] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (bodyData) => {
    bodyData.screens = [
      {
        address: [
          {
            city: bodyData.city,
            street: bodyData.street,
            zipCode: bodyData.zipCode,
            num: bodyData.num,
            entrance: bodyData.entrance,
            phone: bodyData.phone,
          },
        ],
      },
    ];
    delete bodyData.city;
    delete bodyData.street;
    delete bodyData.zipCode;
    delete bodyData.num;
    delete bodyData.entrance;
    delete bodyData.phone;
    console.log(bodyData);
    signUp(bodyData);
    if (!error && !loading) {
      setShowMsg(true);
      // nav("/login");
    }
  };

  // useEffect(() => {
  //   if (!error && !loading) {

  //     clearErrorHandler();
  //   }
  // }, []);

  const nav = useNavigate();

  return (
    <div
      className="w-[100%] h-[100%] v-login bg-gradient-to-b from-transparent bg-cover"
      style={{
        backgroundImage:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/d049a3bd-40ee-411b-9f16-d1def798d43b/e31351a9-f2f0-4bab-87cc-6c863bf29ca1/IL-en-20230313-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
      }}
    >
      <div className="header-login p-20 bg-[#00000087] w-[100%] h-[100vh] ">
        {/* <img src="/src/assets/logo.png" alt="logo" className="w-110" /> */}
      </div>
      <div className="contact-login py-10 flex items-center justify-center flex-col absolute top-0 left-0 w-full h-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" bg-[#000000d4] p-10 rounded-lg max-w-md overflow-y-auto p-30 rounded-6 bg-var(--bgk-open) "
        >
          <h1 className="text-left py-5 text-white text-3xl font-bold">
            Sign Up
          </h1>
          {error && !errors.password && !errors.email && !errors.name && (
            <p className=" bg-orange-500 text-white p-3 rounded-lg border-b-2">
              {error}
            </p>
          )}
          {/* name */}
          <Name errors={error} register={register} />
          {errors?.name && (
            <span className="text-red-500">{errors?.name?.message}</span>
          )}

          {/* email */}
          <Email register={register} />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
          {/* password */}
          <Password register={register} />
          <br />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
          {/* city */}
          <City register={register} />
          {errors.city && (
            <span className="text-red-500">{errors.city.message}</span>
          )}

          <div className=" flex gap-3">
            {/* street */}
            <div>
              <Street register={register} />
              {errors.street && (
                <span className="text-red-500">{errors.street.message}</span>
              )}
            </div>

            {/* zipCode */}
            <div>
              <ZipCode register={register} />
              {errors.street && (
                <span className="text-red-500">{errors.zipCode.message}</span>
              )}
            </div>
          </div>

          <div className=" flex gap-3">
            {/* entrance */}
            <div>
              <Enterance register={register} />
              {errors.entrance && (
                <span className="text-red-500">{errors.entrance.message}</span>
              )}
            </div>

            {/* num  */}
            <div>
              <Num register={register} />
              {errors.num && (
                <span className="text-red-500">{errors.num.message}</span>
              )}
            </div>
          </div>

          {/* num  */}
          <Phone register={register} />
          {errors.phone && (
            <span className="text-red-500">{errors.phone.message}</span>
          )}

          {/* btn submit end detailes end go to sign in */}
          <BtnEndSignIn loading={loading} nav={nav} showMsg={showMsg}/>
        </form>
      </div>
    </div>
  );
};

export default Register;
