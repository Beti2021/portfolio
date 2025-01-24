import React, { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        message: "",
        phoneNumber: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: "",
        });
    };

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com)$/;
        return regex.test(email);
    };

    const validatePhoneNumber = (phoneNumber) => {
        const regex = /^\+251\d{9}$/;
        return regex.test(phoneNumber);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let formIsValid = true;
        let emailError = "";
        let messageError = "";
        let phoneNumberError = "";

        if (!validateEmail(formData.email)) {
            emailError = "Please enter a valid email address.";
            formIsValid = false;
        }

        if (formData.message.length > 500) {
            messageError = "Message cannot exceed 500 characters.";
            formIsValid = false;
        }

        if (!validatePhoneNumber(formData.phoneNumber)) {
            phoneNumberError = "Please enter a valid phone number with country code (+251).";
            formIsValid = false;
        }

        if (!formIsValid) {
            setErrors({
                email: emailError,
                message: messageError,
                phoneNumber: phoneNumberError,
            });
            return;
        }

        console.log("Form Data Submitted:", formData);
        alert("Thank you for reaching out! We'll get back to you soon.");
        setFormData({
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            message: "",
        });
    };

    return (
        <div className="mt-5">
            <h1 className="mb-4 mt-5 text-center text-primary">Get in Touch</h1>

            <div className="d-flex justify-content-center">
                <form
                    onSubmit={handleSubmit}
                    className="bg-secondary p-4 rounded contact-form"
                    style={{ maxWidth: "400px", width: "100%" }}
                >
                    <div className="mb-3">
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="First Name"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Last Name"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className={`form-control ${errors.phoneNumber ? "is-invalid" : ""}`}
                            placeholder="Phone Number (+251XXXXXXXXX)"
                            required
                        />
                        {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                            placeholder="Email Address"
                            required
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                    <div className="mb-3">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={`form-control ${errors.message ? "is-invalid" : ""}`}
                            rows="4"
                            placeholder="Your Message"
                            required
                        ></textarea>
                        {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                    </div>
                    <button type="submit" className="btn btn-success  w-100">
                        Send
                    </button>
                </form>
            </div>

            <div className="mt-4 text-center">
                <p className="text-primary">
                    Phone:{" "}
                    <a href="tel:+251949644007" className="text-primary">
                        +251949644007
                    </a>
                </p>
            </div>

            <div className="mt-4 d-flex justify-content-center">
                <a
                    href="mailto:lovemelat14@gmail.com"
                    className="text-primary me-3 social-icon"
                    style={{ fontSize: "2rem", textDecoration: "none" }}
                >
                    <i className="bi bi-envelope"></i>
                </a>
                <a
                    href="https://t.me/Melat17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-3 text-primary social-icon"
                    style={{ fontSize: "2rem", textDecoration: "none" }}
                >
                    <i className="bi bi-telegram"></i>
                </a>
                <a
                    href="https://instagram.com/melat.1996"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-3 text-primary social-icon"
                    style={{ fontSize: "2rem", textDecoration: "none" }}
                >
                    <i className="bi bi-instagram"></i>
                </a>
                <a
                    href="https://github.com/Beti2021"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary social-icon"
                    style={{ fontSize: "2rem", textDecoration: "none" }}
                >
                    <i className="bi bi-github"></i>
                </a>
            </div>
        </div>
    );
}

export default Contact;
