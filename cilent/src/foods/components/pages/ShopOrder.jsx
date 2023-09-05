import React from "react";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import PayPal from "../cart/payment/PayPal";
import SelectAddress from "../cart/payment/SelectAddress";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const FoodOrder = () => {
  const [agreed, setAgreed] = useState(true);
  return (
    <div className="isolate px-6 py-32 lg:px-8 bg-gradient-to-r from-black via-[#141414] to-black bg-opacity-90 shadow-xl min-h-screen flex flex-col justify-center items-center">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
          תשלום
        </h2>
        <p className="mt-2 text-lg leading-8">
          עמוד תשלום : ) ניתן לבחור אמצעי תשלום
        </p>
      </div>
      {/* Select Address */}
      <div>
        <SelectAddress />
      </div>
      <form dir="rtl" className="mx-auto mt-6 max-w-xl sm:mt-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* message for selers */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6"
            >
              אופציונלי *
            </label>
            <div className="mt-2.5">
              <textarea
                placeholder=" הוספת הערה,הודעה..."
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-inset bg-[#444] ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                dir="ltr"
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? "bg-red-600" : "bg-[#444]",
                  "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? "translate-x-3.5" : "translate-x-0",
                    "h-4 w-4 transform rounded-full bg-gray-300 shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-400">
              בקניה זאת את/ה מאשר את{" "}
              <a href="#" className="font-semibold text-red-700">
                מדניות&nbsp;הפרטים
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          {/* <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button> */}
          <PayPal />
        </div>
      </form>
    </div>
  );
};

export default FoodOrder;
