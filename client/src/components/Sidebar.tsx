import clsx from "clsx";
import React, { useRef } from "react";
import { Link } from "react-scroll";
import useOnClickOutside from "../hooks/useOnClickOutside";

const items = ["home", "about", "skills", "services", "projects"];

const Sidebar = ({
  toggle,
  active,
  setActive,
  setToggle
}: {
  toggle: boolean;
  active: number;
  setActive(value: number): void;
  setToggle(value: boolean): void;
}) => {
  const ref: any = useRef<HTMLDivElement>();
  const capitalizeFirstLetter = (string: string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

    useOnClickOutside(ref,() => setToggle(false))
  return (
    <div
      ref={ref}
      className={clsx(
        "md:hidden fixed top-[56px] z-50 right-0 shadow-sm shadow-black/50 w-[200px] rounded-lg",
        toggle ? "inline" : "hidden"
      )}
    >
      <div className="">
        {items.map((text: string, index: number) => (
          <Link
            key={index}
            activeClass="active"
            to={`${text.toLowerCase()}`}
            spy={true}
            smooth={true}
            onSetActive={(to: string) => {
              if (to === text.toLowerCase()) setActive(index);
            }}
          >
            <div key={index} className="cursor-pointer" onClick={() => setToggle(false)}>
              <p className="text-white py-2 px-4">
                {capitalizeFirstLetter(text)}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="w-full grid place-items-center">
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          onSetActive={(to) => {
            if (to === "contact") setActive(5);
          }}
        >
          <button className="shadow-lg  rounded-full py-1 px-3 transition-all duration-300 ease bg-blue-600 text-lg hover:scale-105 hover:shadow-blue-900 text-white active:scale-95 mt-[15px] mb-[15px]">
            Let&apos;s Talk
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
