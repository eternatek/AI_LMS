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
import Intermediate2Dashboard from './Intermediate-2/Intermediate-2-dashboard';
import Intermediate2TakeExam from './Intermediate-2/Intermediate-2-take-exam';
import Intermediate2Analytics from './Intermediate-2/Intermediate-2-analytics';
import Intermediate2rewards from './Intermediate-2/Intermediate-2-rewards';
import Intermediate2store from './Intermediate-2/Intermediate-2-store';
import Intermediate2leaderboard from './Intermediate-2/Intermediate-2-leaderboard';

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
          <Route path="/intermediate-2-dashboard" element={<Intermediate2Dashboard/>} />  
          <Route path="/I2-take-exam" element={<Intermediate2TakeExam/>}/>
          <Route path="/I2-analytics" element={<Intermediate2Analytics/>}/>
          <Route path="/I2-rewards" element={<Intermediate2rewards/>}/>
          <Route path='/I2-store' element={<Intermediate2store/>}/>
          <Route path='I2-leaderboard' element={<Intermediate2leaderboard/>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;