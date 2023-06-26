/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useState } from "react";
// import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { Link } from "react-scroll";
import {
  AboutResponse,
  ProjectResponse,
  ServiceResponse,
  SkillResponse,
} from "../../typing";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import PopUpCard from "../components/PopUpCard";
import ProjectSection from "../components/ProjectSection";
import ServicesSection from "../components/ServicesSection";
import SkillsSection from "../components/SkillsSection";
import { fetchData } from "../utils/fetchData";

export type HomePropType = {
  about: AboutResponse;
  skills: SkillResponse[];
  services: ServiceResponse[];
  projects: ProjectResponse[];
};

export default function Home({
  about,
  skills,
  services,
  projects,
}: HomePropType) {
  const [active, setActive] = useState(0);
  const [details, setDetails] = useState<ProjectResponse | null>(null);
  const items = ["home", "services", "about", "projects", "skills", "contact"];

  return (
    <>
      <Head>
        <title>Olamilekan | Personal website for Nunu Olamilekan</title>
        <meta
          name="description"
          content="Personal website for Nunu Olamilekan"
        />
        <link rel="icon" href="/logo-search-grid-2x.png" />
      </Head>
      <div className="flex-1 min-h-screen flex flex-col items-center">
        <Header />

        <main className="">
          <HeroSection />
          <ServicesSection items={services!} />
          <AboutSection data={about!} />
          <ProjectSection items={projects!} setDetails={setDetails} />
          <SkillsSection items={skills!} />
          <ContactSection />
        </main>

        <Link
          activeClass="active"
          className="md:hidden"
          to={items.length - 1 === active ? items[0] : items[active + 1]}
          spy={true}
          smooth={true}
          duration={500}
          offset={-20}
          onClick={() =>
            setActive(items.length - 1 === active ? 0 : active + 1)
          }
        >
          <button className="fixed h-[40px] w-[40px] rounded-full bg-blue-600 bottom-10 right-10 flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 ease text-white z-50">
            {items.length - 1 === active ? (
              <img
                src="/icons/chevron-up-outline.svg"
                className="bg-transparent text-[30px]"
              />
            ) : (
              <img
                src="/icons/chevron-down-outline.svg"
                className="bg-transparent text-[30px]"
              />
            )}
          </button>
        </Link>

        <div className="fixed top-[50%] right-0 translate-y-[-50%] h-32 w-10 md:flex hidden items-center justify-evenly flex-col bg-transparent">
          {items.map((text: string, index: number) => (
            <Link
              key={index}
              activeClass="active"
              to={`${text.toLowerCase()}`}
              spy={true}
              smooth={true}
              onSetActive={(to) =>
                to === text.toLowerCase() && setActive(index)
              }
            >
              <div
                className={clsx(
                  "rounded-full bg-transparent",
                  index === active
                    ? "w-[15px] h-[15px] bg-slate-200"
                    : "bg-neutral-500 w-[10px] h-[10px]"
                )}
              />
            </Link>
          ))}
        </div>

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
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetchData();
  return {
    props: data,
  };
};

{
  /**
   * 
   * depandences
   * 
   * 
   "@emotion/react": "^11.10.4",
    "@emotion/styled": "^11.10.4",
    "@mui/material": "^5.10.5",
    "react-transition-group": "^4.4.5"
*/
}
