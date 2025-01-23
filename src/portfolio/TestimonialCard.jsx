import React from "react";
import TestimonialItem from "./TestimonialItem"; // Import TestimonialItem
import helen from "../images/helen.jpg";
import john from "../images/john.jpg";
import jay from "../images/jay.jpg";
import micheal from "../images/micheal.jpg";

function TestimonialCard() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      photo: john,
      quote: "Betelhem's work is outstanding and exceeded our expectations.",
    },
    {
      id: 2,
      name: "Jane Smith",
      photo: jay,
      quote: "Great communication and excellent problem-solving skills!",
    },
    {
      id: 3,
      name: "Michael Brown",
      photo: micheal,
      quote: "Betelhem brings creativity and innovation to every project.",
    },
    {
        id: 4,
        name: "Helen Yu",
        photo: helen,
        quote: "Impressed with the professionalism and quality of work delivered. Always looking forward to the next collaboration.",
      },
  ];

  return (
    <div className="container mt-5">
      <h3 className="mb-4 text-center">Testimonials</h3>
      <div
        id="testimonialCarousel"
        className="carousel slide carousel-rtl" // Add 'carousel-rtl' class for right-to-left movement
        data-bs-ride="carousel" // Enables automatic sliding
        data-bs-interval="3000" // Set interval to 3 seconds
      >
        <div className="carousel-inner">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <TestimonialItem
                name={testimonial.name}
                photo={testimonial.photo}
                quote={testimonial.quote}
              />
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        {/* Next Button */}
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
    </div>
  );
}

export default TestimonialCard;









