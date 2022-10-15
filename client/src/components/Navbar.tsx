import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-scroll";
import useScroll from "../hooks/useScroll";


const items = ["home", "about", "skills", "services", "projects", "contact"];

function Reel(props: {
  isActive: boolean;
  text: string;
  onClick(value: string): void;
}) {

  const name = props.isActive ? `<${props.text} />` : props.text;
  return (
    <Link
      activeClass="active"
      to={props.text.toLowerCase()}
      spy={true}
      smooth={true}
      onSetActive={(to) => props.onClick(to)}
      className={clsx(
        "group p-2 hover:scale-105 transition-all duration-300 ease cursor-pointer flex items-center justify-center flex-col shrink-0",
        props.isActive && "scale-105"
      )}
    >
      <p
        className={clsx(
          "text-base group-hover:text-blue-600 transition-all duration-300 ease",
          props.isActive ? "text-blue-600 font-bold" : "text-white"
        )}
      >
        {name}
      </p>
    </Link>
  );
}

const Navbar = ({
  setActive,
  active,
  toggle,
  setToggle,
}: {
  active: number;
  toggle: boolean;
  setActive(value: number): void;
  setToggle(value: boolean): void;
}) => {
  const show = useScroll();

  return (
    <div
      className={clsx(
        "fixed top-0 w-full z-50 bg-dark flex items-center justify-between md:justify-around transition-all duration-300 ease 2xl:w-[80%]",
        show && "shadow-md"
      )}
    >
      
      <div className="p-2 flex cursor-pointer">
        <p className="text-2xl font-bold text-blue-600 mt-auto">Portfolio•</p>
      </div>

      <div className="space-x-10 hidden md:flex transition-all duration-300">
        <Reel
          isActive={active === 0}
          text="Home"
          onClick={(to) => {
            if (to === "home") setActive(0);
          }}
        />
        <Reel
          isActive={active === 1}
          text="About"
          onClick={(to: string) => {
            if (to === "about") setActive(1);
          }}
        />

        <Reel
          isActive={active === 2}
          text="Skills"
          onClick={(to: string) => {
            if (to === "skills") setActive(2);
          }}
        />

        <Reel
          isActive={active === 3}
          text="Services"
          onClick={(to: string) => {
            if (to === "services") setActive(3);
          }}
        />

        <Reel
          isActive={active === 4}
          text="Projects"
          onClick={(to: string) => {
            if (to === "projects") setActive(4);
          }}
        />
      </div>

      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        onSetActive={(to: string) => {
          if (to === "contact") setActive(5);
        }}
        className="hidden md:inline shrink-0"
      >
        <div className="shadow-lg  rounded-full py-1 px-3 transition-all duration-300 ease bg-blue-600 text-lg cursor-pointer hover:scale-105 hover:shadow-blue-900 text-white active:scale-95 shrink-0">
          Let&apos;s Talk
        </div>
      </Link>

      <div
        className="md:hidden h-[40px] w-[40px] flex items-center justify-center m-2 bg-blue-600 rounded-full hover:shadow-blue-900 shadow-lg active:scale-95 transition-all duration-300"
        onClick={() => setToggle(!toggle)}
      >
        <IoMenu className="text-3xl text-white" />
      </div>
    </div>
  );
};

export default Navbar;
