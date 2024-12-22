import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';


function Skill() {
    return (
        <div id="skill" className="mt-5 container text-white min-vh-100  h-50 d-flex flex-column justify-content-center ">
            <h1 className="text-center mb-4">Skills</h1>
            <div className="row justify-content-center  ">
            
                <div className="col-lg-8 col-md-8 col-sm-12 ">
                    <div className="bg-secondary shadow  p-4">
                        <ul className="d-flex justify-content-between list-unstyled">
                            
                            <div className="d-flex flex-column">
                                <li className="bg-secondary text-white mb-3 d-flex align-items-center" style={{ fontSize: "1.75rem" }}>
                                    <i className="bi bi-code-slash me-3" style={{ fontSize: "1.75rem" }}></i>
                                    HTML
                                </li>
                                <li className="bg-secondary text-white mb-3 d-flex align-items-center" style={{ fontSize: "1.75rem" }}>
                                    <i className="bi bi-palette me-3" style={{ fontSize: "1.75rem" }}></i>
                                    CSS
                                </li>
                                <li className="bg-secondary text-white mb-3 d-flex align-items-center" style={{ fontSize: "1.75rem" }}>
                                    <i className="bi bi-file-earmark-code me-3" style={{ fontSize: "1.75rem" }}></i>
                                    JavaScript
                                </li>
                            </div>

                            
                            <div className="d-flex flex-column">
                                <li className="bg-secondary text-white mb-3 d-flex align-items-center" style={{ fontSize: "1.75rem" }}>
                                    <i className="bi bi-box-arrow-up-right me-3" style={{ fontSize: "1.75rem" }}></i>
                                    React.js
                                </li>
                                <li className="bg-secondary text-white mb-3 d-flex align-items-center" style={{ fontSize: "1.75rem" }}>
                                    <i className="bi bi-bootstrap me-3" style={{ fontSize: "1.75rem" }}></i>
                                    Bootstrap
                                </li>
                                <li className="bg-secondary text-white mb-3 d-flex align-items-center" style={{ fontSize: "1.75rem" }}>
                                    <i className="bi bi-git me-3" style={{ fontSize: "1.75rem" }}></i>
                                    Version Control (Git)
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skill;
