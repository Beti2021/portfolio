import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './CreateAcc.css';
import UserStore from "../UserStore";  

function CreateAcc() {
  const [position, setPosition] = useState("");  
  const [userId, setUserId] = useState("");  
  const [fullName, setFullName] = useState("");  
  const [password, setPassword] = useState("");  
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [gender, setGender] = useState("");  

  const navigate = useNavigate();  

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Check if all fields are filled
    if (!position || !password || !confirmPassword) {
      alert("All fields are required");
      return;
    }

    // Create new user
    const newUser = {
      fullName,
      position,
      userId,
      password,
      gender,
      isRegistered: false,  
    };

    // Add the new user to the in-memory array and localStorage
    UserStore.addUser(newUser);

    // Redirect based on position
    if (position === "student") {
      navigate("/student");  
    } else if (position === "admin") {
      navigate("/admin");  
    } else if (position === "proctor") {
      navigate("/proctor");  
    }
  };

  return (
    <div className="create-account-container">
      <form onSubmit={handleSubmit} className="create-account-form">
        <h1>Create Account</h1>

        {/* Position selection */}
        <div className="input-group">
          <label htmlFor="position" className="input-label">Position</label>
          <select
            id="position"
            className="input-field"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          >
            <option value="">Select Position</option>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
            {/*<option value="proctor">Proctor</option>*/}
          </select>
        </div>

        {/* Full name, User ID, and Gender for Student */}
        {position === "student" && (
          <>
            <div className="input-group">
              <label htmlFor="fullName" className="input-label">Full Name</label>
              <input
                type="text"
                id="fullName"
                className="input-field"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="input-group">
              <label htmlFor="userId" className="input-label">User ID (for Student)</label>
              <input
                type="text"
                id="userId"
                className="input-field"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
                placeholder="Enter your student ID"
              />
            </div>

            <div className="input-group">
              <label htmlFor="gender" className="input-label">Gender</label>
              <select
                id="gender"
                className="input-field"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </>
        )}

        {/* Username for Admin and Proctor */}
        {(position === "admin" || position === "proctor") && (
          <div className="input-group">
            <label htmlFor="fullName" className="input-label">Username</label>
            <input
              type="text"
              id="fullName"
              className="input-field"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder="Enter your username"
            />
          </div>
        )}

        {/* Password and confirmation */}
        <div className="input-group">
          <label htmlFor="password" className="input-label">Password</label>
          <input
            type="password"
            id="password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>

        <div className="input-group">
          <label htmlFor="confirmPassword" className="input-label">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className="input-field"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm your password"
          />
        </div>

        {/* Submit button */}
        <div className="button-group">
          <button type="submit" className="create-account-button">Create Account</button>
        </div>
      </form>
    </div>
  );
}

export default CreateAcc;
