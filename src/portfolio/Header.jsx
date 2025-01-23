import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Get theme preference from localStorage, default to false (light mode)
        return localStorage.getItem("theme") === "dark";
    });

    // Toggle the navbar visibility
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    // Toggle between light and dark themes
    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);

        // Apply theme class to body
        document.body.classList.toggle("dark-theme", newTheme);

        // Save theme preference to localStorage
        localStorage.setItem("theme", newTheme ? "dark" : "light");
    };

    // Apply the theme on component mount based on localStorage value
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark-theme");
        } else {
            document.body.classList.remove("dark-theme");
        }
    }, [isDarkMode]);

    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-dark">
            <div className="container">
                <NavLink
                    className="navbar-brand text-primary"
                    to="/"
                    style={{ fontStyle: "italic", fontSize: "24px" }}
                >
                    Betelhem Tadese
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNavbar}
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
                    <ul className="navbar-nav ms-auto nav-list text-primary">
                        <li className="nav-item me-3">
                            <NavLink
                                to="/"
                                className="nav-link"
                                style={{ fontSize: "18px" }} // Font size for list items
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item me-3">
                            <NavLink
                                to="/about"
                                className="nav-link"
                                style={{ fontSize: "18px" }} // Font size for list items
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item me-3">
                            <NavLink
                                to="/projectCard"
                                className="nav-link"
                                style={{ fontSize: "18px" }} // Font size for list items
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item me-3">
                            <NavLink
                                to="/contact"
                                className="nav-link"
                                style={{ fontSize: "18px" }} // Font size for list items
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <button
                                className="btn btn-outline-secondary"
                                onClick={toggleTheme}
                                style={{ fontSize: "20px" }} // Icon button size
                            >
                                {isDarkMode ? (
                                    <i className="bi bi-brightness-high text-white"></i> // Sun icon for light mode
                                ) : (
                                    <i className="bi bi-moon text-white"></i> // Moon icon for dark mode
                                )}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
