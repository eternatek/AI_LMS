import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Intermediate-2-analytics.css';
import { Bar, Line, Pie, Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
  const radarData = {
    labels: ['Physics', 'Chemistry', 'Maths', 'Biology', 'English'],
    datasets: [
      {
        label: 'Your Score',
        data: [85, 75, 90, 70, 80],
        backgroundColor: 'rgba(34, 202, 236, 0.2)',
        borderColor: '#22caec',
        pointBackgroundColor: '#22caec',
      },
      {
        label: 'Average Score',
        data: [70, 68, 80, 65, 72],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: '#ff6384',
        pointBackgroundColor: '#ff6384',
      },
    ],
  };

  const radarOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
      },
    },
  };

function Intermediate2Analytics() {
  const [selectedExam, setSelectedExam] = useState('Overview');
  const [activeSidebarOption, setActiveSidebarOption] = useState('Analytics');

  const data = {
    labels: ['JEE Mains', 'NEET', 'University Exams', 'State Exams'],
    datasets: [
      {
        label: 'Physics',
        data: [4, 3, 5, 2],
        backgroundColor: '#0088fe' 
      },
      {
        label: 'Chemistry',
        data: [1, 6, 3, 6],
        backgroundColor: '#ff8042', 
      },
      {
        label: 'Maths',
        data: [2, 0, 5, 3],
        backgroundColor: '#00c49f', 
      },
      {
        label: 'Biology',
        data: [0, 6, 4, 2],
        backgroundColor: '#ffbb28', 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
    },
  };

  const pieData = {
    labels: ['Diagrams', 'MCQs', 'Calculations','Coding','Theory'],
    datasets: [
      {
        data: [15, 25, 20, 14, 26],
        backgroundColor: ['#00c49f', '#0088fe', '#8884d8', '#ff8042' ,' #ffbb28'],
        hoverOffset: 10,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
      },
    },
  };

  const lineData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Overall Score',
        data: [60, 55, 80, 65],
        borderColor: '#0287ff',
        fill: false,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
    },
  };

  return (
    <div className="analytics-container-I2">
      <div className="analytics-divider-I2"></div>
      <div className="analytics-sidebar-I2">
        <div className="analytics-sidebar-divider-I2"></div>
        <div className="analytics-logo-I2"></div>
        <ul className="analytics-sidebar-list-I2">
          <li
            className={activeSidebarOption === 'Dashboard' ? 'selected-sidebar-option-I2' : ''}
            onClick={() => setActiveSidebarOption('Dashboard')}
          >
            <Link to="/intermediate-2-dashboard">
              <span className="dashboard-icon-I2"></span>Dashboard
            </Link>
          </li>
          <li
            className={activeSidebarOption === 'Take Exam' ? 'selected-sidebar-option-I2' : ''}
            onClick={() => setActiveSidebarOption('Take Exam')}
          >
            <Link to="/I2-take-exam">
              <span className="take-exam-icon-I2"></span>Take Exam
            </Link>
          </li>
          <li
            className={activeSidebarOption === 'Recent Exam' ? 'selected-sidebar-option-I2' : ''}
            onClick={() => setActiveSidebarOption('Recent Exam')}
          >
            <Link to="/I2-recent-exam">
              <span className="recent-exam-icon-I2"></span>Recent Exam
            </Link>
          </li>
          <li
            className={activeSidebarOption === 'Analytics' ? 'selected-sidebar-option-I2' : ''}
            onClick={() => setActiveSidebarOption('Analytics')}
          >
            <Link to="/I2-analytics">
              <span className="analytics-icon-I2"></span>Analytics
            </Link>
          </li>
          <li
            className={activeSidebarOption === 'Leaderboard' ? 'selected-sidebar-option-I2' : ''}
            onClick={() => setActiveSidebarOption('Leaderboard')}
          >
            <Link to="/I2-leaderboard">
              <span className="leaderboard-icon-I2"></span>Leaderboard
            </Link>
          </li>
          <li
            className={activeSidebarOption === 'Community' ? 'selected-sidebar-option-I2' : ''}
            onClick={() => setActiveSidebarOption('Community')}
          >
            <Link to="/I2-community">
              <span className="community-icon-I2"></span>Community
            </Link>
          </li>
          <li
            className={activeSidebarOption === 'Rewards' ? 'selected-sidebar-option-I2' : ''}
            onClick={() => setActiveSidebarOption('Rewards')}
          >
            <Link to="/I2-rewards">
              <span className="rewards-icon-I2"></span>Rewards
            </Link>
          </li>
          <li
            className={activeSidebarOption === 'Store' ? 'selected-sidebar-option-I2' : ''}
            onClick={() => setActiveSidebarOption('Store')}
          >
            <Link to="/I2-store">
              <span className="store-icon-I2"></span>Store
            </Link>
          </li>
        </ul>
      </div>
      <div className="analytics-content-container">
        <h1>Analytics</h1>
        <h2>Track your performance across different exams and subjects.</h2>
        <div className="exam-selection-analytics-I2">
          {['Overview', 'JEE', 'NEET', 'University Exams', 'State Exams'].map((exam) => (
            <div
              key={exam}
              className={`select-1-analytics-I2${selectedExam === exam ? ' selected' : ''}`}
              onClick={() => setSelectedExam(exam)}
            >
              {exam}
            </div>
          ))}
        </div>
        <div className="head-performance-analysis-analytics-I2">
          <h1>Performance Analysis</h1>
        </div>
        {selectedExam === 'Overview' && (
          <div className="subject-performance-analytics-I2">
            <h1>Subject Performance</h1>
            <h2>Your scores across different subjects</h2>
            <div className='bar-char-overview-analytics-I2'>
            <Bar data={data} options={options} />
            </div>
          </div>
        )}
        {selectedExam === 'Overview' && (
          <div className="score-trend-analytics-I2">
            <h1>Score Trends</h1>
            <h2>Your performance over the last month</h2>
            <div className='line-graph-overview-analytics-I2'>
              <Line data={lineData} options={lineOptions} />
            </div>
          </div>
        )}
        {selectedExam === 'Overview' && (
          <div className="question-analysis-analytics-I2">
            <h1>Question Type Analysis</h1>
            <h2>Performance by question type</h2>
            <div className='pi-graph-overview-analytics-I2'>
              <Pie data={pieData} options={pieOptions} />
            </div>
          </div>
        )}
        {selectedExam === 'Overview' && (
          <div className="subject-comparision-analytics-I2">
            <h1>Subject Comparison</h1>
            <h2>Your score vs average student score</h2>
            <div className='radar-graph-overview-analytics-I2'>
              <Radar data={radarData} options={radarOptions} />
            </div>
          </div>
        )}
        {selectedExam === 'JEE' && (
          <div className="jee-performance-analysis-analytics-I2">
            <h1>JEE Performance Analysis</h1>
            <h2>Detailed analysis of your JEE Mains and Advanced performance</h2>
          </div>
        )}
        {selectedExam === 'NEET' && (
            <div className='neet-performance-analysis-analytics-I2'>
                <h1>NEET Analysis</h1>
                <h2>Detailed analysis of your NEET and medical entrance exam performance</h2>
            </div>
        )}
         {selectedExam === 'University Exams' && (
            <div className='univeristy-exams-performance-analysis-analytics-I2'>
                <h1>University Exams Analysis</h1>
                <h2>Detailed analysis of your performance in university-specific engineering entrance exams</h2>
            </div>
        )}
         {selectedExam === 'State Exams' && (
            <div className='state-exams-performance-analysis-analytics-I2'>
                <h1>State-Level Exam Analysis</h1>
                <h2>Detailed analysis of your performance in state-level engineering entrance exams</h2>
            </div>
        )}
      </div>
    </div>
  );
}

export default Intermediate2Analytics;