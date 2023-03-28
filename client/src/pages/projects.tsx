import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { GetServerSideProps } from "next";
import React, { useState } from "react";
import { Details, HomePropType } from ".";
import Header from "../components/Header";
import PopUpCard from "../components/PopUpCard";
import ProjectSection from "../components/ProjectSection";
import { useStore } from "../context";
import { fetchData } from "../utils/fetchData";

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await fetchData();
    return {
      props: data,
    };
  } catch (err: any) {
    console.log(err);
    throw new Error(err.message);
  }
};



const Projects = ({ projects }: HomePropType) => {
  const [details, setDetails] = useState<Details>({
    active: false,
    category: [],
    description: "",
    images: [],
    tech: [],
    name: "",
    link: "",
    github: "",
  });
  return (
    <div className="flex-1 min-h-screen flex flex-col items-center overflow-x-hidden">
      <Header />

      <main className="">
        <ProjectSection
          items={projects!}
          setDetails={setDetails}
          showAll
        />
      </main>

      <AnimateSharedLayout>
        <AnimatePresence>
          {details.active && (
            <PopUpCard
              key="Pop"
              {...details}
              handleHide={() =>
                setDetails({
                  active: false,
                  category: [],
                  description: "",
                  images: [],
                  tech: [],
                  name: "",
                  link: "",
                  github: ""
                })
              }
            />
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
};

export default Projects;
