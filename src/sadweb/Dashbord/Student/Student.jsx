import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Student.css";
import UserStore from "../../UserStore";

function Student() {
  const [user, setUser] = useState(null); // State to hold user data
  const [isRegistered, setIsRegistered] = useState(false); // State to track registration status
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State to show success message
  const navigate = useNavigate();

  useEffect(() => {
    const currentUserId = sessionStorage.getItem("loggedInUserId");

    if (currentUserId) {
      const currentUser = UserStore.getUserById(currentUserId);

      console.log("Current User:", currentUser);  // Log the entire currentUser object
      console.log("Current User Registration:", currentUser?.registration);  // Log registration data

      if (currentUser) {
        setUser(currentUser);

        // Check if the user has registration data and is registered
        const registrationStatus = currentUser.registration ? true : false;
        console.log("Registration Status:", registrationStatus);  // Log registration status
        setIsRegistered(registrationStatus);

        const registrationSuccess = sessionStorage.getItem("registrationSuccess");
        if (registrationSuccess) {
          setShowSuccessMessage(true);
          sessionStorage.removeItem("registrationSuccess");
        }
      } else {
        console.error("User not found in UserStore.");
        navigate("/signin");
      }
    } else {
      navigate("/signin");
    }
  }, [navigate]);

  const handleRegisterRedirect = () => {
    navigate("/register"); // Redirect to the registration page
  };

  return (
    <div className="student-container">
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/register">Registration</a>
          </li>
          <li>
            <a href="/feedback">Feedback</a>
          </li>
        </ul>
      </nav>

      <div className="student-content">
        {user ? (
          <>
            {/* Display Welcome Message */}
            <h2>Welcome, {user.fullName}</h2>
            <p className="user-id">User ID: {user.userId}</p>

            {/* Display Success Message if Registration was Completed */}
            {showSuccessMessage && (
              <div className="success-message">
                <p>Registration completed successfully! Here is your information:</p>
              </div>
            )}

            {/* Display User Info in Tabular Format if Registered */}
            {isRegistered && showSuccessMessage ? (
              <div className="registration-table">
                <div className="table-row">
                  <div className="table-header">Name</div>
                  <div className="table-cell">{user.registration?.firstName} {user.registration?.middleName} {user.registration?.lastName}</div>
                </div>
                <div className="table-row">
                  <div className="table-header">User ID</div>
                  <div className="table-cell">{user.userId}</div>
                </div>
                <div className="table-row">
                  <div className="table-header">Age</div>
                  <div className="table-cell">{user .registration?.age || "Not Provided"}</div>
                </div>
                <div className="table-row">
                  <div className="table-header">City Privilege</div>
                  <div className="table-cell">{user.registration?.cityPrivilege || "Not Provided"}</div>
                </div>
                <div className="table-row">
                  <div className="table-header">Zone</div>
                  <div className="table-cell">{user.registration?.zone || "Not Provided"}</div>
                </div>
                <div className="table-row">
                  <div className="table-header">Gender</div>
                  <div className="table-cell">{user.registration?.gender || "Not Provided"}</div>
                </div>
                <div className="table-row">
                  <div className="table-header">Department</div>
                  <div className="table-cell">{user.registration?.department || "Not Provided"}</div>
                </div>
                <div className="table-row">
                  <div className="table-header">Class Year</div>
                  <div className="table-cell">{user.registration?.classYear || "Not Provided"}</div>
                </div>
                <div className="table-row">
                    <div className="table-header">Campus</div>
                   <div className="table-cell">{user.registration?.campus || "Not Provided"}</div>
               </div>
                <div className="table-row">
                  <div className="table-header">Assigned Dorm</div>
                  <div className="table-cell">
                    {user.registration?.dorm 
                      ? `${user.registration.dorm.block} - Dorm Number: ${user.registration.dorm.number}` 
                      : "Not Assigned"}
                  </div>
                </div>
              </div>
            ) : (
              // Display Registration Prompt if Not Registered
              !isRegistered && !showSuccessMessage && (
                <div className="registration-prompt">
                  <p>You are not registered yet. Please complete your registration.</p>
                  <button className="btn-register" onClick={handleRegisterRedirect}>
                    Go to Registration
                  </button>
                </div>
              )
            )}
          </>
        ) : (
          // Display Prompt if User Data is Unavailable
          <div className="registration-prompt">
            <h2>Welcome, Student!</h2>
            <p>Please sign in and complete your registration.</p>
            <button className="btn-register" onClick={handleRegisterRedirect}>
              Go to Registration
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Student;
