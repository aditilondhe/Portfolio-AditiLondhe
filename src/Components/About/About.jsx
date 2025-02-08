import React from "react";
import AboutImg from "../../assets/aboutavatar.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white font-[italianno-regular] flex flex-col md:flex-row items-center justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 "
    >
      {/* Image Section */}
      <div className="md:w-1/3 flex justify-center">
        <img
          className="md:h-80 rounded-lg shadow-lg"
          src={AboutImg}
          alt="About"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-2/3 md:pl-10 mt-6 md:mt-0">
        <h2 className="text-2xl md:text-4xl font-bold mb-6"> About Me</h2>

        <ul className="space-y-6">
          <div className="flex gap-4 items-start">
            <IoArrowForward size={30} className="mt-1 text-[#e3dcbe]" />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Frontend Developer
              </h1>
              <p className="text-sm md:text-md leading-tight text-xl">
                I specialize in crafting responsive and interactive web
                experiences. I turn ideas into sleek and functional user
                interfaces with a focus on modern design principles.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <IoArrowForward size={30} className="mt-1 text-[#e3dcbe]" />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Graphic Designer
              </h1>
              <p className="text-sm md:text-md leading-tight text-xl">
                Passionate about creating visually stunning designs that
                communicate ideas effectively. I focus on clean aesthetics,
                modern typography, and captivating visuals.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <IoArrowForward size={30} className="mt-1 text-[#e3dcbe]" />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                UI/UX Enthusiast
              </h1>
              <p className="text-sm md:text-md leading-tight text-xl">
                I believe in user-centric design, ensuring a seamless and
                enjoyable experience across all platforms. My goal is to make
                interfaces that are both intuitive and beautiful.
              </p>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default About;
