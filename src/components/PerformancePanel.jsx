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
  eyeContact * 0.45 +
  speechRate * 0.25 +
  fillerScore * 0.30
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

  Eye contact was {eyeContact}%,
  speech rate was {speechRate} WPM,
  and {fillerCount} filler words
  were detected during the session.

</p>

        <div className="strengths-section">

          <div>
            <h4>Top Strengths</h4>

            <p>✅ Eye Contact: {eyeContact}%</p>
            <p>✅ Speech Rate: {speechRate} WPM</p>
          <p>✅ Filler Score: {fillerScore}%</p>
          </div>

          <div>

  <h4>Areas to Improve</h4>

  {fillerCount > 5 && (
    <p>
      ⚠ Reduce filler words
    </p>
  )}

  {speechRate < 90 && (
    <p>
      ⚠ Speak a little faster
    </p>
  )}

  {speechRate > 180 && (
    <p>
      ⚠ Slow down your speech
    </p>
  )}

  {eyeContact < 70 && (
    <p>
      ⚠ Maintain better eye contact
    </p>
  )}

  {fillerCount <= 5 &&
   speechRate >= 90 &&
   speechRate <= 180 &&
   eyeContact >= 70 && (
    <p>
      ✅ No major improvements needed
    </p>
  )}

</div>

        </div>

      </div>

    </div>
  );
};

export default PerformancePanel;