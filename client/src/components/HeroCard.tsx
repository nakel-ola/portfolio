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
    <section
      id="home"
      className="flex items-center 2xl:justify-center lg:justify-around min-h-screen lg:h-screen 2xl:h-[calc(80vh)] w-full border-b-4 border-neutral-700 flex-col lg:flex-row 2xl:flex-col pt-[100px] md:mt-0 lg:overflow-hidden"
    >
      <SmallImage />
      <div className="lg:h-full 2xl:h-fit flex flex-col justify-center mt-10 lg:mt-0 2xl:mt-10">
        <motion.div className="md:mt-auto md:max-w-[60vw] 2xl:w-[30vw] lg:w-[30vw] flex flex-col text-center lg:text-left 2xl:text-center justify-center text-white">
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
            className="md:text-5xl text-4xl font-extrabold text-blue-600 whitespace-nowrap"
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
            A self taught full stack developer, able to build a project from the
            ground up. I&apos;m versed in all the key languages, degin, code,
            and deploy in an organised and efficient manner.
          </motion.p>
        </motion.div>

        <div className="lg:mt-auto 2xl:mt-10 mt-10 mb-5 flex items-center justify-center flex-col">
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
      <div className=" w-[30%] relative h-full lg:grid place-items-center justify-center hidden mt-auto 2xl:hidden">
        <ImageCard />
      </div>
    </section>
  );
};

export default HeroCard;
