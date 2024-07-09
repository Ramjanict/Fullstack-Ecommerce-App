import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import logo from "../assets/logo_big.png";
import { CgMail } from "react-icons/cg";
import { FcPortraitMode } from "react-icons/fc";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 my-5">
      <div className="flex items-center gap-2">
        <img src={logo} alt="" />
        <p className="md:text-4xl text-2xl uppercase font-bold">SHOPPER</p>
      </div>
      <ul className="flex items-center gap-2 text-md md:gap-8  md:text-xl">
        <li>Company</li>
        <li>Products</li>
        <li>Office</li>
        <li>About</li>
      </ul>
      <div className="flex items-center gap-2 md:gap-6">
        <div className="p-2 bg-[#fbfbfbfb] border border-[#ebebeb] rounded-md text-3xl">
          <FaFacebook />
        </div>
        <div className="p-2 bg-[#fbfbfbfb] border border-[#ebebeb] rounded-md text-3xl">
          <FaGithub />
        </div>
        <div className="p-2 bg-[#fbfbfbfb] border border-[#ebebeb] rounded-md text-3xl">
          <FaLinkedin />
        </div>
        <div className="p-2 bg-[#fbfbfbfb] border border-[#ebebeb] rounded-md text-3xl">
          <CgMail />
        </div>
        <div className="p-2 bg-[#fbfbfbfb] border border-[#ebebeb] rounded-md text-3xl">
          <FcPortraitMode />
        </div>
      </div>
      <hr className="container mx-auto" />
      <div>
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
