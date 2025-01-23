import React, { useState } from 'react';
import UserStore from '../../UserStore';
import './feedback.css'; // Import external CSS

function ProctorManagement() {
  const [blockId, setBlockId] = useState('');
  const [password, setPassword] = useState('');

  const handleBlockIdChange = (event) => {
    setBlockId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    if (!blockId || !password) {
      alert("Please enter both Block ID and Password.");
      return;
    }

    const newProctor = {
      blockId,
      password,
    };

    UserStore.addProctor(newProctor); 

    setBlockId('');
    setPassword('');
  };

  return (
    <div className="proctor-management-container">
      <div className="form-container"> 
        <h2>Proctor Management</h2>
        <form onSubmit={handleSubmit} className="form-center">
          <div>
            <label htmlFor="blockId">Block ID:</label>
            <select id="blockId" value={blockId} onChange={handleBlockIdChange}>
              <option value="">Select Block</option>
              <option value="1">1 (Female)</option>
              <option value="2">2 (Female)</option>
              <option value="3">3 (Male)</option>
              <option value="4">4(Male)</option>
              <option value="A">4(Female)</option>
              <option value="B">4(Male)</option>
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
          <button type="submit" className="assign-button">Assign</button>
        </form>
      </div>
    </div>
  );
}

export default ProctorManagement;