import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { Link } from "react-scroll";
import AboutCard, { About } from "../components/AboutCard";
import ContactCard from "../components/ContactCard";
import HeroCard from "../components/HeroCard";
import Menubar from "../components/Menubar";
import Navbar from "../components/Navbar";
import PopUpCard from "../components/PopUpCard";
import ProjectsCard, { Project } from "../components/ProjectsCard";
import ServiesCard, { Service } from "../components/ServiesCard";
import SkillsCard, { Skill } from "../components/SkillsCard";
import { fetchData } from "../utils/fetchData";

export interface Details extends Project {
  active: boolean;
}

type HomePropType = {
  about: About;
  skills: Skill[];
  services: Service[];
  projects: Project[];
};

export default function Home({
  about,
  skills,
  services,
  projects,
}: HomePropType) {
  const [active, setActive] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [details, setDetails] = useState<Details>({
    active: false,
    category: [],
    description: "",
    images: [],
    tech: [],
    name: "",
    link: "",
  });
  const items = ["home", "about", "skills", "services", "projects", "contact"];

  return (
    <div className="2xl:grid 2xl:place-items-center">
      <Head>
        <title>Olamilekan</title>
        <meta name="description" content="Portfolio" />
      </Head>
      <Navbar
        active={active}
        setActive={setActive}
        setToggle={setToggle}
        toggle={toggle}
      />

      <div className="2xl:w-[50%] grid place-items-center">
        <HeroCard />
        {/* <AboutCard about={about}/>
        <SkillsCard skills={skills}/>
        <ServiesCard services={services}/>
        <ProjectsCard setDetails={setDetails} details={details} projects={projects}/>
        <ContactCard /> */}

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
                    ? "w-[5px] h-[55px] bg-slate-200"
                    : "bg-neutral-400 w-[10px] h-[10px]"
                )}
              ></div>
            </Link>
          ))}
        </div>

        <Link
          activeClass="active"
          className="md:hidden"
          to={items.length - 1 === active ? items[0] : items[active + 1]}
          spy={true}
          smooth={true}
          duration={500}
          offset={active === 4 ? -100 : -20}
          onClick={() =>
            setActive(items.length - 1 === active ? 0 : active + 1)
          }
        >
          <div className="fixed h-[40px] w-[40px] rounded-full bg-blue-600 bottom-10 right-10 flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 ease text-white">
            {items.length - 1 === active ? (
              <IoChevronUp className="bg-transparent text-[30px]" />
            ) : (
              <IoChevronDown className="bg-transparent text-[30px]" />
            )}
          </div>
        </Link>

        <AnimatePresence>
          {toggle && (
            <Menubar
              setActive={setActive}
              toggle={toggle}
              setToggle={setToggle}
            />
          )}
        </AnimatePresence>

        {details.active && (
          <PopUpCard
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
              })
            }
          />
        )}
      </div>
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const data = await fetchData();
//   return {
//     props: data
//   }
// }

export async function getStaticProps() {
  const props = await fetch("http://localhost:3000/api/offline").then((res) =>
    res.json()
  );

  return {
    props,
  };
}
