import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Section7 = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-[#0B0B0F] items-center px-4 pb-28 md:px-20 flex gap-8 flex-col">
      <motion.h1
        className="text-white font-bold text-xl md:text-[64px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.3, ease: "easeInOut", duration: 2 }}
        viewport={{ once: false }}
      >
        The Magic of clarity
      </motion.h1>

      <motion.span
        className="text-[#5D636E] max-w-[820px] font-semibold text-base md:text-xl text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        Fey curates essential insights from industry giants, ensuring you get a
        clear view without clutter — all packed within an intuitive interface.
      </motion.span>

      <div className="">
        <button
          className="bg-[#1C1C1C] rounded-3xl text-white py-2 w-48 px-6 transition-all ease-in-out animate-bounce"
          // onClick={() => navigate("/login")}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Section7;
