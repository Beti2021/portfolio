import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Home from './Home';
import AboutSection from "./AboutSection";
import ProjectCard from "./ProjectCard";
import Contact from "./Contact";


function App() {
    return (
        <Router>
            <div className="app-container  ">
                <Header />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutSection />} />
                        <Route path="/projectCard" element={<ProjectCard />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
