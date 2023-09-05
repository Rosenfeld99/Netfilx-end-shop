import CatOptionMobile from "./CatOptionMobile";
import OferColactionMobile from "./OferColactionMobile";
import { Dialog, Tab, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import LinksNav from "./LinksNav";
import AccountNav from "../components/AccountNav";

const NavMobile = ({ open, setOpen, navigation, classNames }) => {
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-black pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5 justify-between">
                  {/* account nav */}
                  <AccountNav
                    hiddenClass={
                      "sm:hidden mr-3 flex flex-1 items-center justify-end space-x-6"
                    }
                    setOpen={setOpen}
                  />
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-text-white hover:text-gray-300"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  {/* links nav */}
                  <LinksNav classNames={classNames} navigation={navigation} />

                  <Tab.Panels as={Fragment}>
                    {/*  */}
                    {navigation?.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10 bg-[#141414]"
                      >
                        {/* mobile ofer colaction */}
                        <OferColactionMobile category={category} />

                        {/* mobile categories option  */}
                        <CatOptionMobile
                          category={category}
                          setOpen={setOpen}
                        />
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default NavMobile;
