/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { IconType } from "react-icons";
import { IoLogoGithub, IoLogoInstagram, IoMail } from "react-icons/io5";
import ImageCard from "./ImageCard";
import SmallImage from "./SmallImage";

interface Item {
  name: string;
  value: string;
  link: string;
  Icon: IconType;
}

const HeroCard = () => {
  const [toggle, setToggle] = useState<string>("mail");

  const items: Item[] = [
    {
      name: "mail",
      value: "nunuolamilekan@gmail.com",
      link: "mailto:nunuolamilekan@gmail.com",
      Icon: IoMail,
    },
    {
      name: "instagram",
      value: "https://www.instagram.com/lakky__t/",
      link: "https://www.instagram.com/lakky__t/",
      Icon: IoLogoInstagram,
    },
    {
      name: "github",
      value: "https://github.com/olamilekan21",
      link: "https://github.com/olamilekan21",
      Icon: IoLogoGithub,
    },
  ];

  const selected = items.find((item: any) => item.name === toggle)!;

  const truncate = (text: string, num: number) =>
    text.length > num ? text.substring(0, num) + "..." : text;

  const name = "<Olamilekan />";

  return (
    <div
      id="home"
      className="md:h-screen 2xl:h-[calc(40vw)] w-full md:grid place-items-center snap-start mt-[0px] md:mt-0 overflow-hidden border-b-4 border-neutral-700"
    >
      <SmallImage />

      <div className="flex w-full md:h-full justify-around md:space-x-20">
        <div className="h-full flex flex-col justify-center">
          <motion.div className="mt-auto md:w-[40vw] lg:w-[30vw] flex flex-col text-center md:text-left justify-center text-white">
            <motion.p
              animate={{ opacity: 1, transition: { staggerChildren: 0.5 } }}
              initial={{ opacity: 0 }}
              className="text-2xl font-bold"
            >
              Hey, The name is
            </motion.p>
            <motion.p
              animate={{
                opacity: 1,
                transition: { staggerChildren: 0.5, delay: 0.2 },
              }}
              initial={{ opacity: 0 }}
              className="text-5xl font-extrabold text-blue-600 "
            >
              {name}
            </motion.p>
            <motion.p
              animate={{
                opacity: 1,
                transition: { staggerChildren: 0.5, delay: 0.3 },
              }}
              initial={{ opacity: 0 }}
              className="text-neutral-500 text-md mx-5 md:mx-0"
            >
              A self taught full stack developer, able to build a project from the ground up. I&apos;m versed in all the key languages, degin, code, and deploy in an organised and efficient manner.
            </motion.p>
          </motion.div>

          <div className="md:mt-auto mt-5 mb-5 flex items-center justify-center flex-col">
            <div className="group shadow-md py-2 px-3 bg-neutral-800 w-fit rounded-lg transition-all duration-300 ease cursor-pointer">
              <a
                href={selected.link}
                target="_blank"
                rel="noreferrer"
                className=" text-white group-hover:text-blue-500 group-hover:underline"
              >
                {truncate(selected.value, 26)}
              </a>
            </div>

            <div className="flex space-x-5 mt-5 w-full justify-center">
              {items.map(({ Icon, name }, index) => (
                <div
                  key={index}
                  onClick={() => setToggle(name)}
                  className={clsx(
                    "h-[35px] w-[35px] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95",
                    toggle === name ? "bg-blue-600" : "bg-neutral-800 shadow-md"
                  )}
                >
                  <Icon className="text-[25px] text-white" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative w-[30vw] h-full md:grid place-items-center justify-center hidden mt-[20px]">
          <ImageCard />
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
