import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="container px-4 mx-auto max-w-2xl flex flex-col gap-4 md:gap-6 justify-center items-center  py-20 text-[#454545]">
        <h1 className=" text-xl md:text-4xl font-bold">
          Get Exclusive Offer on Your Email
        </h1>
        <p className="text-xl">Subscribe to our newsletter and stay updated</p>
        <div className="w-full flex">
          <input
            className="outline-none w-full rounded-full border border-[#c9c9c9] text-[#5c5c5c] px-3 py-2 text-lg"
            type="email"
            placeholder="Youer Email Address"
          />
          <button className="bg-black rounded-full text-white px-3 py-2 text-lg ml-[-60px]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
