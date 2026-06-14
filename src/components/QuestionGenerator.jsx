import { useState } from "react";
console.log("QuestionGenerator Loaded");
const questionBank = {
  HR: [
    "Tell me about yourself.",
    "Why should we hire you?",
    "What are your strengths?",
    "What are your weaknesses?",
    "Where do you see yourself in 5 years?",
  ],

  Frontend: [
    "What is React?",
    "Explain Virtual DOM.",
    "What are React Hooks?",
    "Difference between var, let and const?",
    "What is state management?",
  ],

  Backend: [
    "What is REST API?",
    "What is JWT?",
    "Difference between SQL and NoSQL?",
    "What is Middleware?",
    "Explain Authentication.",
  ],

  "AI Engineer": [
    "What is Machine Learning?",
    "Explain Overfitting.",
    "Difference between CNN and RNN?",
    "What is Transfer Learning?",
    "Explain Gradient Descent.",
  ],

  "Data Analyst": [
    "What is Data Cleaning?",
    "Explain Data Visualization.",
    "What is SQL used for?",
    "Difference between mean and median?",
    "What is Power BI?",
  ],
};

const QuestionGenerator = () => {
  const [role, setRole] = useState("HR");
  const [questions, setQuestions] = useState([]);

  const generateQuestions = () => {
    setQuestions(questionBank[role]);
  };

  return (
    <div
      className="card"
      style={{ padding: "30px" }}
    >
      <h1>AI Question Generator</h1>

      <div
        style={{
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <select
          value={role}
          onChange={(e) =>
            setRole(e.target.value)
          }
        >
          <option>HR</option>
          <option>Frontend</option>
          <option>Backend</option>
          <option>AI Engineer</option>
          <option>Data Analyst</option>
        </select>

        <button
          onClick={generateQuestions}
          style={{
            marginLeft: "10px",
            padding: "8px 15px",
          }}
        >
          Generate Questions
        </button>
      </div>

      {questions.length > 0 && (
        <div>
          <h3>{role} Questions</h3>

          {questions.map(
            (question, index) => (
              <p key={index}>
                {index + 1}. {question}
              </p>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionGenerator;