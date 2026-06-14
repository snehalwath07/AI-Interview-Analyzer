const PracticeZone = () => {
  return (
    <div
      className="card"
      style={{ padding: "30px" }}
    >
      <h1>🎮 Practice Zone</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(2,1fr)",
          gap: "20px",
          marginTop: "25px",
        }}
      >

        <div className="metric-box">
          <h2>🎤</h2>
          <h3>Filler Word Challenge</h3>
          <p>
            Speak for 30 seconds
            without using filler words.
          </p>
        </div>

        <div className="metric-box">
          <h2>⚡</h2>
          <h3>Rapid Fire Interview</h3>
          <p>
            Answer interview questions
            under time pressure.
          </p>
        </div>

        <div className="metric-box">
          <h2>🧠</h2>
          <h3>Aptitude Challenge</h3>
          <p>
            Practice placement aptitude
            questions.
          </p>
        </div>

        <div className="metric-box">
          <h2>🎯</h2>
          <h3>Confidence Booster</h3>
          <p>
            Improve speaking confidence
            and fluency.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PracticeZone;