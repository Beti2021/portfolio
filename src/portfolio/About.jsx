import React from "react";
import Bookstore from "../images/Bookstore.PNG";
import kesem from "../images/kesem.PNG";
import portfolio from "../images/portfolio.PNG";

function About() {
    const projects = [
        {
            id: 1,
            name: "Portfolio Website",
            description: "A personal portfolio showcasing my skills and projects.",
            imageUrl: portfolio,
        },
        {
            id: 2,
            name: "Educational Platform",
            description: "A website that offers study materials, such as previous years' exam papers and PDF textbooks, often geared toward students.",
            imageUrl: kesem,
        },
        {
            id: 3,
            name: "E-commerce Platform",
            description: "A responsive e-commerce site with cart functionality.",
            imageUrl: Bookstore,
        },
    ];

    return (
        <div
            id="about"
            className="min-vh-100 text-center mt-5 py-5 mb-5 text-white d-flex flex-column justify-content-center align-items-center"
        >
            <h1>About Me</h1>
            <p className="w-50 mx-auto">
                I'm a passionate Frontend Developer with a focus on creating user-friendly and responsive websites.
                I enjoy solving problems and turning ideas into digital experiences.
            </p>

            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-4 col-sm-12 mb-3 d-flex align-items-stretch">
                        <div className="p-4 bg-secondary shadow rounded flex-grow-1">
                            <h3>Experience</h3>
                            <p>1+ years of frontend development experience.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mb-3 d-flex align-items-stretch">
                        <div className="p-4 bg-secondary shadow rounded flex-grow-1">
                            <h3>Support</h3>
                            <p>
                                I offer support for web development projects, ensuring smooth functionality and design
                                optimization.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-100 mt-5">
                <h3 className="mb-4">Completed Projects</h3>
                <div className="row justify-content-center">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`${
                                index === 2 ? "col-lg-12 col-md-6 col-sm-12" : "col-lg-6 col-md-6 col-sm-12"
                            } mb-4 d-flex justify-content-center`}
                        >
                            <div className="d-flex flex-column h-100 p-4 bg-secondary shadow rounded">
                                <div className="project-image-wrapper">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.name}
                                        className="img-fluid w-100 rounded mb-3"
                                        style={{
                                            objectFit: "contain",
                                            maxHeight: "200px", // Ensures the image is responsive and doesn't cut
                                        }}
                                    />
                                    <div className="project-description">
                                        <p>{project.description}</p>
                                    </div>
                                </div>
                                <h4 className="mt-2 text-white" style={{ textDecoration: "none" }}>
                                    {project.name}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;
