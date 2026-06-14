const InterviewProgress = () => {
  return (
    <div className="progress-card">

      <h3>Interview Progress</h3>

      <div className="progress-info">
        <span>7 / 10 Questions</span>
        <span>70%</span>
      </div>

      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>

      <ul className="question-list">

        <li>✅ Introduction</li>
        <li>✅ Tell me about yourself</li>
        <li>✅ Why do you want this role?</li>
        <li>✅ Describe a challenge you faced</li>
        <li>✅ Greatest strength?</li>
        <li>✅ Explain a project</li>

        <li className="active-question">
          🔵 How do you handle pressure?
        </li>

        <li>⚪ Future goals?</li>
        <li>⚪ Why should we hire you?</li>
        <li>⚪ Any questions?</li>

      </ul>

    </div>
  );
};

export default InterviewProgress;