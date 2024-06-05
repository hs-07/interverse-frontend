import React from "react";
import { motion } from "framer-motion";

const Section9 = () => {
  return (
    <div className="w-full flex bg-black items-center px-4 py-28 md:px-20 flex gap-8 flex-col">
      <motion.h1
        className="text-white font-bold text-xl md:text-[54px] text-[32px] lg:w-1/2 text-center leading-[1]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.3, ease: "easeInOut", duration: 2 }}
        viewport={{ once: false }}
      >
        Simplify Your Global Transfers Today
      </motion.h1>
      <motion.span
        className="text-[#5D636E] max-w-[800px] font-semibold text-base md:text-xl text-center "
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        Join Interverse Solutions today and experience seamless, secure, and
        affordable global money transfers
      </motion.span>
      <div className="">
        <a
          href="http://remesa.money/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#F2C66D] rounded-3xl text-black font-[500] py-2 w-48 px-6 animate-bounce transition-all ease-in-out">
            Join Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default Section9;
