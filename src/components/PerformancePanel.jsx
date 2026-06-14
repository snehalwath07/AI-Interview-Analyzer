import { useInterview } from "../context/InterviewContext";

const PerformancePanel = () => {
  const {
    eyeContact,
    speechRate,
    fillerCount,
    answerScore,
  } = useInterview();

  const fillerScore = Math.max(
    0,
    100 - fillerCount * 5
  );

  const overallScore = Math.round(
    eyeContact * 0.30 +
    speechRate * 0.20 +
    fillerScore * 0.20 +
    answerScore * 0.30
  );

  const scoreLabel =
    overallScore >= 85
      ? "Excellent"
      : overallScore >= 70
      ? "Good"
      : "Needs Improvement";

  return (
    <div className="performance-panel">

      <div className="performance-left">

        <h2>Overall Performance</h2>

        <div className="gauge-circle">
          <div>
            <h1>{overallScore}</h1>
            <p>/100</p>
          </div>
        </div>

        <h3 className="good-score">
          {scoreLabel}
        </h3>

      </div>

      <div className="performance-right">

        <h3>Summary</h3>

        <p className="summary-text">
          AI-generated performance summary
          based on eye contact, speech rate,
          filler words, and answer quality.
        </p>

        <div className="strengths-section">

          <div>
            <h4>Top Strengths</h4>

            <p>✅ Eye Contact: {eyeContact}%</p>
            <p>✅ Speech Rate: {speechRate} WPM</p>
            <p>✅ Answer Score: {answerScore}%</p>
          </div>

          <div>
            <h4>Areas to Improve</h4>

            <p>
              ⚠ Filler Words:
              {" "}
              {fillerCount}
            </p>

            <p>
              ⚠ Maintain consistency
            </p>

            <p>
              ⚠ Add more examples
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default PerformancePanel;