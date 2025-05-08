import React from 'react'
import { Link } from 'react-router-dom';
import './Dashboard.css';
import { UserButton } from '@clerk/clerk-react';

function Dashboard() {
  return (
    <div className='dashboard'> 
    <div className='user-button'><UserButton/></div>
    <div className='logo-dashboard'></div>
    <h1 className='head'>Dashboard</h1>
    <p className='text'>Our platform provides specialized learning for key educational and career stages: Intermediate (secondary education and entrance prep), Graduation (undergraduate studies and skill development), UPSC (civil services exam preparation), and various Government Exams. We offer tailored resources and content for each domain, ensuring focused learning relevant to specific academic and professional goals.</p>
    <div className='cardsss-section'>
    <div className="card11">
          <h2>Intermediate</h2>
          <p>Get ready for some thought-provoking AI based <span className='word'>Intermediate</span> level questions! They'll challenge your understanding of how intelligent systems work.</p>
          <button className="get-started">
            <Link className="get-started-link" to="/dashboard-intermediate">Get Started</Link>
          </button>
        </div>
        <div className="card22">
          <h2>Graduation</h2>
          <p>Get ready for some thought-provoking AI based <span className='word'>Graduation </span> level questions! They'll challenge your understanding of how intelligent systems work.</p>
          <button className="get-started">
            <Link className="get-started-link" >Get Started</Link>
          </button>
        </div>
        <div className="card33">
          <h2>UPSC</h2>
          <p>Get ready for some thought-provoking AI based <span className='word'>UPSC</span> level questions! They'll challenge your understanding of how intelligent systems work.</p>
          <button className="get-started">
            <Link className="get-started-link">Get Started</Link>
          </button>
        </div>
        <div className="card44">
          <h2>Goverment Exam</h2>
          <p>Get ready for some thought-provoking AI based <span className='word'>Goverment Exam</span> level questions! They'll challenge your understanding of how intelligent systems work.</p>
          <button className="get-started">
            <Link className="get-started-link">Get Started</Link>
          </button>
        </div>
        </div>
    </div>
  )
}

export default Dashboard
