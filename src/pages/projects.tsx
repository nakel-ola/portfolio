import { AnimatePresence } from "framer-motion";
import { GetServerSideProps } from "next";
import React, { useState } from "react";
import { HomePropType } from ".";
import { ProjectResponse } from "../../typing";
import Header from "../components/Header";
import PopUpCard from "../components/PopUpCard";
import ProjectSection from "../components/ProjectSection";
import { fetchData } from "../utils/fetchData";
import ContactSection from "../components/ContactSection";

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await fetchData();
    return { props: data };
  } catch (err: any) {
    console.log(err);
    throw new Error(err.message);
  }
};

const Projects = ({ projects }: HomePropType) => {
  const [details, setDetails] = useState<ProjectResponse | null>(null);
  return (
    <div className="flex-1 min-h-screen flex flex-col items-center overflow-x-hidden">
      <Header />

      <main className="">
        <ProjectSection items={projects!} setDetails={setDetails} showAll />
        <ContactSection />
      </main>

      <AnimatePresence>
        {details && (
          <PopUpCard
            key="Pop"
            {...details}
            handleHide={() => setDetails(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
