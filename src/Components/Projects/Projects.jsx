import React from "react";
import ProjectCard from "./ProjectCard";
import foodmoodImg from "../../assets/foodmoodimage.png";
import portfolioImg from "../../assets/portfoliowebsite.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-12 justify-center">
        <ProjectCard
          title="FoodMood"
          main="A MERN stack food ordering platform with secure authentication, admin panel, payment processing, and order management."
          image={foodmoodImg}
        />

        <ProjectCard
          title="Portfolio"
          main="A sleek and responsive personal portfolio showcasing projects, skills, and experience using modern web technologies."
          image={portfolioImg}
        />
      </div>
    </div>
  );
};

export default Projects;
