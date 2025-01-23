import React, { useState, useEffect } from 'react';
import UserStore from '../../UserStore';
import './waitinglist.css'; // Import the external CSS file

function WaitingList() {
  const [notAssignedUsers, setNotAssignedUsers] = useState([]);

  useEffect(() => {
    const allUsers = UserStore.getAllUsers();
    const studentUsers = allUsers.filter((user) => user.position === 'student'); 
    const notAssigned = studentUsers.filter(
      (user) => !user.registration || !user.registration.dorm
    );
    setNotAssignedUsers(notAssigned);
  }, []);

  const maleStudents = notAssignedUsers.filter((user) => user.gender === 'male');
  const femaleStudents = notAssignedUsers.filter((user) => user.gender === 'female');

  return (
    <div className="not-assigned-container">
      <h2 className="heading">Waiting List (Students)</h2>

      <h3 className="heading">Male Students</h3>
      <table className="not-assigned-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>User ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {maleStudents.map((user, index) => (
            <tr key={index}>
              <td>{user.fullName}</td>
              <td>{user.userId}</td>
              <td>{user.registration ? 'Registered, No Dorm' : 'Not Assigned'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {maleStudents.length === 0 && <p>No male students in the waiting list.</p>}

      <h3 className="heading">Female Students</h3>
      <table className="not-assigned-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>User ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {femaleStudents.map((user, index) => (
            <tr key={index}>
              <td>{user.fullName}</td>
              <td>{user.userId}</td>
              <td>{user.registration ? 'Registered, No Dorm' : 'Not Assigned'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {femaleStudents.length === 0 && <p>No female students in the waiting list.</p>}
    </div>
  );
}

export default WaitingList;