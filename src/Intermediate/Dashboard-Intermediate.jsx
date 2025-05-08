import React from 'react';
import './Dashboard-Intermediate.css'; // make sure to create this CSS file
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { UserButton } from '@clerk/clerk-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement, 
  Title,
  Tooltip,
  Legend
);

function DashboardIntermediate() {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Physics',
        data: [70, 75, 80, 85],
        fill: false,
        borderColor: '#00e6dc',
        tension: 0.4,
      },
      {
        label: 'Chemistry',
        data: [60, 65, 70, 72],
        fill: false,
        borderColor: '#5488fe',
        tension: 0.4,
      },
      {
        label: 'Maths',
        data: [80, 85, 88, 90],
        fill: false,
        borderColor: '#ff9772',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Subject-wise Performance',
      },
    },
  };
  const location = useLocation();
  return (
    <div className="dashboard-intermediate">
      <div className='user-button-intermediate'><UserButton/></div>
      <div className='logo-intermediate'></div>
      <div className='options-intermediate'>
      <Link
to="/dashboard-intermediate"
className={`sidebar-link ${location.pathname === '/dashboard-intermediate' ? 'active' : ''}`}
>
Overview
</Link>
<Link to="/take-exam-intermediate" 
className={`sidebar-link ${location.pathname === '/take-exam-intermediate' ? 'active' : ''}`}>
    Take Exam</Link>

<Link to="/leaderboard-intermediate" 
className={`sidebar-link ${location.pathname === '/leaderboard-intermediate' ? 'active' : ''}`}>
    Leaderboard</Link>

<Link to="/events-intermediate"
className={`sidebar-link ${location.pathname === '/events-intermediate' ? 'active' : ''}`}>
    Events</Link>

<Link to="/rewards-intermediate"
className={`sidebar-link ${location.pathname === '/rewards-intermediate' ? 'active' : ''}`}>
    Rewards</Link>

<Link to="/history-intermediate"
className={`sidebar-link ${location.pathname === '/history-intermediate' ? 'active' : ''}`}>
    History</Link>
</div>
<div className='log-out-intermediate'>
  <Link to="/">Sign Out</Link>
</div>
      <div className='log-out-intermediate-icon'></div>
      <div className='overview-intermediate-icon'></div>
      <div className='exam-intermediate-icon'></div>
      <div className='leaderboard-intermediate-icon'></div>
      <div className='event-intermediate-icon'></div>
      <div className='rewards-intermediate-icon'></div>
      <div className='history-intermediate-icon'></div>
      <div className="rounded-container">
      <div className="subject-cards">
  <Link to="/physics" className="subject-card physics-card">Physics</Link>
  <Link to="/chemistry" className="subject-card chemistry-card">Chemistry</Link>
  <Link to="/maths" className="subject-card maths-card">Maths</Link>
</div>
<div className="graph-container">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default DashboardIntermediate;
