/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IoLogoJavascript, IoLogoNodejs, IoLogoReact } from "react-icons/io5";

const SmallImage = () => {
  return (
    <div className="items-center justify-center flex my-10 mb-14 mr-0 md:mr-10 relative">
      <div className="h-[180px] w-[180px] lg:h-[250px] lg:w-[250px] rounded-3xl rotate-45 shadow-sm shadow-black overflow-hidden hover:scale-110 active:scale-95 border-[6px] border-blue-600 glow relative bg-dark transition-transform duration-300">
        <img
          src="/20221013_173628-removebg.png"
          alt=""
          className="absolute top-[50%] left-[50%] translate-x-[-30%] translate-y-[-40%] object-contain h-[300px] w-[300px] lg:h-[350px] lg:w-[350px] -rotate-45 scale-125 bg-dark"
        />
      </div>

      <div className="flex lg:hidden">
        <div className="m-2 h-[60px] w-[60px] rounded-full bg-white/10 flex items-center justify-center -translate-y-36 -translate-x-56 absolute">
          <IoLogoJavascript size={30} className="rounded-lg text-yellow-400" />
        </div>

        <div className="m-2 h-[60px] w-[60px] rounded-full bg-white/10 flex items-center justify-center translate-x-10 -translate-y-10 absolute">
          <IoLogoNodejs size={35} className="rounded-lg text-green-500" />
        </div>
        <div className="m-2 h-[60px] w-[60px] rounded-full bg-white/10 flex items-center justify-center -translate-x-72 translate-y-12 absolute">
          <IoLogoReact size={35} className="rounded-lg text-sky-400" />
        </div>
      </div>
    </div>
  );
};

export default SmallImage;
