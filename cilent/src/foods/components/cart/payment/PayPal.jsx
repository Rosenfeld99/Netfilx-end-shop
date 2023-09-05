import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPal = () => {
  const CLIENT_ID = "YOUR_PAYPAL_CLIENT_ID";
  return (
    <div>
      <PayPalScriptProvider
      // options={{ "client-id": CLIENT_ID }}
      >
        <PayPalButtons
        // createOrder={(data, actions) => {
        //   return actions.order
        //     .create({
        //       purchase_units: [
        //         {
        //           amount: {
        //             currency_code: currency,
        //             value: "1120.00",
        //           },
        //         },
        //       ],
        //     })
        //     .then((orderId) => {
        //       // Your code here after create the order
        //       return orderId;
        //     });
        // }}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default PayPal;
