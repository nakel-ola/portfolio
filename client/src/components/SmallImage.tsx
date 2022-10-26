/* eslint-disable @next/next/no-img-element */
import React from "react";

const SmallImage = () => {
  return (
    <div className="items-center justify-center flex relative mt-20 lg:mt-0">
      <div className="h-[180px] w-[180px] lg:h-[200px] lg:w-[200px] rounded-3xl rotate-45 shadow-sm shadow-black overflow-hidden hover:scale-110 active:scale-95 border-[6px] border-blue-600 glow relative bg-dark">
        <img
          src="/20221013_173628-removebg.png"
          alt=""
          className="absolute top-[50%] left-[50%] translate-x-[-30%] translate-y-[-40%] object-contain h-[300px] w-[300px] -rotate-45 scale-125 bg-dark"
        />
      </div>
    </div>
  );
};

export default SmallImage;
