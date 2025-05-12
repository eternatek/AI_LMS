
import Dashboard from './Dashboard';
import Features from './Features';
import Home from './Home';
import Login from './Login';
import Signup from './Signup'
import DashboardIntermediate from './Intermediate/Dashboard-Intermediate';
import TakeExamIntermediate from './Intermediate/Take-Exam-Intermediate';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeaderboardIntermediate from './Intermediate/Leaderboard-Intermediate';
import EventsIntermediate from './Intermediate/Events-Intermediate';
import RewardsIntermediate from './Intermediate/Rewards-Intermediate';
import HistoryIntermediate from './Intermediate/History-Intermediate';
import SignOutPage from './Signout';
import StoreIntermediate from './Intermediate/Store-Intermediate';

function Pricing() {
  return <h1 className="page-content">Pricing Page</h1>;
}

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />  
          <Route path="/dashboard-intermediate" element={<DashboardIntermediate/>} />
          <Route path="/take-exam-intermediate" element={<TakeExamIntermediate/>} /> 
          <Route path="/leaderboard-intermediate" element={<LeaderboardIntermediate/>} /> 
          <Route path="/events-intermediate" element={<EventsIntermediate/>} />
          <Route path="/rewards-intermediate" element={<RewardsIntermediate/>} />  
          <Route path="/history-intermediate" element={<HistoryIntermediate/>} /> 
          <Route path="/store-intermediate" element={<StoreIntermediate/>} /> 
          <Route path="/signout" element={<SignOutPage/>} />             

        </Routes>
      </div>
    </Router>
  );
}

export default App;