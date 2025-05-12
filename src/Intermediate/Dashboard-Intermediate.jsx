import React from 'react';
import './Dashboard-Intermediate.css'; 
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUpdatedStreak } from '../utils/streak';
import { weeklyTopics, getWeeklyTopic } from '../utils/topicRotation';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { UserButton } from '@clerk/clerk-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


function DashboardIntermediate() {
  const [showNotification, setShowNotification] = useState(false);
  const [streakCount, setStreakCount] = useState(0);
  useEffect(() => {
    setStreakCount(getUpdatedStreak());
  }, []);
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Physics',
        data: [30, 45, 50, 85],
        backgroundColor: '#00e6dc',
      },
      {
        label: 'Chemistry',
        data: [60, 65, 50, 42],
        backgroundColor: '#5488fe',
      },
      {
        label: 'Maths',
        data: [80, 85, 78, 80],
        backgroundColor: '#ff9772',
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
      <img
      src='data/coins_7928197.png'
      alt='Coin'
      className='intermediate-coin-icon'
      style={{ cursor: 'pointer', width: '24px', height: '24px' }}
      />
      <div className='intermediate-coin-count'>
        10
      </div>

      <img
    src="data/flame_3916980.png"
    alt="Streak"
    className="streak-icon"
    style={{ cursor: 'pointer', width: '24px', height: '24px' }}
  />
  <div className="streak-count">
        {streakCount}
      </div>
      <img
  src="data/notification_1144756.png"
  alt="Notifications"
  className="notification-icon"
  onClick={() => setShowNotification(prev => !prev)}
  style={{ cursor: 'pointer', width: '24px', height: '24px'}}
/>
{showNotification && (
  <div className="notification-dialog">
    <div className="notification-content">
      <p>No new notifications.</p>
    </div>
  </div>
)}
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
<Link to="/store-intermediate"
className={`sidebar-link ${location.pathname === '/store-intermediate' ? 'active' : ''}`}>
    Store</Link>
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
      <div className='store-intermediate-icon'></div>
      <div className="rounded-container">
      <div className="subject-cards">
  <Link to="/physics" className="subject-card physics-card">
    <div className="card-content">
      <div>Physics</div>
      <div className="jee-mains">Jee mains: 2/45</div>
      <div className="jee-advance">Jee advance: 3/68</div>
    </div>
  </Link>
  <Link to="/chemistry" className="subject-card chemistry-card">
    <div className="card-content">
      <div>Chemistry</div>
      <div className="jee-mains">Jee mains: 2/45</div>
      <div className="jee-advance">Jee advance: 3/68</div>
    </div>
  </Link>
  <Link to="/maths" className="subject-card maths-card">
    <div className="card-content">
      <div>Maths</div>
      <div className="jee-mains">Jee mains: 2/45</div>
      <div className="jee-advance">Jee advance: 3/68</div>
    </div>
  </Link>
</div>
<div className="graph-container">
          <Bar data={data} options={options} />
        </div>
        <div className="recommended-courses-section">
          <h3>Recommended Courses</h3>
          <div className="course-cards">
            <Link to="/ad1" className="course-card-1">
              <h4>Advertisment 1</h4>
              <p>description</p>
            </Link>
            <Link to="/ad2" className="course-card-2">
              <h4>Advertisment 2</h4>
              <p>description</p>
            </Link>
            <Link to="/ad3" className="course-card-3">
              <h4>Advertisment 3</h4>
              <p>description</p>
            </Link>
          </div>
        </div>
      <div className="weekly-challenge-container">
        <h3>Weekly Challenge</h3>
        <div className="subject-container">
          <div className="subject">
            <h4>Maths</h4>
            <div className='sub-day'>
             On Monday<br />
            <p>Topic: {getWeeklyTopic(weeklyTopics.Maths)}</p>
            </div>
            <button>Start Test</button>
          </div>
          <div className="subject">
            <h4>Physics</h4>
            <div className='sub-day'>
             On Wednesday<br />
            <p>Topic: {getWeeklyTopic(weeklyTopics.Physics)}</p>
            </div>
            <button>Start Test</button>
          </div>
          <div className="subject">
            <h4>Chemistry</h4>
            <div className='sub-day'>
               On Friday<br />
            <p>Topic: {getWeeklyTopic(weeklyTopics.Chemistry)}</p>
            </div>
            <button>Start Test</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardIntermediate;
