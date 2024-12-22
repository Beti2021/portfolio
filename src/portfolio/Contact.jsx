import React from "react";

function Contact() {
    return (
        <div id="contact" className="mt-5 container text-white text-center">
            <h1 className="mb-4">Contact Me</h1>
            <p>Email: <a href="mailto:mahtotlove7@gmail.com" className="text-primary">mahtotlove7@gmail.com</a></p>

            <p>Phone: <a href="tel:+251949644007" className="text-primary">+251949644007</a></p>
            <p>Feel free to reach out to discuss your project or collaboration!</p>
            <div className="mt-4">
                <a 
                    href="https://t.me/Melat17" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="me-3 text-primary"
                    style={{ fontSize: "2rem", textDecoration: "none" }}
                >
                    <i className="bi bi-telegram"></i>
                </a>
                <a 
                    href="https://instagram.com/melat.1996" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary"
                    style={{ fontSize: "2rem", textDecoration: "none" }}
                >
                    <i className="bi bi-instagram"></i>
                </a>
            </div>
            <footer className="mt-5 pt-3 border-top">
                <p className="mb-0">&copy; {new Date().getFullYear()} Betelhem. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Contact;
