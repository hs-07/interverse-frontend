import React from "react";
import { motion } from "framer-motion";

const Section1 = () => {
  return (
    <div className="w-full flex bg-[#0B0B0F] items-center px-4 py-28 flex md:gap-8 gap-4 flex-col">
      <motion.h1
        className="text-white font-bold text-xl md:text-[64px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, ease: "easeInOut", duration: 2 }}
        viewport={{ once: false }}
      >
        See the big picture.
      </motion.h1>

      <motion.span
        className="text-[#5D636E] max-w-[820px] font-semibold text-base md:text-xl text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        Fey offers a streamlined view of real-time market data, effortlessly
        giving you the big picture on your favorite companies.
      </motion.span>

      <motion.img
        src="/macbook.png"
        alt=""
        className=""
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, ease: "easeInOut", duration: 0.5 }}
        viewport={{ once: false }}
      />
    </div>
  );
};

export default Section1;
