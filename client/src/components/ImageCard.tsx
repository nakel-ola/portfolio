/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React from "react";

const ImageCard = () => {

  const variants = (top: string, left: string,duration: number) => ({
    hidden: {
      top: "-60px",
      left:  "0px"
    },
    visible: {
      top,
      left,
      transition: {
        staggerChildren: 0.5,duration,delay: duration
      }
    }
  })
  return (
    <div className="w-[40vw] h-full grid place-items-center">
      <div className="relative mx-auto group lg:h-[300px] lg:w-[300px] md:h-[200px] md:w-[200px] rounded-3xl transition-all duration-300 grid place-items-center  glow-p">
        <div className="relative mx-auto group lg:h-[300px] lg:w-[300px] md:h-[200px] md:w-[200px] rounded-3xl border-[6px] border-blue-600 glow overflow-hidden transition-all duration-300 grid place-items-center rotate-45" />

        <motion.div variants={variants("-60px", "0px",0)} animate="visible" initial="hidden" className="h-[60px] w-[60px] absolute top-[-60px] left-[-0px]">
          <img
            src="/html-logo.png"
            alt=""
            onContextMenu={(e) => e.preventDefault()}
            className="h-full w-full object-cover"
          />
        </motion.div>
        <motion.div variants={variants("20px", "-90px",0.1)} animate="visible" initial="hidden" className="h-[60px] w-[60px] absolute top-[20px] left-[-90px]">
          <img
            src="/tailwindcss-logo.svg"
            alt=""
            onContextMenu={(e) => e.preventDefault()}
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div variants={variants("120px", "-140px",0.2)} animate="visible" initial="hidden" className="h-[60px] w-[60px] absolute top-[120px] left-[-140px]">
          <img
            src="/javascript-logo.png"
            alt=""
            onContextMenu={(e) => e.preventDefault()}
            className="h-full w-full object-cover rounded-full"
          />
        </motion.div>
        <motion.div variants={variants("220px", "-90px",0.3)} animate="visible" initial="hidden" className="h-[60px] w-[60px] absolute top-[220px] left-[-90px]">
          <img
            src="/react-logo.png"
            alt=""
            onContextMenu={(e) => e.preventDefault()}
            className="h-full w-full object-cover"
          />
        </motion.div>
        <motion.div variants={variants("320px", "-20px",0.4)} animate="visible" initial="hidden" className="h-[60px] w-[60px] absolute top-[320px] left-[-20px]">
          <img
            src="/nodejs-logo.png"
            alt=""
            onContextMenu={(e) => e.preventDefault()}
            className="h-full w-full object-cover"
          />
        </motion.div>
        <img
          src="/20221013_173628-removebg.png"
          alt=""
          onContextMenu={(e) => e.preventDefault()}
          className="absolute top-0 left-0 object-contain md:h-[450px] md:w-[450px] scale-125"
        />
      </div>
    </div>
  );
};

export default ImageCard;
