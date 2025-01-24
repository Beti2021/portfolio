import React from "react";
import SkillCard from "./SkillCard";
import TestimonialCard from "./TestimonialCard";
import photo from "../images/photo.jpg";
import { motion } from "framer-motion"; 

function AboutSection() {
    return (
        <div className="min-vh-100 text-white d-flex flex-column align-items-center py-5">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-12 text-center">
                        <motion.h1
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 50 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mt-5 mb-3"
                        >
                            About Me
                        </motion.h1>
                        <motion.p
                            className="w-75 mx-auto"
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 50 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            I’m a Frontend Developer who loves building easy-to-use, responsive websites. I enjoy turning ideas into real, functional digital solutions.
                        </motion.p>
                    </div>
                </div>

                <div className="row align-items-center justify-content-center mt-3">
                    <div className="col-12 d-flex justify-content-center">
                        <motion.div
                            className="my-4"
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 50 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
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
                        </motion.div>
                    </div>
                </div>

                <div className="row align-items-center justify-content-center mt-3">
                    <div className="col-lg-6 col-md-6 col-12">
                        <motion.p
                            className="w-75 mx-auto text-lg-left"
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 50 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            With a background in information systems and a keen interest in front-end technologies like React, HTML, CSS, and JavaScript, I aim to build intuitive and engaging web experiences.
                        </motion.p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <motion.p
                            className="w-75 mx-auto text-lg-left mt-1"
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 50 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            My goal is to continue learning, stay updated with the latest trends in web development, and collaborate on exciting projects that solve real-world problems.
                        </motion.p>
                    </div>
                </div>

                <motion.div
                    className="text-center mt-3"
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                >
                    <motion.a
                        href="/assets/CV.pdf"
                        download="Betelhem_Tadese_CV"
                        className="btn btn-success"
                    >
                        Download My CV
                    </motion.a>
                </motion.div>
            </div>

            <SkillCard />
            <TestimonialCard />
        </div>
    );
}

export default AboutSection;
