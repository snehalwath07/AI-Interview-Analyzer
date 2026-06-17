import { useState } from "react";
import mammoth from "mammoth";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  pdfWorker;

const Resume = () => {
  const [matchScore, setMatchScore] = useState(0);

  const [missingSkills, setMissingSkills] =
    useState([]);

  const [recommendedSkills, setRecommendedSkills] =
    useState([]);

  const [jobDescription, setJobDescription] =
    useState("");

  const [resumeText, setResumeText] =
    useState("");

  const handleResumeUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    try {
      if (
        file.name.toLowerCase().endsWith(
          ".docx"
        )
      ) {
        const arrayBuffer =
          await file.arrayBuffer();

        const result =
          await mammoth.extractRawText({
            arrayBuffer,
          });

        setResumeText(result.value);

        alert(
          "DOCX Resume Loaded Successfully!"
        );
      } else if (
        file.name.toLowerCase().endsWith(
          ".pdf"
        )
      ) {
        const arrayBuffer =
          await file.arrayBuffer();

        const pdf =
          await pdfjsLib.getDocument({
            data: arrayBuffer,
          }).promise;

        let text = "";

        for (
          let i = 1;
          i <= pdf.numPages;
          i++
        ) {
          const page =
            await pdf.getPage(i);

          const content =
            await page.getTextContent();

          text +=
            content.items
              .map(
                (item) => item.str
              )
              .join(" ") + " ";
        }

        setResumeText(text);

        alert(
          "PDF Resume Loaded Successfully!"
        );
      } else {
        alert(
          "Please upload PDF or DOCX file."
        );
      }
    } catch (error) {
      console.error(error);

      alert(
        "Unable to read resume."
      );
    }
  };

  const analyzeMatch = () => {
  const jd =
    jobDescription.toLowerCase();

  const resume =
    resumeText.toLowerCase();

  const commonSkills = [
    "python",
    "java",
    "javascript",
    "react",
    "node",
    "sql",
    "mongodb",
    "aws",
    "docker",
    "machine learning",
    "data analysis",
    "power bi",
    "excel",
  ];

  const jdSkills =
    commonSkills.filter(
      (skill) =>
        jd.includes(skill)
    );

  const matchedSkills =
    jdSkills.filter(
      (skill) =>
        resume.includes(skill)
    );

  const missingSkills =
    jdSkills.filter(
      (skill) =>
        !resume.includes(skill)
    );

  const score =
    jdSkills.length === 0
      ? 0
      : Math.round(
          (
            matchedSkills.length /
            jdSkills.length
          ) * 100
        );

  setMatchScore(score);

  setRecommendedSkills(
    matchedSkills
  );

  setMissingSkills(
    missingSkills
  );
};

  return (
    <div
      className="card"
      style={{
        padding: "30px",
      }}
    >
      

     <div
  style={{
    marginBottom: "30px",
  }}
>
  <h1
    style={{
      fontSize: "38px",
      fontWeight: "700",
      marginBottom: "8px",
    }}
  >
    Resume Match
  </h1>

  <p
    style={{
      color: "#777",
    }}
  >
    Match your resume with the
    job description and get
    AI-powered insights
  </p>
</div>
<div
  style={{
    marginBottom: "20px",
  }}
>
  <input
    type="file"
    accept=".pdf,.docx"
    onChange={handleResumeUpload}
  />
</div>
      <p>
        Resume Text Length:
        {resumeText.length}
      </p>

      <div
        style={{
          marginTop: "20px",
        }}
      >
        <textarea
          rows="6"
          value={jobDescription}
          onChange={(e) =>
            setJobDescription(
              e.target.value
            )
          }
          placeholder="Paste Job Description..."
          style={{
            width: "100%",
            padding: "10px",
          }}
        />
      </div>

      <button
        onClick={analyzeMatch}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
        }}
      >
        Analyze Match
        
      </button>

     <div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginTop: "30px",
  }}
>
  <div
    style={{
      background: "#fff",
      padding: "25px",
      borderRadius: "16px",
      border: "1px solid #eee",
    }}
  >
    <h2>Match Score</h2>

    <div
      style={{
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        border: "10px solid #22c55e",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "28px",
        fontWeight: "bold",
        color: "#22c55e",
        marginTop: "20px",
      }}
    >
      {matchScore}%
    </div>
  </div>

  <div
    style={{
      background: "#fff",
      padding: "25px",
      borderRadius: "16px",
      border: "1px solid #eee",
    }}
  >
    <h3
      style={{
        color: "#ef4444",
      }}
    >
      Missing Skills
    </h3>

    <ul>
      {missingSkills.map(
        (skill, index) => (
          <li key={index}>
            {skill}
          </li>
        )
      )}
    </ul>

    <h3
      style={{
        color: "#22c55e",
        marginTop: "20px",
      }}
    >
      Recommended Skills
    </h3>

    <ul>
      {recommendedSkills.map(
        (skill, index) => (
          <li key={index}>
            {skill}
          </li>
        )
      )}
    </ul>
  </div>
</div>

<div
  style={{
    marginTop: "20px",
    background: "#eef2ff",
    padding: "18px",
    borderRadius: "14px",
  }}
>
  <h4>Improve Your Match</h4>

  <p>
    Add missing skills to your
    resume to increase your
    match score.
  </p>
</div>

</div>

  );
};

export default Resume;