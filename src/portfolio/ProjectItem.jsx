import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink for routing

function ProjectItem({ name, description, imageUrl, projectUrl }) {
    const [likes, setLikes] = useState(0); // State to track the number of likes

    const handleLike = () => {
        setLikes(likes + 1); // Increment the likes
    };

    return (
        <div className="card h-100"> {/* Ensure the card itself takes full height */}
            <img src={imageUrl} className="card-img-top" alt={name} />
            <div className="card-body d-flex flex-column"> {/* Make the card body a flex container */}
                <h5 className="card-title">{name}</h5>
                <p className="card-text flex-grow-1">{description}</p> {/* Make the description grow to fill space */}
                {/* Like Button */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <button className="btn btn-outline-success" onClick={handleLike}>
                        Like <i className="bi bi-hand-thumbs-up"></i> {likes}
                    </button>
                    <NavLink to={projectUrl} className="btn btn-success">
                        View Project
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;
