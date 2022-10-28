/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import SmallImage from "./SmallImage";

const HeroCard = () => {
  const name = "<Olamilekan />";

  return (
    <section id="home" className="w-full relative bg-radius 2xl:pt-16">
      <div className="flex items-center justify-center lg:justify-around min-h-screen lg:h-screen 2xl:min-h-[45vh] 2xl:h-[45vh] w-full flex-col lg:flex-row lg:overflow-hidden relative bg-transparent">
        <motion.div className="md:max-w-[60vw] lg:w-[30vw] flex flex-col text-center lg:text-left text-white bg-transparent">
          <motion.p
            animate={{ opacity: 1, transition: { staggerChildren: 0.5 } }}
            initial={{ opacity: 0 }}
            className="text-2xl font-bold"
          >
            Hey, The name is
          </motion.p>
          <motion.p
            animate={{
              opacity: 1,
              transition: { staggerChildren: 0.5, delay: 0.2 },
            }}
            initial={{ opacity: 0 }}
            className="md:text-5xl text-4xl font-extrabold text-blue-600 whitespace-nowrap"
          >
            {name}
          </motion.p>
          <motion.p
            animate={{
              opacity: 1,
              transition: { staggerChildren: 0.5, delay: 0.3 },
            }}
            initial={{ opacity: 0 }}
            className="text-neutral-500 text-md mx-5 md:mx-0"
          >
            A self taught full stack developer, able to build a project from the
            ground up. I&apos;m versed in all the key languages, degin, code,
            and deploy in an organised and efficient manner.
          </motion.p>
        </motion.div>

        <SmallImage />
      </div>

      <ul className="absolute top-0 left-0 w-full h-full overflow-hidden [&_li]:absolute [&_li]:block [&_li]:list-none [&_li]:min-w-[20px] [&_li]:min-h-[20px] [&_li]:bg-black/20 [&_li]:animate-spin-slow z-10 [&_li]:bottom-[-150px]">
        <li
          className="left-[25%] w-[80px] h-[80px]"
          style={{ animationDelay: "0s" }}
        ></li>
        <li
          className="left-[10%] w-[20px] h-[20px]"
          style={{ animationDelay: "2s", animationDuration: "12s" }}
        ></li>
        <li
          className="left-[70%] w-[20px] h-[20px]"
          style={{ animationDelay: "4s" }}
        ></li>
        <li
          className="left-[40%] w-[60px] h-[60px]"
          style={{ animationDelay: "0s", animationDuration: "18s" }}
        ></li>
        <li
          className="left-[65%] w-[20px] h-[20px]"
          style={{ animationDelay: "0s" }}
        ></li>
        <li
          className="left-[75%] w-[110px] h-[110px]"
          style={{ animationDelay: "3s" }}
        ></li>
        <li
          className="left-[35%] w-[150px] h-[150px]"
          style={{ animationDelay: "7s" }}
        ></li>
        <li
          className="left-[50%] w-[25px] h-[25px]"
          style={{ animationDelay: "15s", animationDuration: "45s" }}
        ></li>
        <li
          className="left-[20%] w-[15px] h-[15px]"
          style={{ animationDelay: "2s", animationDuration: "35s" }}
        ></li>
        <li
          className="left-[85%] w-[150px] h-[150px]"
          style={{ animationDelay: "0s", animationDuration: "11s" }}
        ></li>
      </ul>
    </section>
  );
};

export default HeroCard;
