import { useInterview } from "../context/InterviewContext";
import DownloadReport from "../components/DownloadReport";

const Reports = () => {
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

  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <h1>Interview Report</h1>

      <div className="card">

        <h2>
          Overall Score:
          {overallScore}/100
        </h2>

        <p>
          👀 Eye Contact:
          {eyeContact}%
        </p>

        <p>
          🎤 Speech Rate:
          {speechRate} WPM
        </p>

        <p>
          📝 Filler Words:
          {fillerCount}
        </p>

        <p>
          📚 Answer Score:
          {answerScore}%
        </p>

        <h3>
          Recommendation:
        </h3>

        <p>
          {overallScore >= 80
            ? "✅ Recommended"
            : "⚠ Needs Improvement"}
        </p>

        <DownloadReport />

      </div>
    </div>
  );
};

export default Reports;