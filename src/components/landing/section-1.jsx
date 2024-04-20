import React from "react";

const Section1 = () => {
  return (
    <div className="w-full md:h-screen flex bg-[#0B0B0F] items-center px-4 py-8 flex md:gap-8 gap-4 flex-col">
      <h1 className="text-white font-bold text-xl md:text-[64px]">
        See the big picture.
      </h1>

      <span className="text-[#5D636E] max-w-[820px] font-semibold text-base md:text-xl text-center">
        Fey offers a streamlined view of real-time market data, effortlessly
        giving you the big picture on your favorite companies.
      </span>

      <img src="/macbook.png" alt="" className="" />
    </div>
  );
};

export default Section1;
