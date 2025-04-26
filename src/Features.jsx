
import React from 'react';
import './Features.css';
import Header from './header';

function Features() {
  return (
    <div className='whole'>
    <div className="features-container">
    <div className='header'>
        <Header/>
      <h1 className="features-title">Educational Features Powered by AI</h1>
      <ul className="features-list">
        <li>AI-driven Personalized Learning Paths</li>
        <li>Smart Content Recommendations</li>
        <li>Real-time Performance Analytics</li>
        <li>Virtual AI Tutoring Assistant</li>
        <li>Automated Assignment Feedback</li>
        <li>Interactive Quizzes with Adaptive Difficulty</li>
      </ul>
    </div>
    </div>
    </div>
  );
}

export default Features;