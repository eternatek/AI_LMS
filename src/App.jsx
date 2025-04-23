
import Features from './Features';
import Home from './Home';
import Signin from './Signin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Pricing() {
  return <h1 className="page-content">Pricing Page</h1>;
}

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/signin" element={<Signin/>} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;