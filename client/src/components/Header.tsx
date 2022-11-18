import { useRouter } from "next/router";
import React from "react";
import { IconType } from "react-icons";
import {
  IoArrowBack,
  IoLogoGithub,
  IoLogoInstagram,
  IoMailOutline,
} from "react-icons/io5";
import { Link } from "react-scroll";

interface Item {
  link: string;
  Icon: IconType;
}

const Header = () => {
  const router = useRouter();

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
    <header
      id="home"
      className="w-[95vw] md:w-[80vw] 2xl:w-[1000px] flex items-center justify-between bg-transparent pt-2"
    >
      <div className="flex items-center">
        {router.pathname === "/projects" && (
          <button
            className="h-[35px] w-[35px] mx-2 flex items-center justify-center"
            onClick={() => router.push("/")}
          >
            <IoArrowBack className="text-[25px] text-white hover:text-blue-600 hover:scale-105 active:scale-95" />
          </button>
        )}
        {items.map(({ Icon, link }: Item, index: number) => (
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

      <div className="p-2  flex cursor-pointer">
        <p className="text-2xl font-bold text-white mt-auto md:block hidden">
          • Portfolio
        </p>
      </div>

      <Link to="contact" spy={true} smooth={true} duration={500} offset={-20}>
        <div className="rounded-lg py-1 px-2 transition-all duration-300 ease bg-white text-base cursor-pointer hover:scale-105 text-black font-medium active:scale-95 shrink-0">
          Let&apos;s Talk
        </div>
      </Link>
    </header>
  );
};

export default Header;
