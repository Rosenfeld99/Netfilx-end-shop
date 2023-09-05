import React, { useEffect } from "react";
import Form from "../components/address/Form";
import useShop from "../../../hooks/useShop";
import { useParams } from "react-router-dom";
import { MDX_PROFILEID } from "../../../constant/url";

const EditAddress = () => {
  const { handelrGetSingleAddress, singleAddress,flag} = useShop();
  const { userId, addressId } = useParams();

  useEffect(() => {
    let bodyData = {
      userId: userId,
      screenId: localStorage[MDX_PROFILEID],
      addressId: addressId,
    };
    handelrGetSingleAddress(bodyData);
    // console.log(bodyData);
    console.log(addressId);
  }, [addressId]);

  return (
    <div>
      {singleAddress?._id ? <Form singleAddress={singleAddress}/> : <p>Loading...</p>}
    </div>
  );
};

export default EditAddress;
