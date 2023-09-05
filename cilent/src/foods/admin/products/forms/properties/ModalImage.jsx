import React from "react";

const ModalImage = ({ imgSrc,imgAlt }) => {
  // console.log(img);
  return (
    <div>
      <img
        className="w-[100%] h-[40vw] min-h-[400px] object-cover"
        src={imgSrc}
        alt={imgAlt}
      />
      {imgAlt ? <p className=" text-center p-5">Alt : {imgAlt}</p> : null}
    </div>
  );
};

export default ModalImage;
