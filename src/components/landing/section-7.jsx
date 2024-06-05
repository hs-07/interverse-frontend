import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Section7 = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-black items-center px-4 pb-28 md:px-20 flex gap-8 lg:gap-12 flex-col">
      <motion.h1
        className="text-white font-bold text-xl md:text-[64px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.3, ease: "easeInOut", duration: 2 }}
        viewport={{ once: false }}
      >
        Local Routes
      </motion.h1>

      <motion.span
        className="text-[#5D636E] max-w-[820px] font-semibold text-base md:text-xl text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        Our extensive network of local routes ensures that your money reaches
        its destination quickly and efficiently. We have established
        partnerships with numerous banks and financial institutions across
        various countries.
      </motion.span>

      <div className="">
        <a
          href="https://www.remesa.money/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#F2C66D] rounded-3xl text-black py-2 w-48 px-6 transition-all ease-in-out animate-bounce">
            Sign Up
          </button>
        </a>
      </div>
      <div className="w-full flex justify-center">
        <motion.img
          src="/images/globe.svg"
          alt=""
          className=""
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, ease: "easeInOut", duration: 0.5 }}
          viewport={{ once: false }}
        />
      </div>
    </div>
  );
};

export default Section7;
