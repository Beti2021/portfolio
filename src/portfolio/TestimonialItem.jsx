import React from "react";

function TestimonialItem({ name, photo, quote }) {
  return (
    <div className="d-flex flex-column align-items-center text-center">
      <img
        src={photo}
        alt={name}
        className="rounded-circle mb-3"
        style={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
          border: "2px solid #fff",
        }}
      />
      <h5 className="mb-2">{name}</h5>
      <p className="text-muted">"{quote}"</p>
    </div>
  );
}

export default TestimonialItem;
