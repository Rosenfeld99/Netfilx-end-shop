import { Fragment, useEffect, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { navigation } from "./dataNav";
import CartNav from "./components/CartNav";
import SearchNav from "./components/SearchNav";
import CurrencyNav from "./components/CurrencyNav";
import AccountNav from "./components/AccountNav";
import NavMobile from "./mobile/NavMobile";
import NavDescktop from "./descktop/NavDescktop";
import useShop from "../../../../hooks/useShop";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Navigation = () => {
  const [open, setOpen] = useState(false);

  const { categories, loading, error, fetchCategories } = useShop();

  useEffect(() => {
    fetchCategories();
  }, []);

  // console.log(categories);

  return (
    <div className="bg-white fixed top-0 w-full z-50">
      {/* Mobile menu */}
      <NavMobile
        open={open}
        setOpen={setOpen}
        navigation={categories}
        classNames={classNames}
      />

      <header className="relative bg-black">
        <p
          dir="rtl"
          className="flex h-10 items-center justify-center bg-red-700 px-4 text-sm font-medium text-white sm:px-6 lg:px-8"
        >
          קבל משלוח חינם בהזמנה מעל 100 ₪
        </p>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-8 w-8" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={'/'}>
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://seeklogo.com/images/N/netflix-logo-6A5D357DF8-seeklogo.com.png"
                    alt=""
                  />
                </Link>
              </div>

              {/* descktop menus */}
              <NavDescktop
                setOpen={setOpen}
                navigation={categories}
                open={open}
                classNames={classNames}
              />

              <div className="ml-auto flex items-center">
                {/* account */}
                <AccountNav
                  setOpen={setOpen}
                  hiddenClass={
                    "hidden sm:mr-3 sm:flex sm:flex-1 sm:items-center sm:justify-end sm:space-x-6"
                  }
                />

                {/* currency */}
                {/* <CurrencyNav /> */}

                {/* Search */}
                <SearchNav />

                {/* Cart */}
                <CartNav />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
