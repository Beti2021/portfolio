import React from "react";
import Bookstore from "../images/Bookstore.PNG";
import kesem from "../images/kesem.PNG";
import portfolio from "../images/portfolio1.PNG";
import ProjectItem from "./ProjectItem";

function ProjectCard() {
    // List of projects with dynamic URLs for each project
    const projects = [
        {
            id: 1,
            name: "Portfolio Website",
            description: "A personal portfolio showcasing my skills and projects.",
            imageUrl: portfolio,
            projectUrl: "https://beti2021.github.io/portfolio/", // Dynamic URL
        },
        {
            id: 2,
            name: "Educational Platform",
            description: "A website that offers study materials, such as previous years' exam papers and PDF textbooks, often geared toward students.",
            imageUrl: kesem,
            projectUrl: "/educational-platform", // Dynamic URL
        },
        {
            id: 3,
            name: "E-commerce Platform",
            description: "A responsive e-commerce site with cart functionality.",
            imageUrl: Bookstore,
            projectUrl: "/e-commerce", // Dynamic URL
        },
        {
            id: 4,
            name: "Portfolio Website",
            description: "A personal portfolio showcasing my skills and projects.",
            imageUrl: portfolio,
            projectUrl: "https://beti2021.github.io/portfolio/", // Dynamic URL
        },
        {
            id: 5,
            name: "Portfolio Website",
            description: "A personal portfolio showcasing my skills and projects.",
            imageUrl: portfolio,
            projectUrl: "https://beti2021.github.io/portfolio/", // Dynamic URL
        },
        {
            id: 6,
            name: "Portfolio Website",
            description: "A personal portfolio showcasing my skills and projects.",
            imageUrl: portfolio,
            projectUrl: "https://beti2021.github.io/portfolio/", // Dynamic URL
        },
    ];

    return (
        <div className="container mt-5 pt-5">
            <h3 className="mb-4 text-center text-primary">Completed Projects</h3>
            <div className="row justify-content-center">
                {projects.map((project) => (
                    <div className="col-lg-4 col-md-4 col-12 mb-4" key={project.id}>
                        <ProjectItem
                            name={project.name}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            projectUrl={project.projectUrl} // Pass the project URL to ProjectItem
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectCard;
