import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">

      <div className="hero-left">

        <div className="badge">
          ✨ AI-Powered Interview Practice
        </div>

        <h1>
          Practice Smarter.
          <br />
          <span>Get Hired Faster.</span>
        </h1>

        <p>
          InterviewIQ uses AI to analyze your performance,
          evaluate answers to help you ace your next interview.
        </p>

        <div className="hero-buttons">

          <button
            className="primary-btn"
           onClick={() => navigate("/login")}
          >
            Start Free Interview →
          </button>

         

        </div>

      </div>

     

    </section>
  );
};

export default Hero;