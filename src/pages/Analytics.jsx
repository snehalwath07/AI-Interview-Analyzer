import { useInterview } from "../context/InterviewContext";

const Analytics = () => {
  const {
    eyeContact,
    confidenceScore,
    speechRate,
    fillerCount,
    answerScore,
  } = useInterview();

  return (
    <div
      className="card"
      style={{ padding: "30px" }}
    >
      <h1>Interview Analytics</h1>

      <div style={{ marginTop: "25px" }}>

        <h3>👁 Eye Contact</h3>
        <p>{eyeContact}%</p>

        <h3>🎯 Confidence</h3>
        <p>{confidenceScore}%</p>

        <h3>🗣 Speech Rate</h3>
        <p>{speechRate} WPM</p>

        <h3>⚠ Filler Words</h3>
        <p>{fillerCount}</p>

        <h3>⭐ Answer Score</h3>
        <p>{answerScore}/100</p>

      </div>
    </div>
  );
};

export default Analytics;