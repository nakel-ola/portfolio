import clsx from "clsx";
import { useState } from "react";
import { Details } from "../pages";
import { urlFor } from "../sanity";
import { Skill } from "./SkillsCard";

const categories = ["All", "Web App", "Mobile App", "Desktop App"];

export type Project = {
  name: string;
  category: string[];
  description: string;
  tech: Skill[];
  images: string[];
  link: string;
}

const ProjectsCard = ({details,setDetails,projects}: {
  setDetails(values: Details): void;
  details: Details;
  projects: Project[];
}) => {
  const [active, setActive] = useState("All");

  const items =
    active === "All"
      ? projects
      : projects.filter((project: Project) =>
          project.category.includes(active)
        );

  return (
    <div id="projects" className="min-h-screen snap-start pt-[50px] text-white border-b-4 border-neutral-700 w-full pb-8">
      <div className="flex items-center justify-center w-full my-2">
        <p className="text-5xl font-extrabold text-center ">
          My Creative{" "}
          <span className="text-blue-600 ">Portfolio</span>{" "}
          Section
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center my-[40px]">
        {categories.map((text: string, index: number) => (
          <div
            key={index}
            className={clsx(
              "shadow-md py-2 px-3 rounded-lg m-2 hover:scale-105 active:scale-95 transition-all duration-300 ease cursor-pointer shrink-0",
              active === text ? "bg-blue-600" : "bg-neutral-800"
            )}
            onClick={() => setActive(text)}
          >
            <p className=" whitespace-nowrap">{text}</p>
          </div>
        ))}
      </div>

      <div className="grid place-items-center">
        <div className="lg:w-[77.3%] md:w-[80%] w-[100%] flex flex-wrap justify-center">
          {items.map((project: Project, index: number) => (
            <Card
              key={index}
              {...project}
              onClick={() => setDetails({ ...project, active: true })}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

function Card(props: {
  category: string[];
  description: string;
  images: string[];
  name: string;
  onClick(): void;
}) {
  const truncate = (text: string, num: number) =>
    text.length > num ? text.substring(0, num) + "..." : text;
  return (
    <div
      className="shadow-sm bg-neutral-800 shadow-neutral-900 md:w-56 w-[85%] flex items-center flex-col m-2 rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 ease"
      onClick={props.onClick}
    >
      <div className="w-[95%] md:h-36 h-[200px] mt-[5px]  relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={urlFor(props.images[0]).toString()}
          alt=""
          className="h-full w-full object-cover rounded-xl  relative"
        />

        <div className="absolute -bottom-5 right-5 bg-dark shadow-md py-1 px-3 rounded-lg">
          <p className="">{props.category[0]}</p>
        </div>
      </div>

      <div className="w-[95%] mt-2 mb-auto h-fit">
        <p className="text-xl font-extrabold py-2 px-1 ">
          {props.name}
        </p>
        <p className="text-neutral-500 pb-2 px-1">
          {truncate(props.description, 70)}
        </p>
      </div>
    </div>
  );
}

export default ProjectsCard;
