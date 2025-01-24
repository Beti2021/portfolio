import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import photo from "../images/photo.jpg";
import "animate.css";

function Home() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <div
            id="home"
            className="d-flex align-items-center justify-content-center w-100 m-auto min-vh-100"
        >
            <div className="container text-center text-white py-5">
                <div className="row">
                    
                    <motion.div
                        className={`col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center ${
                            animate ? "animate__animated animate__fadeInLeft" : ""
                        }`}
                        initial={{ opacity: 0, x: -100 }} 
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1
                            className="fw-bold text-wrap mb-3 "
                            style={{ fontSize: "calc(1.5rem + 1vw)" }}
                        >
                            Betelhem Tadese
                        </h1>

                        <h2
                            className="mb-3"
                            style={{ fontSize: "calc(1rem + 0.5vw)" }}
                        >
                            Frontend Developer and Designer
                        </h2>

                        <p
                            className="mb-3"
                            style={{ fontSize: "calc(0.9rem + 0.3vw)" }}
                        >
                            A passionate Frontend Developer and Designer dedicated to crafting beautiful, functional
                            websites and continuously improving my skills.
                        </p>
                    </motion.div>

                    
                    <motion.div
                        className={`col-lg-6 col-md-6 col-sm-12 ${
                            animate ? "animate__animated animate__fadeInRight" : ""
                        }`}
                        initial={{ opacity: 0, x: 100 }} 
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
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
        </div>
    );
}

export default Home;
