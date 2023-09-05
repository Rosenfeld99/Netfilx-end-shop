import React, { useState } from "react";
import Modal from "../../../../../../utils/modals/Modal";
import ModalImage from "./ModalImage";
import {BsFillEyeFill} from 'react-icons/bs'

const BtnShowImg = ({imgSrc,imgAlt}) => {
    const [open, setOpen] = useState(false);
    // console.log(imgSrc);
  return (
    <div>
      {imgSrc != "" && imgSrc != undefined? (
        <button
          type="button"
          className="ml-2 px-3 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 focus:outline-none focus:bg-blue-600"
          onClick={() => setOpen(true)}
        >
          <BsFillEyeFill/>
        </button>
      ) : null}
      {/* show image modal */}
      {open ? (
        <Modal open={open} setOpen={setOpen}>
          <ModalImage imgSrc={imgSrc} imgAlt={imgAlt} />
        </Modal>
      ) : null}
    </div>
  );
};

export default BtnShowImg;
