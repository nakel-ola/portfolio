/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { ProjectResponse } from "../../typing";
import { Details } from "../pages";
import { urlFor } from "../sanity";

interface Props {
  showAll?: boolean;
  items: ProjectResponse[];
  setDetails: React.Dispatch<React.SetStateAction<Details>>;
}

const ProjectSection = (props: Props) => {
  const { items, setDetails, showAll = false } = props;

  const router = useRouter();
  return (
    <section
      id="projects"
      className={clsx(
        "w-[95vw] md:w-[80vw] 2xl:w-[1000px]",
        showAll ? "my-16" : "mt-16 "
      )}
    >
      <div className="flex items-center justify-center w-full my-2">
        <p className="text-5xl font-extrabold text-center ">
          My Creative <span className="text-blue-600 ">Portfolio</span> Section
        </p>
      </div>

      <div className="grid place-items-center mt-[40px]">
        <div className="flex flex-wrap justify-center mb-5">
          {(showAll ? items : items.slice(0, 3)).map(
            (item: ProjectResponse, index: number) => (
              <Card
                key={index}
                {...item}
                index={index}
                onClick={() => setDetails({ ...item, active: true })}
              />
            )
          )}
        </div>

        {!showAll && (
          <button
            className=" flex rounded-lg py-1 px-2 transition-all duration-300 ease border-[1.5px] border-neutral-400 text-base cursor-pointer hover:scale-105 text-white font-medium active:scale-95 shrink-0"
            onClick={() => router.push("/projects")}
          >
            See More
            <IoArrowForward size={25} className="mx-2 text-white" />
          </button>
        )}
      </div>
    </section>
  );
};

interface CardProps extends ProjectResponse {
  onClick(): void;
  index: number;
}

export const Card = (props: CardProps) => {
  const { category, images, name, tech, onClick, index } = props;
  let techString = tech.map((t) => t.name);
  return (
    <motion.div
      className="w-72 m-2 hover:scale-105 active:scale-95 cursor-pointer"
      onClick={onClick}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 * index }}
      id="project-popup"
    >
      <div className="md:h-52 h-[200px] w-[95%] shrink-0 relative">
        <img
          src={urlFor(images[0]).toString()}
          alt=""
          className="h-full w-full object-cover relative rounded-lg"
        />
        <div className="absolute -bottom-5 right-5 bg-dark shadow-md py-1 px-3 rounded-lg">
          <p className="">{category[0]}</p>
        </div>
      </div>

      <div className="p-2 mt-2 mb-auto">
        <p className="font-medium text-xl">{name}</p>
        <p className="text-neutral-400">{techString.join(", ")}</p>
        <button className="text-blue-600 hover:underline">Read more</button>
      </div>
    </motion.div>
  );
};

export default ProjectSection;
