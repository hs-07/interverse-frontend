import React from "react";
import { motion } from "framer-motion";

const Section1 = () => {
  return (
    <div className="w-full flex bg-black items-center px-4 py-28 flex md:gap-12 gap-4 flex-col">
      <motion.h1
        className="text-white font-bold text-xl md:text-[64px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, ease: "easeInOut", duration: 2 }}
        viewport={{ once: false }}
      >
        Interverse features
      </motion.h1>

      <motion.span
        className="text-[#5D636E] max-w-[820px] font-semibold text-base md:text-xl text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        We offer a range of sophisticated products and functionality to ensure
        that we can solve industry and company specific problems.
      </motion.span>

      <motion.img
        src="/images/big-img.svg"
        alt="image"
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
