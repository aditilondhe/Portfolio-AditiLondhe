import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaJava,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiCanva, SiCplusplus } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-6">
        Skills & Experience
      </h1>

      {/* Tech Stack Section */}
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-6 md:p-12 py-10">
          {[
            // Tech stack with corresponding icons
            { Icon: FaHtml5, color: "#E34F26" },
            { Icon: FaCss3, color: "#1572B6" },
            { Icon: FaJs, color: "#F7DF1E" },
            { Icon: FaReact, color: "#61DAFB" },
            { Icon: FaNodeJs, color: "#8CC84B" },
            { Icon: SiMongodb, color: "#47A248" },
            { Icon: SiMysql, color: "#00758F" },
            { Icon: FaFigma, color: "#F24E1E" },
            { Icon: SiCanva, color: "#00C4CC" },

            { Icon: SiCplusplus, color: "#00599C" },
            { Icon: FaJava, color: "#E76F00" },
          ].map(({ Icon, color }, index) => (
            <span
              key={index}
              className="p-3 bg-zinc-950 flex items-center rounded-2xl"
            >
              <Icon color={color} size={50} />
            </span>
          ))}
        </div>

        {/* Internship Experience (Vertical) */}
        <div className="w-full md:w-3/5 mt-8 font-[dancing-script]">
          <div className="bg-slate-950 bg-opacity-45 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-semibold">iMocha | GenAI Intern</h2>
            <p className="text-md font-light mb-3">
              June 2024 – September 2024 | Pune, IN
            </p>
            <ul className="text-lg leading-relaxed">
              <li>
                - Worked on Quality Assurance of ML-based product AI-Logicbox.
              </li>
              <li>
                - Leveraged GenAI in various aspects of the company’s product.
              </li>
              <li>
                - Conducted in-depth analysis of script-based coding assessments
                for AI-Logicbox.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
