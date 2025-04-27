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
          <p>Get ready for some thought-provoking AI based <span className='word'>Intermediate</span> level questions! They'll challenge your understanding of how intelligent systems work.</p>
          <button className="get-started">
            <Link className="get-started-link" to="/signin">Get Started</Link>
          </button>
        </div>
        <div className="card2">
          <h2>Graduation</h2>
          <p>Get ready for some thought-provoking AI based <span className='word'>Graduation </span> level questions! They'll challenge your understanding of how intelligent systems work.</p>
          <button className="get-started">
            <Link className="get-started-link" to="/signin">Get Started</Link>
          </button>
        </div>
        <div className="card3">
          <h2>UPSC</h2>
          <p>Get ready for some thought-provoking AI based <span className='word'>UPSC</span> level questions! They'll challenge your understanding of how intelligent systems work.</p>
          <button className="get-started">
            <Link className="get-started-link" to="/signin">Get Started</Link>
          </button>
        </div>
        <div className="card4">
          <h2>Goverment Exam</h2>
          <p>Get ready for some thought-provoking AI based <span className='word'>Goverment Exam</span> level questions! They'll challenge your understanding of how intelligent systems work.</p>
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
      <div className='how-it-works'>
      <h1 className='how-works'>How it Works?</h1>
      <div className="how-works-content">
        <ul className="how-works-list">
          <li><b>Sign Up & Profile:</b> Create your personal account to save progress and personalize your learning.</li>
          <li><b>Course Level:</b> Choose the right difficulty (beginner, intermediate, advanced) for your current knowledge.</li>
          <li><b>AI Questions:</b> Practice with dynamically generated questions that adapt to your performance and provide instant feedback.</li>
          <li><b>Track & Improve:</b> Monitor your scores and identify areas for growth with progress reports and personalized suggestions.</li>
        </ul>
        <img src="data/Critical thinking-cuate.png" alt="How it works illustration" className="how-works-illustration" />
      </div>
      <div className='why-us'>
        <h1 className='whyy-uss'>Why Us?</h1>
      </div>
      <div className="why-us-content">
        <ul className="why-us-list">
          <li><b>Personalized Learning Journey:</b> Our AI dynamically adapts to your skill level, providing the right challenge at the right time for optimal learning.</li>
          <li><b>Vast and Varied Practice:</b>  Benefit from an endless supply of AI-generated questions, ensuring you encounter new scenarios and deepen your understanding.</li>
          <li><b>Actionable Progress Insights:</b>Easily track your performance, identify your strengths and weaknesses, and understand exactly where to focus your efforts for improvement.</li>
          <li><b>Flexible Learning at Your Pace:</b> Access our platform anytime, anywhere, and progress through the material at a speed that suits your individual needs and schedule.</li>
        </ul>
        <img src="data/Thinking face-cuate.png" alt="Why us illustration" className="why-us-illustration" />
      </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p className='copyright'>Copyright @ <a href="https://eternatek.in" target="_blank" rel="noopener noreferrer">etarnatek.in</a></p>
          <div className="footer-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>
          <div className="product-links">
            <Link>Our Products</Link>
            </div>
            <div className="sub-links">
              <Link to="/product/feature1">AI LMS</Link>
              <Link to="/product/feature2">AI Interview</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;