/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { SkillResponse } from "../../typing";
import { urlFor } from "../sanity";
import Tooltip from "./Tooltip";

interface Props {
  items: SkillResponse[];
}
const SkillsSection = (props: Props) => {
  const { items = [] } = props;
  return (
    <section id="skills" className="mt-16 w-[95vw] md:w-[80vw] 2xl:w-[1000px]">
      <div className="flex items-center justify-center w-full my-2">
        <p className="text-5xl font-extrabold">
          My <span className="text-blue-600 ">Skills </span>
        </p>
      </div>

      <div className="flex mt-10 justify-center">
        <div className="">
          <div className="md:w-[61.5vw] 2xl:w-full w-full flex flex-wrap items-center justify-center">
            {items?.map((skill: SkillResponse, index: number) => (
              <Card key={index} {...skill} index={index} />
            ))}
          </div>
        </div>
        <div className=""></div>
      </div>
    </section>
  );
};

interface CardProps extends SkillResponse {
  index: number
}
const Card = (props: CardProps) => {

  const { color, image, name, percentage,index } = props
  const [visible, setVisible] = useState(false);


  return (
    <motion.div
      className="flex items-center justify-center flex-col m-2 w-24 h-28 cursor-pointer "
      onHoverStart={() => setVisible(true)}
      onHoverEnd={() => setVisible(false)}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: 0.1 * index }}
    >
      <Tooltip
        placement="top-right"
        visible={visible}
        content={
          visible ? (
            <Content name={name} color={color} percentage={percentage} />
          ) : (
            <div />
          )
        }
      >
        <div
          className="h-[60px] w-[60px] rounded-full flex items-center justify-center active:scale-95 transition-all duration-300"
        >
          <img
            src={urlFor(image).toString()}
            alt=""
            className="h-14 w-14 object-contain bg-transparent"
          />
        </div>
      </Tooltip>
      <p className="text-base whitespace-nowrap">{name}</p>
    </motion.div>
  );
};

interface ContentProps {
  name: string;
  color: string;
  percentage: number;
}

const Content = ({ name, color, percentage }: ContentProps) => {
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
              className="absolute h-full w-[50%] top-[50%] left-0 translate-y-[-50%] rounded-lg"
              style={{ width: `${percentage}%`, backgroundColor: color }}
            ></div>
          </div>
        </>
      )}
    </div>
  );
};

export default SkillsSection;
