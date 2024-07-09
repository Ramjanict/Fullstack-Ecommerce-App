import React from "react";
import exclusive_image from "../assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className="offers">
      <div className=" container mx-auto px-4  flex justify-around offers">
        <div className="flex flex-col gap-2 lg:gap-4 justify-center text-[#171717]">
          <h1 className="text-lg md:text-5xl font-bold">Exclusive</h1>
          <h1 className="text-lg md:text-5xl font-bold">Offer For You</h1>
          <p className="text-sm md:text-3xl font-bold">
            ONLY ON BEST SELLER PRODUCTS
          </p>
          <button className="px-2 py-1 lg:px-6 lg:py-3 bg-[#ff4141] text-lg md:text-2xl rounded-full text-white">
            Check Now
          </button>
        </div>
        <div className="flex ">
          <img src={exclusive_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Offers;
