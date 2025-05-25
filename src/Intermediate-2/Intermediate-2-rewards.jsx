import React from 'react'
import { Link } from 'react-router-dom'
import './intermediate-2-rewards.css';
import { useState } from 'react';


function Intermediate2rewards() {
    const [activeSidebarOption, setActiveSidebarOption] = React.useState('Dashboard');
    const [selectedOp, setSelectedOp] = useState('Earned');
  return (
    <div className="rewards-container-I2">
      <div className="rewards-divider-I2"></div>
      <div className="rewards-sidebar-I2">
        <div className="rewards-sidebar-divider-I2"></div>
        <div className='rewards-logo-I2'></div>
        <ul className="rewards-sidebar-list-I2">
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
      <div className='head-rewards-I2'>
        <h1>Rewards</h1>
        <p>Earn badges and coins as you progress in your studies.</p>
      </div>
      <div className='your-badges-container-I2'>
        <h1>Your Badges</h1>
        <p>Badges earned through your achievements</p>
      <div className='rewards-selection-I2'>
                    {['Earned','Available'].map((op)=>(
                        <div
                        key={op}
                        className={`select-1-rewards-I2${selectedOp===op ? ' selected':''}`}
                        onClick={()=>setSelectedOp(op)}
                        >
                            {op}
                        </div>
                    ))}
            </div>
            {selectedOp==="Earned" && (
                <>
            <div className='reward-name-1-rewards-I2'>
                <h1>Speed Solver</h1>
                <div className='reward-name-1-ilus'></div>
                <p>Completed 5 exams before time</p>
            </div>
            <div className='reward-name-2-rewards-I2'>
            <div className='reward-name-2-ilus'></div>
                <h1>Top 5 Percent</h1>
                <p>Ranked in top 5% of students</p>
            </div>
            <div className='reward-name-3-rewards-I2'>
            <div className='reward-name-3-ilus'></div>
                <h1>Consistent Learner</h1>
                <p>7-day learning streak</p>
            </div>
            <div className='reward-name-4-rewards-I2'>
            <div className='reward-name-4-ilus'></div>
                <h1>Challenge Winner</h1>
                <p>Won the weekly challenge</p>
            </div>
            <div className='reward-name-5-rewards-I2'>
            <div className='reward-name-5-ilus'></div>
                <h1>Perfect Score</h1>
                <p>100% Score</p>
            </div>
            </>
            )}
            {selectedOp==="Available" && (
                <>
                <div className='reward-avail-1-I2'>
                    <h1>Subject Master</h1>
                    <p>Score 90%+ in all subjects</p>
                    <h2>Progress</h2>
                    <h3>80%</h3>
                    <div className='reward-avail-ilus-1-I2'></div>
                    <div className='progress-reward-1-I2'>
                        <div className='progress-fill-reward-1-I2' style={{ width: "80%" }}></div>
                    </div>
                </div>
                <div className='reward-avail-2-I2'>
                    <h1>Quiz Champion</h1>
                    <p>Complete 50 quizzes</p>
                    <h2>Progress</h2>
                    <h3>60%</h3>
                    <div className='reward-avail-ilus-2-I2'></div>
                    <div className='progress-reward-2-I2'>
                        <div className='progress-fill-reward-2-I2' style={{ width: "60%" }}></div>
                    </div>
                </div>
                <div className='reward-avail-3-I2'>
                    <h1>Helping Hand</h1>
                    <p>Answer 20 community questions</p>
                    <h2>Progress</h2>
                    <h3>70%</h3>
                    <div className='reward-avail-ilus-3-I2'></div>
                    <div className='progress-reward-3-I2'>
                        <div className='progress-fill-reward-3-I2' style={{ width: "70%" }}></div>
                    </div>
                </div>
                <div className='reward-avail-4-I2'>
                    <h1>Perfect Month</h1>
                    <p>30-day study streak</p>
                    <h2>Progress</h2>
                    <h3>30%</h3>
                    <div className='reward-avail-ilus-4-I2'></div>
                    <div className='progress-reward-4-I2'>
                        <div className='progress-fill-reward-4-I2' style={{ width: "30%" }}></div>
                    </div>
                </div>
                </>
            )}
        </div>
        <div className='coin-balance-container-rewards-I2'>
            <h1>Coin Balance</h1>
            <h2>Use coins to purchase study materials</h2>
            <div className='coins-head-rewards-I2'>
                <h1>2,500</h1>
                <h2>Available coins</h2>
            </div>
            <Link to="/I2-store">
            <div className='coins-visit-store-button-rewards-I2'>
                <h1>Visit Store</h1>
            </div>
            </Link>
        </div>
      </div>
  )
}

export default Intermediate2rewards
