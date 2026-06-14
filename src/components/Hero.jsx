const Hero = () => {
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
          evaluate answers, and provide personalized feedback
          to help you ace your next interview.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Start Free Interview →
          </button>

          <button className="secondary-btn">
            Upload Resume
          </button>
        </div>

      </div>

      <div className="hero-right">

<div className="dashboard-preview">

 <div className="preview-sidebar">
  <h4>InterviewIQ</h4>

  <p>Dashboard</p>
  <p>Live Interview</p>
  <p>AI Questions</p>
  <p>Analytics</p>
  <p>Reports</p>
  <p>Resume Match</p>
</div>

<div className="preview-content">

  <div className="preview-header">
    <h3>Overall Performance</h3>
    <div className="preview-score">82</div>
  </div>

  <div className="preview-summary">
    <h4>Summary</h4>
    <p>
      Strong communication and eye contact.
      Minor improvements needed in filler words.
    </p>
  </div>

  <div className="preview-grid">

    <div className="preview-card">
      Eye Contact
      <h3>87%</h3>
    </div>

    <div className="preview-card">
      Confidence
      <h3>81%</h3>
    </div>

    <div className="preview-card">
      Speech Rate
      <h3>145</h3>
    </div>

    <div className="preview-card">
      Answer Quality
      <h3>85%</h3>
    </div>

  </div>

</div>

</div>

      </div>

    </section>
  );
};

export default Hero;