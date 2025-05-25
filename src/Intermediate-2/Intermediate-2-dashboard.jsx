import React from 'react'
import { Link } from 'react-router-dom';
import './Intermediate-2-dashboard.css';

function Intermediate2Dashboard() {
  const [activeSidebarOption, setActiveSidebarOption] = React.useState('Dashboard');

  return (
    <div className="dashboard-container-I2">
        <div className="divider-I2"></div>
      <div className="sidebar-I2">
      <div className="sidebar-divider-I2"></div>
        <div className='logo-I2'></div>
        <ul className="sidebar-list-I2">
          <li
            className={activeSidebarOption === 'Dashboard' ? 'selected-sidebar-option-I2' : ''}
            onClick={() => setActiveSidebarOption('Dashboard')}
          >
            <Link to="/intermediate-2-dashboard"><span className="dashboard-icon-I2"></span>Dashboard</Link>
          </li>
          <li
            className={activeSidebarOption === 'Take Exam' ? 'selected-sidebar-option-I2' : ''}
            onClick={() => setActiveSidebarOption('Take Exam')}
          >
            <Link to="/I2-take-exam"><span className="take-exam-icon-I2"></span>Take Exam</Link>
          </li>
          <li
            className={activeSidebarOption === 'Recent Exam' ? 'selected-sidebar-option-I2' : ''}
            onClick={() => setActiveSidebarOption('Recent Exam')}
          >
            <Link to="/I2-recent-exam"><span className="recent-exam-icon-I2"></span>Recent Exam</Link>
          </li>
          <li
            className={activeSidebarOption === 'Analytics' ? 'selected-sidebar-option-I2' : ''}
            onClick={() => setActiveSidebarOption('Analytics')}
          >
            <Link to="/I2-analytics"><span className="analytics-icon-I2"></span>Analytics</Link>
          </li>
          <li
            className={activeSidebarOption === 'Leaderboard' ? 'selected-sidebar-option-I2' : ''}
            onClick={() => setActiveSidebarOption('Leaderboard')}
          >
            <Link to="/I2-leaderboard"><span className="leaderboard-icon-I2"></span>Leaderboard</Link>
          </li>
          <li
            className={activeSidebarOption === 'Community' ? 'selected-sidebar-option-I2' : ''}
            onClick={() => setActiveSidebarOption('Community')}
          >
            <Link to="/I2-community"><span className="community-icon-I2"></span>Community</Link>
          </li>
          <li
            className={activeSidebarOption === 'Rewards' ? 'selected-sidebar-option-I2' : ''}
            onClick={() => setActiveSidebarOption('Rewards')}
          >
            <Link to="/I2-rewards"><span className="rewards-icon-I2"></span>Rewards</Link>
          </li>
          <li
            className={activeSidebarOption === 'Store' ? 'selected-sidebar-option-I2' : ''}
            onClick={() => setActiveSidebarOption('Store')}
          >
            <Link to="/I2-store"><span className="store-icon-I2"></span>Store</Link>
          </li>
        </ul>
      </div>
      <div className="main-content-I2">
        <div className='head-hello-dashboard-I2'>
            <h1>Welcome Back, User!</h1>
            <h2>Here's an overview of your progress and upcoming exams.</h2>
        </div>
        <Link to="/I2-take-exam" className='button-take-exam-dashboard-I2'>
            <h1>Take an Exam →</h1>
        </Link>
        <div className="exams-completed-card-I2">
          <h1>Exams Completed</h1>
          <h2>24</h2>
          <p>⬆ 12% from last month</p>
        </div>
        <div className="study-hours-card-I2">
          <h1>Study Hours</h1>
          <h2>78</h2>
          <p>⬆ 8% from last month</p>
        </div>
        <div className="overall-rank-card-I2">
          <h1>Overall Rank</h1>
          <h2>42</h2>
          <p>⬆ Improved by 5</p>
        </div>
        <div className="badges-earned-card-I2">
          <h1>Badges Earned</h1>
          <h2>7</h2>
          <p>2 new Earned this month</p>
        </div>
        <div className='weekly-challenge-container-I2'>
            <h1>Weekly Challenge</h1>
            <div className='weekly-challenge-card-1-I2'>
                <h1>JEE Mains Mock Test</h1>
                <h2>Practice test based on your performance</h2>
                <div className='difficulty-weekly-card-1-I2'>
                    <h1>Medium</h1>
                </div>
                <div className='tag1-weekly-card-1-I2'>
                    <h1>Physics</h1>
                </div>
                <div className='tag2-weekly-card-1-I2'>
                    <h1>Chemistry</h1>
                </div>
                <div className='tag3-weekly-card-1-I2'>
                    <h1>Maths</h1>
                </div>
                <div className='question-time-weekly-card-1-I2'>
                    <h1>75 Questions</h1>
                    <h2>3 Hours</h2>
                </div>
                <div className='button-weekly-challenge-card-1-I2'>
                    <Link to="/I2-take-exam" className="start-exam-button-I2"><h1>Start Exam</h1></Link>
                </div>
                
            </div>
            <div className='weekly-challenge-card-2-I2'>
                <h1>Neet Mock Test</h1>
                <h2>Practice test based on your performance</h2>
                <div className='difficulty-weekly-card-2-I2'>
                    <h1>Hard</h1>
                </div>
                <div className='tag1-weekly-card-1-I2'>
                    <h1>Physics</h1>
                </div>
                <div className='tag2-weekly-card-1-I2'>
                    <h1>Chemistry</h1>
                </div>
                <div className='tag3-weekly-card-2-I2'>
                    <h1>Biology</h1>
                </div>
                <div className='question-time-weekly-card-1-I2'>
                    <h1>180 Questions</h1>
                    <h2>3 Hours</h2>
                </div>
                <div className='button-weekly-challenge-card-1-I2'>
                    <Link to="/I2-take-exam" className="start-exam-button-I2"><h1>Start Exam</h1></Link>
                </div>
            </div>
            <div className='subject-performance-container-I2-dashboard'>
                <h1>Subject Performance</h1>
                <div className='subject-performance-card-I2-dashboard'>
                    <Link to="/I2-analytics"><h1>View More</h1></Link>
                  <div className="subject-bar">
                    <div className="subject-label">
                      <span>Physics</span>
                      <div className="subject-percent">70%</div>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                  <div className="subject-bar">
                    <div className="subject-label">
                      <span>Chemistry</span>
                      <div className="subject-percent">60%</div>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                  <div className="subject-bar">
                    <div className="subject-label">
                      <span>Maths</span>
                      <div className="subject-percent">80%</div>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                  <div className="subject-bar">
                    <div className="subject-label">
                      <span>Biology</span>
                      <div className="subject-percent">50%</div>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: "50%" }}></div>
                    </div>
                  </div>
                </div>
            </div>
            <div className='recent-exam-container-dashbaord-I2'>
                <h1>Recent Exams</h1>
                <div className='recent-exam-card-dashbaord-I2'>
                    <h1>Your Recent Exam Activity</h1>
                    <h2>You've completed 7 exams in the last 30 days</h2>
                    <Link>
                    <div className='button-recent-exam-card-dashbaord-I2'>
                        <div className='illustration-button-recent-exam-card-dashbaord-I2'></div>
                        <h1>View Details</h1>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Intermediate2Dashboard