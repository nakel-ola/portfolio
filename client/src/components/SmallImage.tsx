/* eslint-disable @next/next/no-img-element */
import React from "react";

const SmallImage = () => {
  return (
    <div className="flex h-[35vh] items-center justify-center lg:hidden 2xl:flex">
    <div className="h-[180px] w-[180px] rounded-3xl rotate-45 shadow-sm shadow-black overflow-hidden hover:scale-110 active:scale-95 border-[6px] border-blue-600 glow relative">
      <img
        src="/20221013_173628-removebg.png"
        alt=""
        className="absolute top-[50%] left-[50%] translate-x-[-30%] translate-y-[-40%] object-contain h-[300px] w-[300px] -rotate-45 scale-125"
      />
    </div>
  </div> 
  );
};

{/* <div className="h-[35vh] w-full md:hidden mt-[70px] mb-[40px] grid place-items-center">
      <div className="relative h-full w-full rounded-3xl overflow-hidden grid place-items-center glow-p ">
        <div className="relative mx-auto group h-[180px] w-[180px] rounded-3xl border-[6px] border-blue-600 glow overflow-hidden transition-all duration-300 grid place-items-center rotate-45" />
        <img
          src="/portrait-hero.png"
          alt=""
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] object-contain h-[180px] w-[180px] "
        />
      </div>
    </div> */}

export default SmallImage;
