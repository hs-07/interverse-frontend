import React from "react";
import { motion } from "framer-motion";

const Section2 = () => {
  return (
    <div className="w-full bg-black items-center px-4 py-28 md:px-20 flex md:gap-12 gap-8 flex-col">
      <motion.h1
        className="text-white font-bold text-xl md:text-[64px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, ease: "easeInOut", duration: 2 }}
        viewport={{ once: false }}
      >
        Multi-currency
      </motion.h1>

      <motion.span
        className="text-[#5D636E] max-w-[820px] font-semibold text-base md:text-xl text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        Interverse Solutions supports transactions in multiple currencies,
        making it easier for you to send and receive money globally. Whether you
        need to transfer USD, EUR, GBP, or any other major currency, our
        platform handles it seamlessly.
      </motion.span>

      <motion.div
        className="grid md:grid-cols-7 grid-cols-3 text-[#F2C66D] gap-4 md:gap-12 text-lg"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        <span className="font-semibold">INR</span>
        <span className="font-semibold">USD</span>
        <span className="font-semibold">SAR</span>
        <span className="font-semibold">EUR</span>
        <span className="font-semibold">AED</span>
        <span className="font-semibold">AUD</span>
        <span className="font-semibold">CAD</span>
        <span className="font-semibold">CHF</span>
        <span className="font-semibold">GBP</span>
      </motion.div>
    </div>
  );
};

export default Section2;
