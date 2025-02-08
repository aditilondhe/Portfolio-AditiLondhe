import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-4 md:p-6 items-center font-[dancing-script]"
    >
      <div>
        <h1 className="text-2xl md:text-4xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel free to reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-2 items-center">
          <MdOutlineEmail size={20} />
          <a href="mailto:aditivlondhe@gmail.com" className="hover:underline">
            aditivlondhe@gmail.com
          </a>
        </li>
        <li className="flex gap-2 items-center">
          <CiLinkedin size={20} />
          <a
            href="https://www.linkedin.com/in/aditilondhe/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/aditilondhe
          </a>
        </li>
        <li className="flex gap-2 items-center">
          <FaGithub size={20} />
          <a
            href="https://github.com/aditilondhe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/aditilondhe
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
