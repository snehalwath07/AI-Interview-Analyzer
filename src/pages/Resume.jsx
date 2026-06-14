import { useState } from "react";

const Resume = () => {
  const [matchScore] = useState(85);

  return (
    <div className="card" style={{ padding: "30px" }}>

      <h1>Resume Match</h1>

      <div style={{ marginTop: "20px" }}>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
        />

      </div>

      <div style={{ marginTop: "20px" }}>

        <textarea
          rows="6"
          placeholder="Paste Job Description..."
          style={{
            width: "100%",
            padding: "10px",
          }}
        />

      </div>

      <button
        style={{
          marginTop: "15px",
          padding: "10px 20px",
        }}
      >
        Analyze Match
      </button>

      <div style={{ marginTop: "30px" }}>

        <h2>
          Match Score: {matchScore}%
        </h2>

        <h3>Missing Skills</h3>

        <ul>
          <li>Node.js</li>
          <li>Docker</li>
          <li>AWS</li>
        </ul>

        <h3>Recommended Skills</h3>

        <ul>
          <li>System Design</li>
          <li>CI/CD</li>
          <li>Cloud Computing</li>
        </ul>

      </div>

    </div>
  );
};

export default Resume;