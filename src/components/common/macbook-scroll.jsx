import React from "react";
import { motion } from "framer-motion";

const Section1 = () => {
  return (
    <div className="w-full flex bg-black items-center px-4 py-28 flex md:gap-12 gap-8 flex-col">
      <motion.h1
        className="text-white font-bold text-xl md:text-[64px] w-2/3 text-center leading-[1.2]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, ease: "easeInOut", duration: 2 }}
        viewport={{ once: false }}
      >
        Your Trusted Partner in Global Remittance
      </motion.h1>

      <motion.span
        className="max-w-[820px] font-semibold text-base md:text-xl text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        <a
          href="https://www.remesa.money/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#F2C66D] rounded-3xl text-black font-[500] py-2 w-48 px-6">
            Start now
          </button>
        </a>
      </motion.span>

      <motion.img
        src="/images/globe.svg"
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
