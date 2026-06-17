import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

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

      <div className="nav-buttons">

        <button
          className="login-btn"
          onClick={() => navigate("/login")}
        >
          Log In
        </button>

        <button
          className="start-btn"
          onClick={() => navigate("/login")}
        >
          Get Started Free
        </button>

      </div>

    </nav>
  );
};

export default Navbar;