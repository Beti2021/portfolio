import React, { useState, useEffect } from 'react';
import UserStore from '../../UserStore';
import "./feedback.css";

function FeedBack() {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    const allFeedback = UserStore.feedback;
    setFeedbackData(allFeedback);
  }, []);

  return (
    <div className="feedback-acceptor-container">
      <h2 className='header'> Students Feedback</h2>
      <table className="feedback-table">
        <thead>
          <tr>
            <th>Feedback</th>
            <th>Email</th>
            <th>UserId</th>
          </tr>
        </thead>
        <tbody>
          {feedbackData.length > 0 ? (
            feedbackData.map((feedback, index) => (
              <tr key={index}>
                <td>{feedback.feedback}</td>
                <td>{feedback.email}</td>
                <td>{feedback.userId}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No feedback received yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default FeedBack;