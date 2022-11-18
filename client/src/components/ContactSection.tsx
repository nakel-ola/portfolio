import React, { ChangeEvent, FormEvent, useState } from "react";
import { IoMail, IoPhonePortrait } from "react-icons/io5";
import ReactLoading from "react-loading";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    await fetch("/api/addContact", {
      body: JSON.stringify(form),
      method: "POST",
    });

    setLoading(false);
    setIsSubmitted(true);
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <section id="contact" className="my-14 w-[95vw] md:w-[80vw] 2xl:w-[1000px]">
      <div className="flex items-center justify-center w-full my-2">
        <p className="text-5xl font-extrabold text-center">
          {" "}
          Take <span className="text-blue-600 ">A Coffee</span> & Chat{" "}
          <span className="text-blue-600 ">With Me</span>
        </p>
      </div>

      <div className="md:flex md:justify-center mt-[40px] grid place-items-center">
        <div className="flex items-center bg-blue-600/20 px-5 rounded-lg w-[90%] md:w-[320px] my-2 cursor-pointer m-2 h-[55px]">
          <div className="h-10 w-10">
            <IoMail className="text-[40px] text-blue-600" />
          </div>

          <a
            href="mailto:nunuolamilekan@gmail.com"
            className="text-lg pl-2 h-full flex items-center w-full"
          >
            nunuolamilekan@gmail.com
          </a>
        </div>
        <div className="flex items-center bg-slate-300 px-5 rounded-lg w-[90%] md:w-[320px] my-2 cursor-pointer m-2 h-[55px]">
          <div className="h-10 w-10">
            <IoPhonePortrait className="text-[40px] text-slate-700" />
          </div>

          <a
            href="tel: +234 915 266 3635"
            className="text-lg pl-2 text-black h-full flex items-center w-full"
          >
            +234 915 266 3635
          </a>
        </div>
      </div>

      {loading && (
        <div className="w-full grid place-items-center py-4">
          <ReactLoading type="spin" color="#fff" />
        </div>
      )}

      {!loading && !isSubmitted && (
        <div className="grid place-items-center">
          <form
            onSubmit={handleSubmit}
            className="md:w-[50%] w-[90%] grid place-items-center mt-[40px]"
          >
            <div className="w-full bg-neutral-800 rounded-lg my-2 overflow-hidden">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="text-base py-2 px-3 text-white w-full border-0 outline-0 bg-transparent"
                placeholder="You Name"
              />
            </div>
            <div className="w-full bg-neutral-800 rounded-lg my-2 overflow-hidden">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="text-base py-2 px-3 text-white w-full border-0 outline-0 bg-transparent"
                placeholder="You Email"
              />
            </div>
            <div className="w-full bg-neutral-800 rounded-lg my-2 overflow-hidden">
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="text-base py-2 px-3 text-white w-full border-0 outline-0 bg-transparent resize-none"
              ></textarea>
            </div>

            <button
              disabled={!form.email || !form.name || !form.message}
              className="shadow-lg my-2 rounded-full py-1 px-3 transition-all duration-300 ease disabled:opacity-40 disabled:scale-100 disabled:shadow-none bg-blue-600 text-lg hover:scale-105 hover:shadow-blue-900 active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>
      )}

      {isSubmitted && (
        <div className="w-full grid place-items-center py-4">
          <p className="text-5xl text-center">
            Thank you for getting in touch!
          </p>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
