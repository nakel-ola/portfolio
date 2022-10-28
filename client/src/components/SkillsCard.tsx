import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { urlFor } from "../sanity";
import Tooltip from "./Tooltip";

const items = [
  {
    name: "HTML5",
    img: "/html-logo.png",
    bg: "bg-red-200",
  },
  {
    name: "CSS3",
    img: "/css-logo.png",
    bg: "bg-blue-200",
  },
  {
    name: "Sass",
    img: "/sass-logo.png",
    bg: "bg-pink-200",
  },
  {
    name: "Tailwind css",
    img: "/tailwindcss-logo.svg",
    bg: "bg-sky-200",
  },
  {
    name: "Javascript",
    img: "/javascript-logo.png",
    bg: "bg-yellow-200",
  },
  {
    name: "Typescript",
    img: "/typescript-logo.png",
    bg: "bg-blue-200",
  },
  {
    name: "NodeJs",
    img: "/nodejs-logo.png",
    bg: "bg-lime-200",
  },
  {
    name: "React.js",
    img: "/react-logo.png",
    bg: "bg-cyan-200",
  },
  {
    name: "Next.js",
    img: "/nextjs-logo.svg",
    bg: "bg-slate-200",
  },
  {
    name: "React Native",
    img: "/reactnative-logo.png",
    bg: "bg-blue-200",
  },
  {
    name: "Electron",
    img: "/electron-logo.png",
    bg: "bg-gray-700",
  },
  {
    name: "MUI",
    img: "/mui-logo.svg",
    bg: "bg-blue-200",
  },
  {
    name: "Redux",
    img: "/redux-logo.png",
    bg: "bg-purple-200",
  },
  {
    name: "Graphql",
    img: "/graphql-logo.png",
    bg: "bg-pink-200",
  },
  {
    name: "Git",
    img: "/git-logo.png",
    bg: "bg-red-200",
  },
];

export type Skill = {
  name: string;
  image: string;
  color: string;
  percentage: number;
};

const SkillsCard = ({ skills }: { skills: Skill[] }) => {
  return (
    <div
      id="skills"
      className="min-h-screen 2xl:min-h-fit snap-start pt-[40px] text-white w-full"
    >
      <div className="flex items-center justify-center w-full my-2">
        <p className="text-5xl font-extrabold">
          My <span className="text-blue-600 ">Skills </span>
        </p>
      </div>

      <div className="flex w-full h-full justify-center mt-[60px]">
        <div className="md:w-[61.5vw] 2xl:w-full w-full flex flex-wrap items-center justify-center">
          {skills?.map((skill: Skill, index) => (
            <Card key={index} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ color, image, name, percentage }: Skill) => {
  const [visible, setVisible] = useState(false);
  return (
    <motion.div
      className="flex items-center justify-center flex-col m-2 w-24 h-28 cursor-pointer "
      onHoverStart={() => setVisible(true)}
      onHoverEnd={() => setVisible(false)}
    >
      <Tooltip
        placement="top-right"
        visible={visible}
        content={visible ? <Content name={name} color={color} percentage={percentage} /> : <div />}
      >
        <div
          className={clsx(
            "h-16 w-16 rounded-full flex items-center justify-center active:scale-95 transition-all duration-300",
            color
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={urlFor(image).toString()}
            alt=""
            className="h-10 w-10 object-contain"
          />
        </div>
      </Tooltip>
      <p className="text-base whitespace-nowrap">{name}</p>
    </motion.div>
  );
};


const Content = ({
  name,
  color,
  percentage,
}: {
  name: string;
  color: string;
  percentage: number;
}) => {
  const [mount, setMount] = useState(false);
  useEffect(() => setMount(true), []);

  return (
    <div className="h-[50px] w-[250px] bg-dark shadow-md shadow-black rounded-full flex flex-col justify-center items-center">
      {mount && (
        <>
          <div className="flex items-center justify-between w-[85%]">
            <p className="">{name}</p>
            <p className="">{percentage}%</p>
          </div>
          <div className="mx-3 relative w-[85%] mt-auto mb-2">
            <div className="w-full bg-neutral-400 h-1 rounded-lg relative"></div>
            <div
              className={clsx(
                "absolute h-full w-[50%] top-[50%] left-0 translate-y-[-50%] rounded-lg",
                color
              )}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </>
      )}
    </div>
  );
};

export default SkillsCard;
