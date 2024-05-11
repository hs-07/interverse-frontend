import React from "react";
import { motion } from "framer-motion";

const Section4 = () => {
  return (
    <div className="w-full flex bg-[#0B0B0F] items-center px-4 py-28 md:px-20 flex md:gap-12 gap-2 flex-col">
      <motion.h1
        className="text-white font-bold text-xl md:text-[52px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.3, ease: "easeInOut", duration: 2 }}
        viewport={{ once: false }}
      >
        Your personal analyst.24/7
      </motion.h1>
      <motion.span
        className="text-[#5D636E] max-w-[800px]  text-base md:text-xl text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        Fey offers a streamlined view of real-time market data, effortlessly
        giving you the big picture on your favorite companies.
      </motion.span>
    </div>
  );
};

export default Section4;
