import React, { useState } from 'react';
import UserStore from '../../UserStore'; // Assuming UserStore is in a parent directory
import './proctor.css';

function Proctor() {
  const [blockId, setBlockId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [studentId, setStudentId] = useState(''); // State to store the student ID for search
  const [searchResult, setSearchResult] = useState(null); // State to store search result

  const handleBlockIdChange = (event) => {
    setBlockId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const storedProctors = JSON.parse(localStorage.getItem('proctors')) || [];
      const validProctor = storedProctors.find(
        (proctor) => proctor.blockId === blockId && proctor.password === password
      );

      if (validProctor) {
        setIsLoggedIn(true);
      } else {
        alert('Invalid Block ID or Password.');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleStudentSearch = async () => {
    if (!studentId) {
      return; // Handle empty search input
    }

    try {
      const student = await UserStore.getUserById(studentId);
      setSearchResult(student);
    } catch (error) {
      console.error('Error during student search:', error);
      alert('An error occurred during search. Please try again later.');
    }
  };

  return (
    
      <div className="proctor-page-container">
        {isLoggedIn ? (
          <div>
            <h2 className="head">Proctor</h2>
            <h2 className="head">Search students </h2>
            
            <div className="search-container">
              {/* Search Bar */}
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search for student by ID..."
                  value={studentId}
                  onChange={(event) => setStudentId(event.target.value)}
                />
                <button onClick={handleStudentSearch}>Search</button>
              </div>
    
              {/* Search Result */}
              {searchResult ? (
                <div className="search-result">
                  <h2 className="head">Student Information</h2>
                  <table>
                    <thead>
                      <tr className="header-table">
                        <th>Full Name</th>
                        <th>User ID</th>
                        <th>Dorm Number</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="content" >
                        <td>{searchResult.fullName || "N/A"}</td>
                        <td>{searchResult.userId}</td>
                        <td>
                          {searchResult.registration?.dorm?.number || "Not Assigned"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <p>No student found for ID: {studentId}.</p>
              )}
            </div>
          </div>
        ) : (
          <>
            {/* Login Form */}
            <form onSubmit={handleSubmit} className="proctor-form">
              <h2 className="proctor-login-title">Proctor Login</h2>
              <div>
                <label htmlFor="blockId">Block ID:</label>
                <select id="blockId" value={blockId} onChange={handleBlockIdChange}>
                  <option value="">Select Block</option>
                  <option value="1">1 (Female)</option>
                  <option value="2">2 (Female)</option>
                  <option value="3">3 (Male)</option>
                  <option value="4">4 (Male)</option>
                  <option value="A">4 (Female)</option>
                  <option value="B">4 (Male)</option>
                </select>
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
          </>
        )}
      </div>
    );
  }
    export default Proctor;