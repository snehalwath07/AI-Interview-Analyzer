import { useInterview } from "../context/InterviewContext";

const MetricsGrid = () => {

  const {
    eyeContact,
    confidenceScore,
    speechRate,
    fillerCount,
    transcript,
  } = useInterview();

  const speechClarity = Math.max(
    0,
    Math.min(
      100,
      confidenceScore - fillerCount
    )
  );

  const responseQuality = Math.min(
    100,
    Math.round(
      transcript.split(" ").length * 2
    )
  );

  const metrics = [
    {
      title: "Eye Contact",
      value: `${eyeContact}%`,
      color: "#22c55e",
    },

    {
      title: "Confidence",
      value: `${confidenceScore}%`,
      color: "#3b82f6",
    },

    {
      title: "Speech Rate",
      value: `${speechRate} WPM`,
      color: "#8b5cf6",
    },

    {
      title: "Filler Words",
      value: fillerCount,
      color: "#ef4444",
    },

    {
      title: "Speech Clarity",
      value: `${speechClarity}%`,
      color: "#06b6d4",
    },

    {
      title: "Response Quality",
      value: `${responseQuality}%`,
      color: "#f59e0b",
    },
  ];

  return (
    <div className="metrics-grid">

      {metrics.map(
        (metric, index) => (

        <div
          className="metric-box"
          key={index}
        >

          <div
            className="metric-indicator"
            style={{
              background:
                metric.color,
            }}
          ></div>

          <h4>
            {metric.title}
          </h4>

          <h2>
            {metric.value}
          </h2>

        </div>

      ))}

    </div>
  );
};

export default MetricsGrid;