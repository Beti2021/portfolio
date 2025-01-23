import React, { useState } from 'react';
import UserStore from '../../UserStore'; // Adjust the import as necessary
import "./feedback.css";

function Feedback() {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object to hold the feedback data
    const feedbackData = {
      feedback,
      email,
      userId,
    };

    // Save feedback data to UserStore or localStorage (or send to a backend)
    UserStore.addFeedback(feedbackData);
    alert('Feedback submitted! Thank you.');

    // Reset fields
    setFeedback('');
    setEmail('');
    setUserId('');
  };

  return (
    <div className="feedback-container">
      <h2>Students Feedback</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback here..."
          required
        ></textarea>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email..."
          required
        />

        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter your User ID..."
          required
        />

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default Feedback;