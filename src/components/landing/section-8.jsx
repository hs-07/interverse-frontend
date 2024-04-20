import React from "react";

const Section8 = () => {
  return (
    <div className="w-full bg-[#0B0B0F] justify-between px-4 py-8 md:py-12 md:px-20 items-center flex gap-8 md:flex-row flex-col">
      <div className="text-white w-full md:w-1/2 text-xl md:text-2xl text-center md:text-start ">
        <h1 className="text-white font-bold text-xl pb-6 md:text-[64px] leading-5">
          The Magic of clarity
        </h1>
        <span className="text-[#5D636E] max-w-[820px] font-semibold pb-6 text-base md:text-xl text-center">
          Fey curates essential insights from industry giants, ensuring you get
          a clear view without clutter — all packed within an intuitive
          interface.
        </span>
      </div>
      <div className="w-full md:w-1/2 flex justify-end">
        <img src="/frame.png" alt="" className="" />
      </div>
    </div>
  );
};

export default Section8;
