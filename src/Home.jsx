import './Home.css';
import Header from './header';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
        <Header/>
      <button className="signin-button">
        <Link className="signin-link" to="/signin">Sign In</Link>
      </button> 
      <div className="home-illustration"></div>
      <div className="cards-section"></div>
        <div className="card1">
          <h2>Intermediate</h2>
          <p>Get ready for some thought-provoking AI based Intemediate level questions! They'll challenge your understanding of how intelligent systems work.</p>
          <button className="get-started">
            <Link className="get-started-link" to="/signin">Get Started</Link>
          </button>
        </div>
        <div className="card2">
          <h2>Graduation</h2>
          <p>Get ready for some thought-provoking AI based Graduation level questions! They'll challenge your understanding of how intelligent systems work.</p>
          <button className="get-started">
            <Link className="get-started-link" to="/signin">Get Started</Link>
          </button>
        </div>
        <div className="card3">
          <h2>UPSC</h2>
          <p>Get ready for some thought-provoking AI based UPSC level questions! They'll challenge your understanding of how intelligent systems work.</p>
          <button className="get-started">
            <Link className="get-started-link" to="/signin">Get Started</Link>
          </button>
        </div>
        <div className="card4">
          <h2>Goverment Exam</h2>
          <p>Get ready for some thought-provoking AI based Goverment Exam level questions! They'll challenge your understanding of how intelligent systems work.</p>
          <button className="get-started">
            <Link className="get-started-link"to="/signin">Get Started</Link>
          </button>
        </div>
      <div className="education-section">
        <h1 className="education-title">Education</h1>
      </div>
      <div className="portal-section">
        <h1 className="portal-title">Portal</h1>
      </div>
      <div className='lets-go'>
      <h1 className='letss-goo'>Choose your Course...</h1>
      </div>
    </div>
  );
}

export default Home;