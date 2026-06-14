const MetricsGrid = () => {
  const metrics = [
    {
      title: "Eye Contact",
      value: "87%",
      color: "#22c55e",
    },
    {
      title: "Confidence",
      value: "81%",
      color: "#3b82f6",
    },
    {
      title: "Speech Rate",
      value: "145 WPM",
      color: "#8b5cf6",
    },
    {
      title: "Filler Words",
      value: "6",
      color: "#ef4444",
    },
    {
      title: "Speech Clarity",
      value: "89%",
      color: "#06b6d4",
    },
    {
      title: "Response Quality",
      value: "85%",
      color: "#f59e0b",
    },
  ];

  return (
    <div className="metrics-grid">
      {metrics.map((metric, index) => (
        <div className="metric-box" key={index}>
          <div
            className="metric-indicator"
            style={{ background: metric.color }}
          ></div>

          <h4>{metric.title}</h4>

          <h2>{metric.value}</h2>
        </div>
      ))}
    </div>
  );
};

export default MetricsGrid;