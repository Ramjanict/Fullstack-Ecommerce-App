import React from "react";
import heroImage from "../assets/hero_image.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import hand_icon from "../assets/hand_icon.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className=" container h-[500px]  px-4 mx-auto grid grid-cols-3 ">
        <div className="flex flex-col h-full justify-center  col-span-2 gap-3 sm:gap-10 ">
          <h2 className="uppercase font-bold text-lg md:text-2xl text-[#090909]">
            new arrival only
          </h2>
          <div>
            <div className="flex">
              <p className="text-[#171717] font-semibold text-4xl md:text-7xl">
                new
              </p>
              <img className="md:h-20 h-10" src={hand_icon} alt="" />
            </div>
            <p className="text-[#171717] font-semibold text-4xl md:text-7xl">
              collection
            </p>
            <p className="text-[#171717] font-semibold text-4xl md:text-7xl">
              for everyone
            </p>
          </div>
          <div className="flex items-center gap-1 px-3 py-1 md:px-12 md:py-4 bg-[#ff4141] w-fit text-white text-sm md:text-lg rounded-full">
            <button className="capitalize">latest collection</button>
            <span>
              <FaLongArrowAltRight />
            </span>
          </div>
        </div>

        <div className="h-full hidden sm:flex items-center overflow-hidden  ">
          <img className="h-[490px]" src={heroImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
