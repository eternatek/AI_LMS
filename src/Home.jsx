import './Home.css';
import Header from './header';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page-content">
        <Header/>
      <Link to="/signin" className="signin-button">Sign In</Link>  {/* Sign In Button */}
      <div className="home-illustration"></div>
      <div className="education-section">
        <h1 className="education-title">Education</h1>
      </div>
      <div className="portal-section">
        <h1 className="portal-title">Portal</h1>
      </div>
    </div>
  );
}

export default Home;