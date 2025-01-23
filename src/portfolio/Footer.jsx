import React from 'react';

function Footer() {
    return (
        <footer className="text-center text-white mt-5 pt-3 border-top bg-dark">
            <p className="mb-0">&copy; {new Date().getFullYear()} Betelhem. All Rights Reserved.</p>
            
            {/* Social Media Icons */}
            <div className="mt-3">
                <a
                    href="mailto:lovemelat14@gmail.com"
                    className="text-white me-3"
                    style={{ fontSize: "2rem", textDecoration: "none" }}
                >
                    <i className="bi bi-envelope"></i> {/* Email icon */}
                </a>
                <a
                    href="https://t.me/Melat17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white me-3"
                    style={{ fontSize: "2rem", textDecoration: "none" }}
                >
                    <i className="bi bi-telegram"></i> {/* Telegram icon */}
                </a>
                <a
                    href="https://instagram.com/melat.1996"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white me-3"
                    style={{ fontSize: "2rem", textDecoration: "none" }}
                >
                    <i className="bi bi-instagram"></i> {/* Instagram icon */}
                </a>
                <a
                     href="https://github.com/Beti2021"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                    style={{ fontSize: "2rem", textDecoration: "none" }}
                >
                    <i className="bi bi-github"></i> {/* GitHub icon */}
                </a>
            </div>
        </footer>
    );
}

export default Footer;
