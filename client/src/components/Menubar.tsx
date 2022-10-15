import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
import useOnClickOutside from "../hooks/useOnClickOutside";

const items = ["home", "about", "skills", "services", "projects"];

type Props = {
  toggle: boolean;
  setActive(value: number): void;
  setToggle(value: boolean): void;
};

const Menubar = ({ toggle, setActive, setToggle }: Props) => {
  const ref: any = useRef<HTMLDivElement>();
  const capitalizeFirstLetter = (string: string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  useOnClickOutside(ref, () => setToggle(false));

  return (
    <motion.div
      className={
        toggle
          ? "fixed top-0 right-0 h-screen w-full bg-black/70 z-50"
          : "-z-50"
      }
      initial={{ zIndex: -50 }}
      animate={{ zIndex: 50 }}
      exit={{ zIndex: -50 }}
      // transition={{
      //   delay: 0.1,
      //   when: "beforeChild",
      // }}
    >
      <motion.div
        ref={ref}
        className="h-full bg-dark float-right"
        initial={{ width: "0%" }}
        animate={{ width: "60%", float: "right" }}
        exit={{ width: 0, float: "right" }}
        transition={{
          duration: 0.1
        }}
      >
        <div
          className="float-right h-[35px] w-[35px] m-2"
          onClick={() => setToggle(false)}
        >
          <IoClose className="text-4xl text-white" />
        </div>

        <div className="mt-10">
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
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => setToggle(false)}
              >
                <p className="text-white py-2 px-4 text-xl">
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
            className="w-[60%]"
          >
            <button className="shadow-lg rounded-full py-2 px-3 transition-all duration-300 ease bg-blue-600 text-lg hover:scale-105 hover:shadow-blue-900 text-white active:scale-95 mt-[15px] mb-[15px] w-full">
              Let&apos;s Talk
            </button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Menubar;
