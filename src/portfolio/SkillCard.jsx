import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function SkillCard() {
    // Define skills and their proficiency levels
    const skills = [
        { name: "HTML", icon: "bi-code-slash", color: "#e34c26", level: 90 },
        { name: "CSS", icon: "bi-palette", color: "#2965f1", level: 85 },
        { name: "JavaScript", icon: "bi-file-earmark-code", color: "#f0db4f", level: 95 },
        { name: "React.js", icon: "bi-box-arrow-up-right", color: "#61dafb", level: 80 },
        { name: "Bootstrap", icon: "bi-bootstrap", color: "#7952b3", level: 85 },
        { name: "Version Control (Git)", icon: "bi-git", color: "#f34f29", level: 75 },
    ];

    return (
        <div className="mt-5 container text-white min-vh-100 h-50 d-flex flex-column justify-content-center">
            <h1 className="text-center mb-4">Skills</h1>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-8 col-sm-12">
                    <div className="shadow p-4 bg-transparent">
                        <div className="row">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="col-md-6 mb-4 d-flex align-items-center"
                                >
                                    {/* Icon and Skill Name */}
                                    <div
                                        className="me-3 d-flex align-items-center skill-icon"
                                        style={{ fontSize: "1.75rem", color: skill.color }}
                                    >
                                        <i className={`bi ${skill.icon} me-2`}></i>
                                        <span>{skill.name}</span>
                                    </div>
                                    {/* Circular Progress */}
                                    <div style={{ width: "60px", height: "60px", marginLeft: "auto" }}>
                                        <CircularProgressbar
                                            value={skill.level}
                                            text={`${skill.level}%`}
                                            styles={buildStyles({
                                                textColor: "#fff",
                                                pathColor: skill.color,
                                                trailColor: "#333",
                                            })}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillCard;
