import React from "react";

const Section2 = () => {
  return (
    <div className="w-full bg-[#0B0B0F] items-center px-4 py-28 md:px-20 flex gap-8 flex-col">
      <h1 className="text-white font-bold text-xl md:text-[64px]">
        Simplify the complex.
      </h1>

      <span className="text-[#5D636E] max-w-[820px] font-semibold text-base md:text-xl text-center">
        Fey offers a streamlined view of real-time market data, effortlessly
        giving you the big picture on your favorite companies.
      </span>

      <div className="grid md:grid-cols-4 grid-cols-2 text-[#4788E6] gap-4 text-lg">
        <span className="font-semibold">Brand 1</span>
        <span className="font-semibold">Brand 2</span>
        <span className="font-semibold">Brand 3</span>
        <span className="font-semibold">Brand 4</span>
      </div>
    </div>
  );
};

export default Section2;
