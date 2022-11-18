import React from "react";
import { IoLogoJavascript, IoLogoNodejs, IoLogoReact } from "react-icons/io5";
import SmallImage from "./SmallImage";

const HeroSection = () => {
  return (
    <section className="mt-16 flex flex-col-reverse lg:flex-row w-[95vw] md:w-[80vw] 2xl:w-[1000px] justify-between">
      <div className="w-[300px] ml-4 md:ml-2">
        <p className="text-5xl my-2">My name </p>
        <p className="text-5xl my-2">
          is <strong className="">Olamilekan</strong>
        </p>
        <p className="my-3 text-neutral-400">
          A self taught full stack developer, able to build a project from the
          ground up.
        </p>

        <button className="rounded-lg my-3 py-1 px-2 transition-all duration-300 ease bg-white text-base cursor-pointer hover:scale-105 text-black font-medium active:scale-95 shrink-0 flex">
          My Resume
        </button>
      </div>

      <IconsCard />

      <div className="">
        <SmallImage />
      </div>
    </section>
  );
};

const IconsCard = () => (
  <div className="hidden flex-col items-center justify-center lg:flex">
    <div className="m-2 h-[60px] w-[60px] rounded-full bg-white/10 flex items-center justify-center -translate-y-20 lg:translate-x-32 2xl:translate-x-48">
      <IoLogoJavascript size={30} className="rounded-lg text-yellow-400" />
    </div>
    <div className="m-2 h-[60px] w-[60px] rounded-full bg-white/10 flex items-center justify-center lg:translate-x-5 2xl:translate-x-10">
      <IoLogoNodejs size={35} className="rounded-lg text-green-500" />
    </div>
    <div className="m-2 h-[60px] w-[60px] rounded-full bg-white/10 flex items-center justify-center  translate-y-20 lg:translate-x-32 2xl:translate-x-48">
      <IoLogoReact size={35} className="rounded-lg text-sky-400" />
    </div>
  </div>
);

export default HeroSection;
