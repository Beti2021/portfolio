import React from 'react';
import './admin.css';
import { Link } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate
import Report from './Report'; // Import the Report component
import FeedBack from './FeedBack';
import WaitingList from './WaitingList';
import ProctorManagement from './ProctorManagement';

function Admin() {
  return (
    <div className="admin-container">
      <nav className="admin-navbar">
        <ul className="navbar-list">
        <li className="navbar-item">
            <Link to="/home" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/admin/proctorManagement" className="navbar-link">Proctor Management</Link>
          </li>
          <li className="navbar-item">
            <Link to="/admin/report" className="navbar-link">Report</Link>
          </li>
          <li className="navbar-item">
            <Link to="/admin/FeedBack" className="navbar-link">FeedBack</Link>
          </li>
          <li className="navbar-item">
            <Link to="/admin/waitingList" className="navbar-link">WaitingList</Link>
          </li>
        </ul>
      </nav>

      <div className="admin-content">
        {/* Render the Report component by default */}
        <Routes>
              <Route path="report" element={<Report />} /> 
              <Route path="feedBack" element={<FeedBack />} /> 
              <Route path="waitingList" element={<WaitingList />} /> 
              <Route path="proctorManagement" element={<ProctorManagement />} /> 

  
        </Routes>
      
      </div>
    </div>
  );
}

export default Admin;
