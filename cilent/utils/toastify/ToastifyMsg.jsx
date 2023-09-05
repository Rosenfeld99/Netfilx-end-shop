import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const toastMsg = (text,background="linear-gradient(to right, #000, #fc1818be)") => {
  console.log("is toastufy");
  Toastify({
    text,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background,
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};
