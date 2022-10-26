import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";
import { IconType } from "react-icons";
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoMailOutline,
  IoMenu,
} from "react-icons/io5";
import { Link } from "react-scroll";
import useScroll from "../hooks/useScroll";

interface Item {
  link: string;
  Icon: IconType;
}

const Navbar = ({
  setActive,
}: {
  setActive(value: number): void;
}) => {
  const show = useScroll();

  const items: Item[] = [
    {
      link: "mailto:nunuolamilekan@gmail.com",
      Icon: IoMailOutline,
    },
    {
      link: "https://www.instagram.com/lakky__t/",
      Icon: IoLogoInstagram,
    },
    {
      link: "https://github.com/olamilekan21",
      Icon: IoLogoGithub,
    },
  ];

  return (
    <div
      className={clsx(
        "fixed top-0 w-full z-50 bg-transparent flex items-center justify-between md:justify-around transition-all duration-300 ease 2xl:w-[80%]",
        show && "shadow-md bg-dark"
      )}
    >
      <div className="p-2 flex cursor-pointer">
        <p className="text-2xl font-bold text-blue-600 mt-auto md:block hidden">• Olamilekan</p>
        <p className="text-2xl font-bold text-blue-600 mt-auto md:hidden block">• Ola</p>
      </div>

      <div className="flex items-center">
        {items.map(({ Icon,link }: Item, index: number) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noreferrer"
            className="h-[35px] w-[35px] mx-2 flex items-center justify-center"
          >
            <Icon className="text-[25px] text-white hover:text-blue-600 hover:scale-105 active:scale-95" />
          </a>
        ))}
      </div>

      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        onSetActive={(to: string) => {
          if (to === "contact") setActive(5);
        }}
        className="shrink-0 mx-2"
      >
        <div className="shadow-lg rounded-full py-1 px-3 transition-all duration-300 ease bg-blue-600 text-lg cursor-pointer hover:scale-105 hover:shadow-blue-900 text-white active:scale-95 shrink-0">
          Let&apos;s Talk
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
