/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";
// import { useLockBodyScroll } from "../hooks/useLockBodyScroll";
import useOnClickOutside from "../hooks/useOnClickOutside";
import { urlFor } from "../sanity";
import { Project } from "./ProjectsCard";

interface RefDivElement {
  current: HTMLDivElement;
}

interface Props extends Project {
  handleHide(): void;
}

function ImageCard({
  image,
  index,
  active,
}: {
  image: string;
  index: number;
  active: number;
}) {
  const ref = useRef() as RefDivElement;
  useEffect(() => {
    if (index === active) {
      ref?.current?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "center",
      });
    }
  }, [index, active]);

  return (
    <div
      ref={ref}
      className="w-full md:w-fit max-h-[300px] md:max-h-[500px] md:h-[500px] overflow-hidden rounded-lg shrink-0 mx-2"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={urlFor(image).toString()}
        alt=""
        className="w-full h-full object-contain md:object-cover rounded-lg"
      />
    </div>
  );
}

const PopUpCard = ({
  handleHide,
  images,
  name,
  description,
  link,
  tech,
  category,
}: Props) => {
  const ref = useRef() as RefDivElement;

  const [active, setActive] = useState<number>(0);

  const handleBack = () => {
    setActive(active === 0 ? images.length - 1 : active - 1);
  };
  const handleForward = () => {
    setActive(active === images.length - 1 ? 0 : active + 1);
  };

  useOnClickOutside(ref, () => handleHide());
  // useLockBodyScroll()

  return (
    <div className="fixed top-0 w-full z-[9999] h-full bg-neutral-900/50 grid place-items-center text-white">
      <div
        ref={ref}
        className="w-[90%] md:w-[625px] rounded-xl overflow-y-scroll h-[95%] bg-neutral-800 overflow-hidden scrollbar-hide"
      >
        <div className="relative grid place-items-center bg-transparent scrollbar-hide mb-auto">
          <div className="w-full h-full relative mt-[6px] flex items-center overflow-scroll rounded-lg scrollbar-hide">
            {images.map((image: string, index: number) => (
              <ImageCard
                key={index}
                image={image}
                index={index}
                active={active}
              />
            ))}
          </div>

          <div
            onClick={handleHide}
            className="absolute top-0 right-0 bg-neutral-900 w-fit m-[20px] rounded-full z-20 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <IoClose className="text-white text-[25px] bg-transparent" />
          </div>

          {active !== 0 && (
            <div
              className="absolute top-[50%] left-0 translate-y-[-50%] p-[5px] hover:scale-110 transition-transform duration-300 ease hover:bg-slate-50/5 rounded-full bg-transparent z-20"
              onClick={handleBack}
            >
              <IoChevronBack className="md:text-5xl text-3xl text-white drop-shadow-xl bg-transparent" />
            </div>
          )}

          {active !== images.length - 1 && (
            <div
              className="absolute top-[50%] right-2 rounded-full translate-y-[-50%] p-[5px] hover:scale-110 hover:bg-slate-50/5 transition-transform duration-300 ease bg-transparent z-20"
              onClick={handleForward}
            >
              <IoChevronForward className="md:text-5xl text-3xl text-white drop-shadow-xl bg-transparent" />
            </div>
          )}
        </div>

        <div className="flex justify-center items-center mt-4">
          {images.length > 1 &&
            images.map((image: string, index: number) => (
              <div
                key={index}
                className={clsx(
                  "rounded-full bg-transparent mx-1 h-[10px]",
                  index === active
                    ? "w-[30px] bg-slate-200"
                    : "bg-neutral-400 w-[10px] "
                )}
                onClick={() => setActive(index)}
              ></div>
            ))}
        </div>

        <div className="w-fit bg-transparent mt-2 mb-auto mx-3">
          <p className="text-4xl font-extrabold py-2 px-1 bg-transparent">
            {name}
          </p>
          <p className="text-neutral-500 bg-transparent pb-4 px-1">
            {description}
          </p>

          <div className="px-2 py-2 bg-transparent">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600/10 w-fit px-4 py-2 rounded-lg my-2 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 text-blue-600"
            >
              Live Preview
            </a>
          </div>
          {/* <div className="bg-blue-600/10 w-fit px-4 py-2 rounded-lg my-2 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95">
            <p className="text-blue-600 bg-transparent">Live Preview</p>
          </div> */}

          <div className="bg-transparent my-2 px-2 py-2">
            <p className="bg-transparent text-xl font-bold">Categories</p>
            <div className="flex flex-wrap items-center bg-transparent">
              {category.map((text: string, index: number) => (
                <div
                  key={index}
                  className="shadow-md py-2 px-3 m-2 rounded-lg hover:scale-105 active:scale-95 transition-all duration-300 ease cursor-pointer shrink-0 bg-neutral-800"
                >
                  <p className="bg-transparent whitespace-nowrap">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-transparent my-2 px-2 py-2">
            <p className="bg-transparent text-xl font-bold">Tech Stack</p>
            <div className="flex flex-wrap items-center bg-transparent">
              {tech.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col m-2 w-24 h-28 hover:scale-105 active:scale-95 transition-all duration-300 ease cursor-pointer bg-transparent"
                >
                  <div
                    className={clsx(
                      "h-16 w-16 rounded-full flex items-center justify-center",
                      skill.color
                    )}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={urlFor(skill.image).toString()}
                      alt=""
                      className="h-10 w-10 object-contain bg-transparent"
                    />
                  </div>
                  <p className="text-base bg-transparent">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpCard;
