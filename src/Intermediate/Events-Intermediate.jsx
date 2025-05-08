import React from 'react'
import './Take-Exam-Intermediate.css';
import { Link, useLocation } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';

function EventsIntermediate() {
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
        </div>
        </div>

  )
}

export default EventsIntermediate
