import React from "react";
import avatarImg from "../../assets/avatar.png";
import TextChange from "../TextChange";

const Home = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("Footer");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight pt-5">
          🎨 A Frontend Web Developer with a Passion for Design. I love turning
          ideas into elegant, functional, and interactive web experiences. I
          focus on clean UI, smooth user experience, and modern design
          principles.
        </p>
        <button
          onClick={scrollToContact}
          className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Contact Me
        </button>
      </div>
      <div className="flex justify-center items-center relative md:mt-[-40px]">
        <img className="max-h-100" src={avatarImg} alt="Avatar" />
      </div>
    </div>
  );
};

export default Home;
