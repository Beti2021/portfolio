import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SignIn.css'; 
import UserStore from "../UserStore";

function SignIn() {
  const [username, setUsername] = useState("");  
  const [password, setPassword] = useState("");  
  const [error, setError] = useState("");  
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();  

    // Fetch users from UserStore (uses localStorage)
    const users = UserStore.getAllUsers();  

    // Find a matching user
    const user = users.find(
      (user) => user.fullName === username && user.password === password
    );

    if (user) {
      // Store logged-in user ID in sessionStorage for session management
      sessionStorage.setItem("loggedInUserId", user.userId);

      // Navigate based on the user's position
      if (user.position === "student") {
        navigate("/student");
      } else if (user.position === "admin") {
        navigate("/admin");
      } else if (user.position === "proctor") {
        navigate("/proctor");
      }
    } else {
      // Display an error message for invalid credentials
      setError("Invalid username or password");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        <h1 className="signin-title">Sign In</h1>

        {error && <div className="error-message">{error}</div>} {/* Display error message */}

        <form onSubmit={handleLogin}>
          {/* Username Input */}
          <div className="input-group">
            <label htmlFor="username" className="input-label">Username (Full Name)</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your full name"
              className="input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}  
              required
            />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <label htmlFor="password" className="input-label">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required  
            />
          </div>

          {/* Submit Button */}
          <div className="button-group">
            <button type="submit" className="login-button">Login</button>
          </div>
        </form>

        {/* Redirect to Create Account */}
        <div className="create-account">
        <p className="create-account-text" style={{ color: 'blue' }}>
    Don't have an account?{' '}


            <a href="/create-account" className="create-account-link">Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
