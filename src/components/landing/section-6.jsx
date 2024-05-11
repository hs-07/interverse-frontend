import React from "react";
import { motion } from "framer-motion";
import ScrollContainer from "./container-scroll";

const Section6 = () => {
  return (
    <div className="w-full bg-[#0B0B0F] justify-center px-4 py-28 md:px-20 items-center flex gap-8 flex-col">
      <motion.h1
        className="text-white font-bold text-xl pb-6 md:text-[64px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.3, ease: "easeInOut", duration: 2 }}
        viewport={{ once: false }}
      >
        The Magic of clarity
      </motion.h1>
      <motion.span
        className="text-[#5D636E] max-w-[820px] font-semibold pb-6 text-base md:text-xl text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        Fey curates essential insights from industry giants, ensuring you get a
        clear view without clutter — all packed within an intuitive interface.
      </motion.span>

      <ScrollContainer
        children={
          <img src="/macbook-3.png" alt="screen" className="w-[40rem] h-full" />
        }
      />
    </div>
  );
};

export default Section6;
