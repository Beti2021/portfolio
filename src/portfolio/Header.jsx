import { NavLink } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    const navbarRef = useRef(null); 

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                closeNavbar();
            }
        };

        document.addEventListener("click", handleClickOutside);

        
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);

        if (newTheme) {
            document.body.classList.add("dark-theme");
            document.body.classList.remove("light-theme");
        } else {
            document.body.classList.add("light-theme");
            document.body.classList.remove("dark-theme");
        }

        localStorage.setItem("theme", newTheme ? "dark" : "light");
        closeNavbar();
    };

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark-theme");
            document.body.classList.remove("light-theme");
        } else {
            document.body.classList.add("light-theme");
            document.body.classList.remove("dark-theme");
        }
    }, [isDarkMode]);

    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-dark shadow" ref={navbarRef}>
            <div className="container">
                <NavLink
                    className="navbar-brand text-white"
                    to="/"
                    style={{ fontStyle: "italic", fontSize: "24px" }}
                >
                    Betelhem Tadese
                </NavLink>


                <i
                    className="bi bi-list navbar-toggler"
                    style={{ color: "white", fontSize: "30px", cursor: "pointer" }}
                    onClick={toggleNavbar}
                ></i>

                <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
                    <ul className="navbar-nav ms-auto nav-list text-primary">
                        <li className="nav-item me-3">
                            <NavLink to="/" className="nav-link" style={{ fontSize: "18px" }} onClick={closeNavbar}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item me-3">
                            <NavLink to="/about" className="nav-link" style={{ fontSize: "18px" }} onClick={closeNavbar}>
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item me-3">
                            <NavLink to="/projectCard" className="nav-link" style={{ fontSize: "18px" }} onClick={closeNavbar}>
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item me-3">
                            <NavLink to="/contact" className="nav-link" style={{ fontSize: "18px" }} onClick={closeNavbar}>
                                Contact
                            </NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <i
                                className={`bi ${isDarkMode ?"bi-moon": "bi-brightness-high" } `}
                                style={{ fontSize: "30px", cursor: "pointer", color: isDarkMode ? "white" : "white" }}
                                onClick={toggleTheme}
                            ></i>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
