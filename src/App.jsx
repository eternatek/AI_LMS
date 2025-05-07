
import Dashboard from './Dashboard';
import Features from './Features';
import Home from './Home';
import Login from './Login';
import Signup from './Signup'
import DashboardIntermediate from './Dashboard-Intermediate';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;