import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import './Intermediate-2-leaderboard.css';
import { topicsPCMB } from '../utils/topicsPCMB';


function Intermediate2leaderboard() {
    const [activeSidebarOption, setActiveSidebarOption] = React.useState('Dashboard');
    const [selectedExam, setSelectedExam] = useState('JEE Main');
    const [selectedSubject, setSelectedSubject] = useState(' ');
    const [selectedState, setSelectedState] = useState('');
    const [selectedUni,setSelectedUni] = useState('');

  return (
    <div className="leaderboard-container-I2">
    <div className="leaderboard-divider-I2"></div>
    <div className="leaderboard-sidebar-I2">
      <div className="leaderboard-sidebar-divider-I2"></div>
      <div className='leaderboard-logo-I2'></div>
      <ul className="leaderboard-sidebar-list-I2">
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
    <div className='head-leaderboard-I2'>
      <h1>Leaderboard</h1>
      <p>See how you rank among other students.</p>
    </div>
    <div className='exam-selection-leaderboard-I2'>
                    {['JEE Main','JEE Advance','NEET','University Exams','State Exams'].map((exam)=>(
                        <div
                        key={exam}
                        className={`select-1-leaderboard-I2${selectedExam===exam ? ' selected':''}`}
                        onClick={()=>setSelectedExam(exam)}
                        >
                            {exam}
                        </div>
                    ))}
            </div>
            <div className='subject-selection-leaderboard-I2'>
              <h1>Subject</h1>
              <select className='subject-dropdown-1-I2'
              value={selectedSubject}
              onChange={(e)=>setSelectedSubject(e.target.value)}
              >
                <option value="">Select a subject</option>
                {Object.keys(topicsPCMB).map((subject)=>(
                    <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
            <div className='state-selection-leaderboard-I2'>
              <h1>State / UT</h1>
              <select className='state-dropdown-I2'
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                <option value="">Select a state</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Ladakh">Ladakh</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
              </select>
            </div>
            <div className='uni-selection-leaderboard-I2'>
              <h1>University</h1>
              <select className='uni-dropdown-I2'
                value={selectedUni}
                onChange={(e) => setSelectedUni(e.target.value)}
                >
                <option value="All Universities">All Universities</option> 
                <option value="IIT Bombay">IIT Bombay</option> 
                <option value="IIT Delhi">IIT Delhi</option> 
                <option value="IIT Roorkee">IIT Roorkee</option> 
              </select>
            </div>
    </div>
  )
}

export default Intermediate2leaderboard
