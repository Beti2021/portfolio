import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function ProjectItem({ id, name, description, imageUrl, projectUrl }) {

    const [likes, setLikes] = useState(() => {
       
        const storedLikes = localStorage.getItem(`projectLikes-${id}`);
        return storedLikes ? parseInt(storedLikes, 10) : 0;
    });

    
    useEffect(() => {
        localStorage.setItem(`projectLikes-${id}`, likes);
    }, [likes, id]);

    
    const handleLike = () => {
        setLikes((prevLikes) => prevLikes + 1); 
    };

    return (
        <div className="card h-100">
            
            <img src={imageUrl} className="card-img-top" alt={name} />
            <div className="card-body d-flex flex-column">
               
                <h5 className="card-title">{name}</h5>
                
                <p className="card-text flex-grow-1">{description}</p>
                
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
