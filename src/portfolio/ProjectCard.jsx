import React from "react";
import { motion } from "framer-motion";
import Bookstore from "../images/Bookstore.PNG";
import kesem from "../images/kesem.PNG";
import portfolio from "../images/portfolio1.PNG";
import ProjectItem from "./ProjectItem";


const cardVariants = {
  hidden: { opacity: 0, y: 50 }, 
  visible: { opacity: 1, y: 0 }, 
};

function ProjectCard() {
  const projects = [
    {
      id: 1,
      name: "Portfolio Website",
      description: "A personal portfolio showcasing my skills and projects.",
      imageUrl: portfolio,
      projectUrl: "https://beti2021.github.io/portfolio/",
    },
    {
      id: 2,
      name: "Educational Platform",
      description:
        "A website that offers study materials, such as previous years' exam papers and PDF textbooks, often geared toward students.",
      imageUrl: kesem,
      projectUrl: "https://beti2021.github.io/Kesem/",
    },
    {
      id: 3,
      name: "E-commerce Platform",
      description: "A responsive e-commerce site with cart functionality.",
      imageUrl: Bookstore,
      projectUrl: "https://beti2021.github.io/WebsiteOfBookstore/",
    },
  ];

  return (
    <div className="container mt-5 pt-5">
      <h3 className="mb-4 text-center text-primary">Completed Projects</h3>
      <div className="row justify-content-center">
        {projects.map((project, index) => (
          <motion.div
            className="col-lg-4 col-md-4 col-12 mb-4"
            key={project.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 1.0,
              delay: index * 0.6,
            }}
          >
            <ProjectItem
              id={project.id} 
              name={project.name}
              description={project.description}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
