import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Skill from './Skill';
import Service from './Service';
import Contact from './Contact';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Router>
            <div>
                
                <nav className="navbar bg-dark navbar-expand-lg navbar-dark fixed-top">
                    <div className="container">
                    
                        <a
                            className="navbar-brand text-white"
                            href="#home"
                            style={{ fontStyle: 'italic', fontSize: '24px' }}
                        >
                            Betelhem Tadese
                        </a>

                        
                        <button
                            className="navbar-toggler"
                            type="button"
                            onClick={toggleNavbar}
                            aria-expanded={isOpen}
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        
                        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                            <ul className="navbar-nav ms-auto nav-list">
                                <li className="nav-item me-3">
                                    <a className="nav-link text-white" href="#home">Home</a>
                                </li>
                                <li className="nav-item me-3">
                                    <a className="nav-link text-white" href="#about">About</a>
                                </li>
                                <li className="nav-item me-3">
                                    <a className="nav-link text-white" href="#skill">Skill</a>
                                </li>
                                <li className="nav-item me-3">
                                    <a className="nav-link text-white" href="#service">Service</a>
                                </li>
                                <li className="nav-item me-3">
                                    <a className="nav-link text-white" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                
                <div>
                    <Home />
                    <About />
                    <Skill />
                    <Service />
                    <Contact />
                </div>
            </div>
        </Router>
    );
}

export default App;
