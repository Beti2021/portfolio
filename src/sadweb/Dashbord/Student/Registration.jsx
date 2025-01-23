import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Registration.css';
import UserStore from "../../UserStore";

function Registration() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [userId, setUserId] = useState("");
  const [campus, setCampus] = useState("");
  const [cityPrivilege, setCityPrivilege] = useState("");
  const [subCity, setSubCity] = useState("");
  const [dormBlock, setDormBlock] = useState("");
  const [dormNumber, setDormNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [classYear, setClassYear] = useState("");
  const [gender, setGender] = useState("");
  const [kebeleId, setKebeleId] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [idCard, setIdCard] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [studentInfo, setStudentInfo] = useState(null);

  const navigate = useNavigate();

  // Fetch existing user data from UserStore when the component mounts
  useEffect(() => {
    const currentUserId = sessionStorage.getItem("loggedInUserId");

    if (currentUserId) {
      const existingUser = UserStore.getUserById(currentUserId);
      if (existingUser) {
        setUserId(existingUser.userId);
        setFirstName(existingUser.firstName);
        setMiddleName(existingUser.middleName || "");
        setLastName(existingUser.lastName);
        setGender(existingUser.gender);
        setAge(existingUser.age || "");
        setCityPrivilege(existingUser.cityPrivilege || "");
        setSubCity(existingUser.subCity|| "");
        if (existingUser.dorm) {
          setDormBlock(existingUser.dorm.block);
          setDormNumber(existingUser.dorm.number);
        }
        setDepartment(existingUser.department || "");
        setClassYear(existingUser.classYear || "");
        setKebeleId(existingUser.kebeleId || null);
        setPhoto(existingUser.photo || null);
        setIdCard(existingUser.idCard || null);
      } else {
        navigate("/signin");
      }
    } else {
      navigate("/signin");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check if the user is already registered by checking dorm block and dorm number
    const existingUser = UserStore.getUserById(userId);
    if (existingUser && existingUser.dorm && existingUser.dorm.block && existingUser.dorm.number) {
      alert(
        `This user is already registered with Dorm Block: ${existingUser.dorm.block}, Dorm Number: ${existingUser.dorm.number}.`
      );
      return;
    }
  
    const updatedRegistrationData = {
      firstName,
      middleName,
      lastName,
      age,
      gender,
      cityPrivilege,
      subCity,
      dorm: { block: dormBlock, number: dormNumber },
      department,
      campus,
      classYear,
      kebeleId,
      photo,
      idCard,
    };

    UserStore.addRegistration(userId, updatedRegistrationData);
    sessionStorage.setItem("registrationSuccess", "true");
    setRegistrationSuccess(true);
    setStudentInfo(updatedRegistrationData);

    alert("Registration successful!");
    navigate("/student");
  };

  // Dynamically generate dorm blocks based on gender
  const dormBlocks = gender === "female" ? ["Block 1", "Block 2"] : gender === "male" ? ["Block 3", "Block 4"] : [];
  const dormNumbers = Array.from({ length: 80 }, (_, i) => i + 1); // Generate dorm numbers 1-80

  return (
    <div className="registration-container">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/student">Student Dashboard</Link>
          </li>
        </ul>
      </nav>

      <div className="form-wrapper">
        {registrationSuccess ? (
          <div className="success-message">
            <h3>Registration Successful!</h3>
            <p>Waiting for approval...</p>
            <h4>Student Information</h4>
            <table className="student-info-table">
              <thead>
                <tr>
                  <th>Field</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{studentInfo.firstName} {studentInfo.middleName} {studentInfo.lastName}</td>
                </tr>
                <tr>
                  <td>Age</td>
                  <td>{studentInfo.age}</td>
                </tr>
                <tr>
                  <td>User ID</td>
                  <td>{studentInfo.userId}</td>
                </tr>
                <tr>
                  <td>City Privilege</td>
                  <td>{studentInfo.cityPrivilege}</td>
                </tr>
                <tr>
                  <td>Zone</td>
                  <td>{studentInfo.zone}</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>{studentInfo.gender}</td>
                </tr>
                <tr>
                  <td>Department</td>
                  <td>{studentInfo.department}</td>
                </tr>
                <tr>
                  <td>Class Year</td>
                  <td>{studentInfo.classYear}</td>
                </tr>
                <tr>
                  <td>Assigned Dorm</td>
                  <td>{studentInfo.dorm.block} - Dorm Number: {studentInfo.dorm.number}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <form className="registration-form" onSubmit={handleSubmit}>
            <h2>Registration</h2>

            <div className="input-group">
              <label>First Name</label>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Middle Name</label>
              <input
                type="text"
                placeholder="Middle Name"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Age</label>
              <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>User ID</label>
              <input
                type="text"
                placeholder="User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
  <label>Campus</label>
  <select
    value={campus}
    onChange={(e) => setCampus(e.target.value)}
    required
  >
    <option value="" >Select an option</option>
    <option value="6 kilo">6 kilo</option>
    <option value="5 kilo">5 kilo</option>
    <option value="4 kilo">4 kilo</option>
    <option value="FBE">FBE</option>
  </select>
</div>

            <div className="input-group">
              <label>City/Privilege</label>
              <input
                type="text"
                placeholder="City or Privilege"
                value={cityPrivilege}
                onChange={(e) => setCityPrivilege(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>SuCity</label>
              <input
                type="text"
                placeholder="Subcity"
                value={subCity}
                onChange={(e) => setSubCity(e.target.value)}
                required
              />
            </div>

            

            <div className="input-group">
              <label>Department</label>
              <input
                type="text"
                placeholder="Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Class Year</label>
              <input
                type="text"
                placeholder="Class Year"
                value={classYear}
                onChange={(e) => setClassYear(e.target.value)}
                required
              />
            </div>


            {/* Other input fields */}
            {/* Gender Selection */}
            <div className="input-group">
              <label>Gender</label>
              <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* Dorm Block Selection */}
            <div className="input-group">
              <label>Choose Dorm Block</label>
              <select value={dormBlock} onChange={(e) => setDormBlock(e.target.value)} required>
                <option value="">Select Block</option>
                {dormBlocks.map((block) => (
                  <option key={block} value={block}>{block}</option>
                ))}
              </select>
            </div>

            {/* Dorm Number Selection */}
            <div className="input-group">
              <label>Choose Dorm Number (1-80)</label>
              <select value={dormNumber} onChange={(e) => setDormNumber(e.target.value)} required>
                <option value="">Select Number</option>
                {dormNumbers.map((number) => (
                  <option key={number} value={number}>{number}</option>
                ))}
              </select>
            </div>
                    {/* File Uploads */}
        <div className="input-group">
          <label>Upload Kebele ID</label>
          <input
            type="file"
            onChange={(e) => setKebeleId(e.target.files[0])}
            required
          />
        </div>
        <div className="input-group">
          <label>Upload Photo</label>
          <input
            type="file"
            onChange={(e) => setPhoto(e.target.files[0])}
            required
          />
        </div>
        
      

            <div className="button-group">
              <button type="submit">Register</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Registration;
