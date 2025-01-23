import React, { useState, useEffect } from "react";
import UserStore from "../../UserStore";
import "./report.css";

function Report() {
  const [maleStudentsByBlock, setMaleStudentsByBlock] = useState({});
  const [femaleStudentsByBlock, setFemaleStudentsByBlock] = useState({});

  useEffect(() => {
    const allUsers = UserStore.getAllUsers();

    // Filter out non-students (if applicable)
    const studentUsers = allUsers.filter((user) => !user.position || user.position !== "admin");

    const separateStudentsByGenderAndBlock = (students) => {
      const studentsByBlock = {};
      students.forEach((student) => {
        const dormBlock = student.registration?.dorm?.block;
        if (dormBlock) {
          studentsByBlock[dormBlock] = studentsByBlock[dormBlock] || [];
          studentsByBlock[dormBlock].push({ ...UserStore.getUserById(student.userId) }); // Ensure accurate data
        }
      });
      return studentsByBlock;
    };

    const maleStudentsByBlock = separateStudentsByGenderAndBlock(
      studentUsers.filter((user) => user.gender === "male")
    );
    const femaleStudentsByBlock = separateStudentsByGenderAndBlock(
      studentUsers.filter((user) => user.gender === "female")
    );

    setMaleStudentsByBlock(maleStudentsByBlock);
    setFemaleStudentsByBlock(femaleStudentsByBlock);
  }, []);

  return (
    <div className="report-container">
      <h2 className="heading-color">Registered Students Report (By Dorm Block)</h2>

      {Object.entries(maleStudentsByBlock).length > 0 && (
        <h3 className="heading-color">Male Students</h3>
      )}
      {Object.entries(maleStudentsByBlock).map(([dormBlock, students]) => (
        <div key={dormBlock}>
          <h4 className="heading-color">Dorm Block: {dormBlock}</h4>
        
          {students.length > 0 && (
            <table className="report-table">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>User ID</th>
                  <th>Dorm Number</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index}>
                    <td>{student.fullName || "N/A"}</td>
                    <td>{student.userId}</td>
                    <td>{student.registration?.dorm?.number || "Not Assigned"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {students.length === 0 && <p>No male students in this block.</p>}
        </div>
      ))}

      {Object.entries(femaleStudentsByBlock).length > 0 && (
        <h3 className="heading-color">Female Students</h3>
      )}
      {Object.entries(femaleStudentsByBlock).map(([dormBlock, students]) => (
        <div key={dormBlock}>
          <h4 className="heading-color">Dorm Block: {dormBlock}</h4>
          {students.length > 0 && (
            <table className="report-table">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>User ID</th>
                  <th>Dorm Number</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index}>
                    <td>{student.fullName || "N/A"}</td>
                    <td>{student.userId}</td>
                    <td>{student.registration?.dorm?.number || "Not Assigned"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {students.length === 0 && <p>No female students in this block.</p>}
        </div>
      ))}

      {Object.keys(maleStudentsByBlock).length === 0 &&
        Object.keys(femaleStudentsByBlock).length === 0 && (
          <p className="heading-color">No students registered.</p>
        )}
    </div>
  );
}

export default Report;