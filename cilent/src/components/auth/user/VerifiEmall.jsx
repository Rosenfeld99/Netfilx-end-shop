import React, { useEffect, useState } from "react";
import { BsCheck2Circle, BsXCircle } from "react-icons/bs";
import { USER_ROUTE } from "../../../constant/url";
import { useNavigate, useParams } from "react-router-dom";
import { apiGet } from "../../../services/services";

const VerifiEmall = () => {
  const { token } = useParams();
  const [resp, setResp] = useState(null);
  const nav = useNavigate();
  console.log(token);
  const verifiEmail = async () => {
    const _url = USER_ROUTE + `/verify/${token}`;
    console.log(_url);
    try {
      const { data } = await apiGet(_url);
      setResp(data);
      console.log(resp);
    } catch (error) {
      setResp(error);
      console.log(error);
    }
  };

  useEffect(() => {
    verifiEmail();
  }, [token]);
  useEffect(() => {
    if (resp) {
      setTimeout(() => {
        if (resp.verified) nav("/login");
        else nav("/login");
      }, 3000);
    }
    // verifiEmail();
  }, [resp]);
  return (
    <div className=" min-h-screen bg-black">
      {resp && (
        <>
          <div className=" flex items-center gap-3 p-1 w-fit">
            <h2>{resp?.message}</h2>
            {resp?.verified ? (
              <BsCheck2Circle className="text-green-300 text-2xl" />
            ) : (
              <BsXCircle className="text-red-500 text-xl" />
            )}
          </div>
          {resp?.verified ? (
            <div>Go to logion with 3 sconds</div>
          ) : (
            <div>Go to register with 3 sconds</div>
          )}
        </>
      )}
    </div>
  );
};

export default VerifiEmall;
