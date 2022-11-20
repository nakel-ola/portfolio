/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React from "react";
import { ServiceResponse } from "../../typing";
import { urlFor } from "../sanity";
// service

interface Props {
  items: ServiceResponse[];
}
const ServicesSection = (props: Props) => {
  const { items = [] } = props;
  return (
    <motion.div id="services" className="w-[95vw] md:w-[80vw] 2xl:w-[1000px] mt-16">
      <div className="flex items-center justify-center w-full my-2">
        <p className="text-5xl font-extrabold text-center md:w-[50vw] w-full">
          I Know That <span className="text-blue-600">Good Apps</span> Means{" "}
          <span className="text-blue-600">Good Business</span>
        </p>
      </div>

      <div className="grid place-items-center mt-[40px]">
        <div className="flex flex-wrap justify-center mt-10 w-full ">
          {items.map((item: ServiceResponse, index: number) => (
            <Card key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

interface CardProps {
  description: string;
  image: string;
  title: string;
  index: number;
}
const Card = (props: CardProps) => {
  const { description, image, title, index } = props;
  const newImage = urlFor(props.image).toString();

  return (
    <motion.div
      className="w-60 h-fit flex my-2 mx-1 items-center flex-col rounded-2xl hover:scale-105 active:scale-95 cursor-pointer transition-all duration-300 ease shadow-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.1 * index }}
    >
      <div className="w-[95%] h-40 mt-[5px] mb-auto">
        <img
          src={newImage}
          onContextMenu={(e) => e.preventDefault()}
          alt=""
          className="h-full w-full object-cover rounded-xl"
        />
      </div>

      <div className="w-[95%] mt-2 mb-auto">
        <p className="text-xl font-extrabold py-2 px-1 text-center whitespace-nowrap">
          {title}
        </p>
        <p className="text-neutral-500 pb-2 px-1 text-center">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServicesSection;
