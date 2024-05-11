import React from "react";
import { motion } from "framer-motion";

const Section2 = () => {
  return (
    <div className="w-full bg-[#0B0B0F] items-center px-4 py-28 md:px-20 flex gap-8 flex-col">
      <motion.h1
        className="text-white font-bold text-xl md:text-[64px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, ease: "easeInOut", duration: 2 }}
        viewport={{ once: false }}
      >
        Simplify the complex.
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

      <motion.div
        className="grid md:grid-cols-4 grid-cols-2 text-[#4788E6] gap-4 text-lg"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        <span className="font-semibold">Brand 1</span>
        <span className="font-semibold">Brand 2</span>
        <span className="font-semibold">Brand 3</span>
        <span className="font-semibold">Brand 4</span>
      </motion.div>
    </div>
  );
};

export default Section2;
