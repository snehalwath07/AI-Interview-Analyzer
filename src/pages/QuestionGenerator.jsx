import { useState } from "react";
import { useNavigate } from "react-router-dom";

const questionBank = {
  HR: [
    "Tell me about yourself.",
    "Why should we hire you?",
    "What are your strengths?",
    "What are your weaknesses?",
    "Where do you see yourself in 5 years?",
    "Describe a challenging situation you faced.",
    "How do you handle pressure at work?",
    "Why do you want to work for our company?",
    "Tell me about a failure and what you learned.",
    "What motivates you every day?",
  ],

  Frontend: [
    "What is React?",
    "Explain Virtual DOM.",
    "What are React Hooks?",
    "Difference between var, let and const?",
    "What is state management?",
    "What is JSX?",
    "Explain useEffect.",
    "What is Redux?",
    "Difference between props and state?",
    "What is React Router?",
  ],

  Backend: [
    "What is REST API?",
    "What is JWT?",
    "Difference between SQL and NoSQL?",
    "What is Middleware?",
    "Explain Authentication.",
    "What is Authorization?",
    "What is Express.js?",
    "Explain CRUD operations.",
    "What is API rate limiting?",
    "What is CORS?",
  ],

  "AI Engineer": [
    "What is Machine Learning?",
    "Explain Overfitting.",
    "Difference between CNN and RNN?",
    "What is Transfer Learning?",
    "Explain Gradient Descent.",
    "What is Deep Learning?",
    "What is Reinforcement Learning?",
    "What is Feature Engineering?",
    "What is a Neural Network?",
    "Explain Precision and Recall.",
  ],

  "Data Analyst": [
    "What is Data Cleaning?",
    "Explain Data Visualization.",
    "What is SQL used for?",
    "Difference between mean and median?",
    "What is Power BI?",
    "What is Excel Pivot Table?",
    "What is Data Wrangling?",
    "What is ETL?",
    "What is a KPI?",
    "Explain Dashboard Design.",
  ],

  "Data Science": [
    "What is supervised learning?",
    "What is unsupervised learning?",
    "Explain feature engineering.",
    "What is cross validation?",
    "Difference between classification and regression?",
    "What is PCA?",
    "What is K-Means?",
    "What is clustering?",
    "What is overfitting?",
    "What is underfitting?",
  ],

  DBMS: [
    "What is normalization?",
    "What is a primary key?",
    "What is a foreign key?",
    "Difference between DELETE and TRUNCATE?",
    "What are joins?",
    "What is indexing?",
    "What is ACID?",
    "What is a view?",
    "What is transaction management?",
    "What is a stored procedure?",
  ],

  OS: [
    "What is a process?",
    "What is a thread?",
    "Difference between process and thread?",
    "Explain deadlock.",
    "What is virtual memory?",
    "What is paging?",
    "What is scheduling?",
    "What is context switching?",
    "What is semaphore?",
    "Explain memory management.",
  ],

  CN: [
    "What is TCP/IP?",
    "What is DNS?",
    "Difference between HTTP and HTTPS?",
    "Explain OSI Model.",
    "What is packet switching?",
    "What is a router?",
    "What is a switch?",
    "What is a firewall?",
    "What is latency?",
    "What is bandwidth?",
  ],

  Aptitude: [
    "Find the next number: 2, 4, 8, 16, ?",
    "A train travels 60 km in 45 minutes. What is its speed?",
    "Probability of getting two heads when tossing two coins?",
    "Find simple interest on ₹5000 at 10% for 2 years.",
    "Solve a percentage increase problem.",
    "What is the average of 10, 20, 30, 40, 50?",
    "Solve a ratio problem involving 2:3.",
    "A shopkeeper gives a 10% discount on ₹1000. Find selling price.",
    "If 5 workers complete a task in 10 days, how many are needed in 5 days?",
    "A man walks 5 km north and 3 km east. How far is he from the start?",
  ],
};

const QuestionGenerator = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("HR");
  const [questions, setQuestions] = useState([]);

  const generateQuestions = () => {
    const shuffled = [...questionBank[role]].sort(
      () => Math.random() - 0.5
    );

    setQuestions(shuffled.slice(0, 10));
  };

  return (
    <div className="card" style={{ padding: "30px" }}>
      <button
        onClick={() => navigate("/")}
        style={{
          marginBottom: "20px",
          padding: "10px 16px",
          borderRadius: "8px",
          border: "none",
          background: "#6d4aff",
          color: "white",
          cursor: "pointer",
          fontWeight: "600",
        }}
      >
        ← Back to Dashboard
      </button>

      <h1>AI Question Generator</h1>

      <p
        style={{
          color: "#666",
          marginBottom: "20px",
        }}
      >
        Generate interview questions for different domains.
      </p>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        <select
          value={role}
          onChange={(e) =>
            setRole(e.target.value)
          }
        >
          {Object.keys(questionBank).map(
            (item) => (
              <option key={item}>
                {item}
              </option>
            )
          )}
        </select>

        <button
          onClick={generateQuestions}
        >
          Generate Questions
        </button>
      </div>

      {questions.length > 0 && (
        <div>
          <h2>
            {role} Interview Questions
          </h2>

          {questions.map(
            (question, index) => (
              <div
                key={index}
                className="question-card"
                style={{
                  marginBottom: "12px",
                  padding: "16px",
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                }}
              >
                <strong>
                  Question {index + 1}
                </strong>

                <p
                  style={{
                    marginTop: "8px",
                  }}
                >
                  {question}
                </p>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionGenerator;