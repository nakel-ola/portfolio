/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";
import { AboutResponse } from "../../typing";
import { urlFor } from "../sanity";

interface Props {
  data: AboutResponse;
}
const AboutSection = (props: Props) => {
  const { data } = props;
  const items = [
    {
      title: "Web Designing",
      percentage: 80,
      color: "bg-sky-400",
    },
    {
      title: "Frontend Development",
      percentage: 85,
      color: "bg-yellow-400",
    },
    {
      title: "Mobile Development",
      percentage: 75,
      color: "bg-blue-600",
    },
    {
      title: "Backend Development",
      percentage: 78,
      color: "bg-green-500",
    },
  ];

  return (
    <section id="about" className="w-[95vw] md:w-[80vw] 2xl:w-[1000px] mt-16">
      <div className="flex items-center justify-center w-full my-2">
        <p className="text-5xl font-extrabold text-white">
          About <span className="text-blue-600 ">Me</span>
        </p>
      </div>

      <div className="flex mt-10 justify-center">
        <motion.div
          className="hidden md:inline mr-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="h-[350px] w-[300px] overflow-hidden rounded-lg ml-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={urlFor(data.image).toString()}
              onContextMenu={(e) => e.preventDefault()}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-fit ml-0 md:ml-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="w-[95%] ml-4 md:ml-0">
            <p className="text-lg font-bold">Bio</p>
            <p className="text-neutral-500 w-[90%] py-[8px] md:max-w-[40vw]">
              {data.bio}
            </p>
          </div>

          {items.map((item, index) => (
            <div key={index} className="w-full md:w-[80%] flex flex-col items-center md:items-start justify-center">
              <div className="flex items-center justify-between w-[90%] py-2">
                <p className="">{item.title}</p>
                <p className="">{item.percentage}%</p>
              </div>
              <div className="relative w-[90%] mt-auto mb-2">
                <div className="w-full bg-neutral-400 h-1 rounded-lg relative"></div>
                <div
                  className={clsx(
                    "absolute h-full w-[50%] top-[50%] left-0 translate-y-[-50%] rounded-lg",
                    item.color
                  )}
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
