import React from 'react';
import './Dashboard-Intermediate.css'; // make sure to create this CSS file
import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';

function DashboardIntermediate() {
  return (
    <div className="dashboard-intermediate">
      <div className='logo-intermediate'></div>
      <div className='options'>
      <Link><MdDashboard style={{ marginRight: '8px' }} /> Overview</Link>
      </div>
      <div className="rounded-container">
        <h1>Intermediate Dashboard</h1>
        <p>Welcome to the Intermediate learning section!</p>
      </div>
    </div>
  );
}

export default DashboardIntermediate;
