import { IoDownload } from "react-icons/io5";
import { urlFor } from "../sanity";

export type About = {
  bio: string;
  image: string;
  name: string;
  tel: string;
  address: string;
  email: string;
  resume: any;
};


const getUrlFromId = (ref: string) => {
  const [_file, id, extension] = ref.split("-");
  return `https://cdn.sanity.io/files/${process.env.SANITY_PROJECT_ID}/production/${id}.${extension}`;
};

async function downloadFile(url: string, fileName: string) {
  const res = await fetch(url);

  const data = await res.blob();
  const aElement = document.createElement("a");
  aElement.setAttribute("download", fileName);
  const href = URL.createObjectURL(data);
  aElement.href = href;
  aElement.setAttribute("target", "_blank");
  aElement.click();
  URL.revokeObjectURL(href);
}

const AboutCard = ({ about }: { about: About }) => {
  return (
    <div id="about" className="w-full pt-3 pb-8">
      {about ? (
        <>
          <div className="min-h-screen pt-[40px] snap-start text-white">
            <div className="flex items-center justify-center w-full my-2">
              <p className="text-5xl font-extrabold text-white">About <span className="text-blue-600 ">Me</span></p>
            </div>

            <div className="flex w-full h-full justify-center mt-[40px]  md:justify-evenly">
              <div className="hidden md:inline">
                <div className="h-[350px] w-[300px] overflow-hidden rounded-lg ml-auto">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={urlFor(about?.image).url()}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="">
                <div className="">
                  <p className="text-lg font-bold">Bio</p>
                  <p className="text-neutral-500 md:py-[8px] md:px-[8px] py-[8px] md:max-w-[40vw]">
                    {about.bio}
                  </p>
                </div>

                <div className="mt-[15px]">
                  <p className="text-lg font-bold">Contacts</p>
                  <div className="lg:flex">
                    <div className="">
                      <p className="text-neutral-500 md:py-[8px] md:px-[8px] py-[8px]">
                        <strong className="text-neutral-400">Full Name:</strong>{" "}
                        {about.name}
                      </p>
                      <p className="text-neutral-500 md:py-[8px] md:px-[8px] py-[8px]">
                        <strong className="text-neutral-400">
                          Phone No. :
                        </strong>{" "}
                        {about.tel}
                      </p>
                      <p className="text-neutral-500 md:py-[8px] md:px-[8px] py-[8px]">
                        <strong className="text-neutral-400">Address:</strong>{" "}
                        {about.address}
                      </p>
                      <p className="text-neutral-500 md:py-[8px] md:px-[8px] py-[8px]">
                        <strong className="text-neutral-400">Email:</strong>{" "}
                        {about.email}
                      </p>
                    </div>

                    <div className="w-full grid place-items-center md:w-fit md:inline ">
                      <div
                        onClick={() =>
                          downloadFile(
                            getUrlFromId(about.resume.asset._ref),
                            "Nunu Olamilekan  - Resume.pdf"
                          )
                        }
                        className="bg-neutral-700 rounded-lg flex items-center py-2 px-3 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 ease w-fit mt-2"
                      >
                        <IoDownload className="bg-transparent text-[30px]" />
                        <p className="pl-2 bg-neutral-700 whitespace-nowrap rounded-lg">
                          Download Resume
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default AboutCard;
