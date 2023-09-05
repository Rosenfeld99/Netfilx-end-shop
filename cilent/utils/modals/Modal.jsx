import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CgClose } from "react-icons/cg";

const Modal = ({ open, setOpen, children }) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment} dir="rtl">
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child>
          <div className="fixed inset-0 bg-[#00000097] bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="modal-open fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full justify-center p-4 sm:p-0 sm:mx-8">
            {/*  */}
            <Transition.Child>
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-[#141414] shadow-xl transition-all sm:my-8 sm:w-full lg:max-w-[900px] md:max-w-lg">
                {children}

                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className=" absolute top-2 left-2 text-2xl bg-black z-30 rounded-full p-1 text-white focus:outline-none"
                    onClick={() => {
                      setOpen(false);
                      // isAsFavs();
                    }}
                    ref={cancelButtonRef}
                  >
                    <CgClose />
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            {/*  */}
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
