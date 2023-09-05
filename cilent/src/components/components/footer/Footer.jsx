import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  const getYear = () => {
    const currentDate = new Date();
    return currentDate.getFullYear();
  };

  const currentYear = getYear()
  return (
    <footer className="footer footer-center p-10 rounded">
      {/* <div className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div> */}
      <div>
        <div className="grid grid-flow-col gap-4">
          <Link to={"https://www.linkedin.com/in/eli-rosenfeld-3245511b2/"}>
            <BsLinkedin className=" text-xl" />
          </Link>
          <Link to={"https://github.com/Rosenfeld99"}>
            <BsGithub className=" text-xl" />
          </Link>
          <Link to={"#"}>
            <BsFacebook className=" text-xl" />
          </Link>
        </div>
      </div>
      <div>
        <p>Copyright © {currentYear} - Eli rosenfeld</p>
        <p>Fullstack Developer | MongoDB | Node.js</p>
      </div>
    </footer>
  );
};

export default Footer;
