import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="logo-section">

        <div className="logo-box">
          🤖
        </div>

        <div>
          <h2>InterviewIQ</h2>
          <p>AI Interview Analyzer</p>
        </div>

      </div>

      <div className="nav-links">

        <a href="#">Features</a>

        <a href="#">How It Works</a>

        <a href="#">Pricing</a>

        <a href="#" className="resource-link">
          Resources
          <ChevronDown size={16} />
        </a>

        <a href="#">About Us</a>

      </div>

      <div className="nav-buttons">

        <button className="login-btn">
          Log In
        </button>

        <button className="start-btn">
          Get Started Free
        </button>

      </div>

    </nav>
  );
};

export default Navbar;