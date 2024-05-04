import React from "react";

const Section3 = () => {
  return (
    <div className="w-full flex bg-[#0B0B0F] bg-gradient-to-b from-[#0F1014]  items-center px-4 py-28 md:px-20 flex gap-8 flex-col">
      <div className=" w-full flex items-center md:justify-between md:flex-row flex-col py-6">
        <h1 className="text-white font-bold text-xl md:text-[52px]">
          See the big picture.
        </h1>
        <span className="text-[#5D636E] max-w-[420px] font-semibold text-base md:text-xl text-center md:text-start ">
          Fey offers a streamlined view of real-time market data, effortlessly
          giving you the big picture on your favorite companies.
        </span>
      </div>

      <div className="w-full flex justify-center">
        <img src="/keyboard.png" alt="" className="" />
      </div>
    </div>
  );
};

export default Section3;
