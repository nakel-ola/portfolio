import { urlFor } from "../sanity";

// Web Development Frontend Development Backend Development
export type Service = {
  title: string;
  image: string;
  description: string;
}

const items = [
  {
    title: "Frontend Developer",
    image: "/How_to_Become_a_Back_End_Developer.jpg",
    skills:
      "I am a frontend developer with a passion for building beautiful and functioning web application",
  },
  {
    title: "Web Designs",
    image: "/full_front_back.jpg",
    description:
      "I am a web designer with a passion for building beautiful and functioning web application",
  },
  {
    title: "React Native",
    image: "/typical-process-for-a-successful-mobile-development.jpeg",
    description:
      "I am a React Native with a passion for building beautiful and functioning mobile application",
  },
  {
    title: "Backend Developer",
    image: "/frontendbackend.jpg",
    description:
      "I am a backend developer with a passion for building beautiful and functioning web application",
  },
];

const ServiesCard = ({ services }: { services: Service[] }) => {

  return (
    <div id="services" className="min-h-screen snap-start pt-[50px] text-white border-b-4 border-neutral-700 w-full">
      <div className="flex items-center justify-center w-full my-2">
        <p className="text-5xl font-extrabold text-center md:w-[50vw] w-[100%]">
          I Know That{" "}
          <span className="text-blue-600">Good Apps</span> Means{" "}
          <span className="text-blue-600">Good Business</span>
        </p>
      </div>

      <div className="grid place-items-center mt-[40px]">
        <div className="lg:w-[85%] md:w-[100%] w-[100%] flex flex-wrap justify-center">
          {services.map((item: Service, index: number) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

function Card(props: { description: string; image: string; title: string }) {
  const truncate = (text: string, num: number) =>
    text.length > num ? text.substring(0, num) + "..." : text;

  const image = urlFor(props.image).toString();
  return (
    <div className="md:w-60 w-[85%] flex items-center flex-col m-2 rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 ease">
      <div className="w-[95%] md:h-40 h-[200px] mt-[5px] mb-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover rounded-xl"
        />
      </div>

      <div className="w-[95%] mt-2 mb-auto">
        <p className="text-xl font-extrabold py-2 px-1 text-center whitespace-nowrap">
          {props.title}
        </p>
        <p className="text-neutral-500 pb-2 px-1 text-center">
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default ServiesCard;
