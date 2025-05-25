import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './intermediate-2-store.css';



function Intermediate2store() {
    const [activeSidebarOption, setActiveSidebarOption] = React.useState('Dashboard');
    const [selectedItem, setSelectedItem] = useState('All Items');
  return (
    <div className="store-container-I2">
    <div className="store-divider-I2"></div>
    <div className="store-sidebar-I2">
      <div className="store-sidebar-divider-I2"></div>
      <div className='store-logo-I2'></div>
      <ul className="store-sidebar-list-I2">
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
    <div className='head-store-I2'>
      <h1>Store</h1>
      <p>Purchase educational materials using your earned coins.</p>
      <h2>2500</h2>
      <h3>coins available</h3>
    </div>
    <div className='store-item-selection-I2'>
                    {['All Items','Books','Practice Sets','Question Papers','Exam Packs','Study Tools'].map((op)=>(
                        <div
                        key={op}
                        className={`select-1-store-I2${selectedItem===op ? ' selected':''}`}
                        onClick={()=>setSelectedItem(op)}
                        >
                            {op}
                        </div>
                    ))}
            </div>
            <div className="store-card-wrapper-I2">
            {selectedItem==='All Items' && 
            ( <div className='purchase-items-card-1-store-I2'>
                <h1>JEE Mains Complete Question Bank</h1>
                <p>5000+ practice questions with detailed solutions</p>
                <h2>300</h2>
                <div className='purchase-button-1-store-I2'>
                    <h1>Purchase</h1>
                </div>
            </div>)}

           {(selectedItem === 'All Items' || selectedItem === 'Books') && (
             <div className='purchase-items-card-2-store-I2'>
               <h1>NEET Biology Guide</h1>
               <p>Comprehensive guide for NEET biology preparation</p>
               <h2>300</h2>
               <div className='purchase-button-2-store-I2'>
                 <h1>Purchase</h1>
               </div>
             </div>
           )}
            {(selectedItem==='All Items' || selectedItem==='Study Tools') && (
                <div className='purchase-items-card-3-store-I2'>
                <h1>Physics Formula Sheet</h1>
                <p>Quick reference guide for all important physics formulas</p>
                <h2>300</h2>
                <div className='purchase-button-3-store-I2'>
                  <h1>Purchase</h1>
                </div>
            </div>)}
            {(selectedItem==='All Items' || selectedItem==='Question Papers') && (
                <div className='purchase-items-card-4-store-I2'>
            <h1>JEE Advanced Previous Papers (10 Years)</h1>
            <p>Collection of JEE Advanced question papers with solutions</p>
            <h2>300</h2>
            <div className='purchase-button-4-store-I2'>
                <h1>Purchase</h1>
            </div>
            </div>)}
            {(selectedItem==='All Items' || selectedItem==='Books') && (
                <div className='purchase-items-card-5-store-I2'>
            <h1>Chemistry Reaction Handbook</h1>
            <p>Visual guide for 500+ chemical reactions</p>
            <h2>300</h2>
            <div className='purchase-button-5-store-I2'>
              <h1>Purchase</h1>
            </div>
            </div>)}
            {(selectedItem==='All Items' || selectedItem==='Practice Sets') && (
                <div className='purchase-items-card-6-store-I2'>
            <h1>Mathematics Problem Solving Toolkit</h1>
            <p>Advanced strategies for solving complex math problems</p>
            <h2>300</h2>
            <div className='purchase-button-6-store-I2'>
              <h1>Purchase</h1>
            </div>
            </div>)}
            {(selectedItem==='All Items' || selectedItem==='Exam Packs') && (
                <div className='purchase-items-card-7-store-I2'>
            <h1>JEE Mains Mock Test Series</h1>
            <p>Set of 10 full-length mock tests with detailed analysis</p>
            <h2>300</h2>
            <div className='purchase-button-7-store-I2'>
              <h1>Purchase</h1>
            </div>
            </div>)}
            {(selectedItem==='All Items' || selectedItem==='Study Tools') && (
                <div className='purchase-items-card-8-store-I2'>
            <h1>Digital Flashcards</h1>
            <p>Interactive flashcards for quick revision</p>
            <h2>300</h2>
            <div className='purchase-button-8-store-I2'>
              <h1>Purchase</h1>
            </div>
            </div>)}
            </div>
    </div>
  )
}

export default Intermediate2store
