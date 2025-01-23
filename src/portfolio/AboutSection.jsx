import React from "react";
import SkillCard from "./SkillCard";
import TestimonialCard from "./TestimonialCard";
import photo from "../images/photo.jpg";

function AboutSection() {
    return (
        <div className="min-vh-100 text-center mt-5 py-5 text-white d-flex flex-column align-items-center">
            <h1>About Me</h1>
            <p className="w-50 mx-auto">
                I'm a passionate Frontend Developer with a focus on creating user-friendly and responsive websites.
                I enjoy solving problems and turning ideas into digital experiences.
            </p>
            <div className="my-4"> {/* Centering the image */}
                <img
                    className="img-fluid shadow"
                    style={{
                        borderRadius: "50%",
                        width: "calc(150px + 10vw)",
                        height: "calc(150px + 10vw)",
                        objectFit: "cover",
                    }}
                    src={photo}
                    alt="Portfolio"
                />
            </div>

            {/* Skills and Testimonials are now separate components */}
            <SkillCard />
            <TestimonialCard />
        </div>
    );
}

export default AboutSection;
