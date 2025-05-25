import React from 'react'
import { Link } from 'react-router-dom';
import './Intermediate-2-take-exam.css';
import { useState } from 'react';
import { topicsPCMB } from '../utils/topicsPCMB';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


function Intermediate2TakeExam() {
  const [selectedExam, setSelectedExam] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(' ');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [numQuestions, setNumQuestions] = useState('');
  // Sidebar active state
  const [activeSidebarOption, setActiveSidebarOption] = useState('Take Exam');

  return (
    <div className="take-exam-container-I2">
      <div className="take-exam-divider-I2"></div>
      <div className="take-exam-sidebar-I2">
        <div className="take-exam-sidebar-divider-I2"></div>
        <div className='take-exam-logo-I2'></div>
        <ul className="take-exam-sidebar-list-I2">
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
        <div className='head-take-exam-I2'>
            <h1>Take an Exam</h1>
            <p>Customize your exam preferences and start practicing.</p>
        </div>
        <div className='exam-config-container-take-exam-I2'>
            <h1>Exam Configuration</h1>
            <p>Select your exam type, subject, and other preferences.</p>
            <div className='exam-selection-take-exam-I2'>
                    {['JEE Main','JEE Advance','NEET','University Exams','State Exams'].map((exam)=>(
                        <div
                        key={exam}
                        className={`select-1-take-exam-I2${selectedExam===exam ? ' selected':''}`}
                        onClick={()=>setSelectedExam(exam)}
                        >
                            {exam}
                        </div>
                    ))}
            </div>
            <div className='subject-selection-take-exam-I2'>
              <h1>Subject</h1>
              <select className='subject-dropdown-I2'
              value={selectedSubject}
              onChange={(e)=>setSelectedSubject(e.target.value)}
              >
                <option value="">Select a subject</option>
                {Object.keys(topicsPCMB).map((subject)=>(
                    <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
            <div className='topic-selection-take-exam-I2'>
              <h1>Topic</h1>
              <select
                className='topic-dropdown-I2'
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
              >
                <option value="">Select a topic</option>
                {topicsPCMB[selectedSubject]?.map((topic) => (
                  <option key={topic} value={topic}>{topic}</option>
                ))}
              </select>
            </div>
            <div className='number-of-questions-take-exam-I2'>
            <h1>Number of Questions</h1>
            <div className='radio-number-questions-take-exam-I2'>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="questions-radio-group-label"
                  name="numQuestions"
                  value={numQuestions}
                  onChange={(e) => setNumQuestions(e.target.value)}
                >
                  <FormControlLabel value="25" control={<Radio />} label="25" />
                  <FormControlLabel value="50" control={<Radio />} label="50" />
                  <FormControlLabel value="75" control={<Radio />} label="75" />
                  <FormControlLabel value="100" control={<Radio />} label="100" />
                </RadioGroup>
              </FormControl>
              </div>
            </div>
            <div className='difficulty-level-take-exam-I2'>
                <h1>Difficulty Level</h1>
                <div className='radio-difficulty-level-take-exam-I2'>
                    <FormControl>
                        <RadioGroup
                        row
                        aria-labelledby="difficulty-radio-group-label"
                        name="difficultyLevel"
                        >
                  <FormControlLabel value="Easy" control={<Radio />} label="Easy" />
                  <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
                  <FormControlLabel value="Hard" control={<Radio />} label="Hard" />
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
            <div className='estimated-time-take-exam-I2-container'>
                <h1>Estimated Time: </h1>
                <h2>
                  {numQuestions === '25' && '45 minutes'}
                  {numQuestions === '50' && '90 minutes'}
                  {numQuestions === '75' && '135 minutes'}
                  {numQuestions === '100' && '180 minutes'}
                </h2>
            </div>
            <Link
              to={selectedSubject && selectedTopic ? "/start-exam" : "#"}
              style={{
                pointerEvents: selectedSubject && selectedTopic ? 'auto' : 'none',
                opacity: selectedSubject && selectedTopic ? 1 : 0.5
              }}
            >
              <div className='start-exam-button-take-exam-I2'>
                <h1>Start Exam</h1>
              </div>
            </Link>
        </div>
  </div>
  )
}

export default Intermediate2TakeExam