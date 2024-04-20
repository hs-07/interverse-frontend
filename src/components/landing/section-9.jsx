import React from "react";

const Section9 = () => {
  return (
    <div className="w-full flex bg-black items-center px-4 py-8 md:py-12 md:px-20 flex gap-8 flex-col">
      <h1 className="text-white font-bold text-xl md:text-[52px]">
        See the big picture.
      </h1>
      <span className="text-[#5D636E] max-w-[800px] font-semibold text-base md:text-xl text-center ">
        Fey offers a streamlined view of real-time market data, effortlessly
        giving you the big picture on your favorite companies.
      </span>
      <div className="">
        <button className="bg-[#1C1C1C] rounded-3xl text-white py-2 w-48 px-6">
          Try it free
        </button>
      </div>

      <div className="w-full flex justify-center">
        <img src="/laptop.png" alt="" className="" />
      </div>
    </div>
  );
};

export default Section9;
