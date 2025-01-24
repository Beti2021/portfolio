import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import AboutSection from "./AboutSection";
import ProjectCard from "./ProjectCard";
import Contact from "./Contact";

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait"> 
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutSection />} />
                <Route path="/projectCard" element={<ProjectCard />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <main className="main-content">
                    <AnimatedRoutes />
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
