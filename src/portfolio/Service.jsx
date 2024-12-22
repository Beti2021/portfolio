import React, { useState } from "react";


function Service() {
    const [activeService, setActiveService] = useState(null); 

    const services = [
        {
            title: "Website Design and Development",
            shortDescription: "Design and develop modern, responsive websites with a focus on user experience.",
            details: [
                "Creating websites tailored to your needs",
                "Including custom designs",
                "Backend integrations",
                "Full website deployment"
            ],
        },
        {
            title: "Responsive Web Design",
            shortDescription: "Create mobile-first websites that adjust seamlessly to various screen sizes.",
            details: [
                "Creating designs that automatically adjust to different devices",
                "Ensuring a seamless experience across all screen sizes"
            ],
        },
        {
            title: "Performance Optimization",
            shortDescription: "Optimize websites for speed and performance, ensuring fast loading times.",
            details: [
                "Improving website load times by reducing image sizes",
                "Minifying code and optimizing server configurations",
                "Enhancing user engagement rates and SEO rankings"
            ],
        },
        {
            title: "Website Maintenance",
            shortDescription: "Offer ongoing website updates and maintenance to ensure everything runs smoothly.",
            details: [
                "Handling bug fixes, design updates, and content changes",
                "Ensuring website security and compatibility with the latest standards"
            ],
        },
    ];

    return (
        <div id="service" className="mt-5 container mb-5 min-vh-100 text-white d-flex flex-column justify-content-center align-items-center ">
            <h1 className="text-center mb-5">Services</h1>
            <div className="row justify-content-center">
                {services.map((service, index) => (
                    <div className="col-lg-6 col-md-6  col-sm-12 mb-4" key={index}>
                        <div className="bg-secondary  text-ehite p-4 shadow rounded">
                            <h3>{service.title}</h3>
                            <a
                                href="#!"
                                className="text-primary"
                                onClick={() => setActiveService(service)}
                                style={{ textDecoration: "none" }}
                            >
                                View More
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            
            {activeService && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>{activeService.title}</h3>
                        <p className="short-description">{activeService.shortDescription}</p>
                        <ul>
                            {activeService.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                        <button
                            className="btn btn-primary mt-3"
                            onClick={() => setActiveService(null)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Service;