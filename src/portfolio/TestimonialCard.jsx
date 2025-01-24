import React, { useEffect } from "react";
import { motion } from "framer-motion";
import TestimonialItem from "./TestimonialItem";
import Smret from "../images/helen.jpg";
import john from "../images/john.jpg";
import Brhanu from "../images/Brhanu.jpg";
import Betelhem from "../images/Betelhem.jpg";

function TestimonialCard() {
  const testimonials = [
    {
      id: 1,
      name: "Yoseph Ayele",
      photo: john,
      quote: "Betelhem's work is outstanding and exceeded our expectations.",
    },
    {
      id: 2,
      name: "Tnsae Yohanns",
      photo: Brhanu,
      quote: "Great communication and excellent problem-solving skills!",
    },
    {
      id: 3,
      name: "Smret Mekonn",
      photo: Smret,
      quote: "Betelhem brings creativity and innovation to every project.",
    },
    {
      id: 4,
      name: "Betelhem Kore",
      photo: Betelhem,
      quote: "Impressed with the professionalism and quality of work delivered. Always looking forward to the next collaboration.",
    },
  ];

  useEffect(() => {
   
    const carousel = document.querySelector("#testimonialCarousel");
    if (carousel) {
      const carouselInstance = new window.bootstrap.Carousel(carousel);
      carouselInstance.cycle();
    }
  }, []);

  return (
    <motion.div
      className="container mt-5"
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
    >
      <h3
        className="mb-4 text-center"
        style={{ fontSize: "2rem", fontWeight: "bold" }}
      >
        Testimonials
      </h3>

      <div
        id="testimonialCarousel"
        className="carousel slide carousel-rtl"
        data-bs-ride="carousel"
        data-bs-interval="3000"
        data-bs-pause="hover"
      >
        <div className="carousel-inner">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div>
                <TestimonialItem
                  name={testimonial.name}
                  photo={testimonial.photo}
                  quote={testimonial.quote}
                  style={{ fontSize: "1.5rem" }}
                />
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;
