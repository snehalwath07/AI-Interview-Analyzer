import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getInterviewHistory } from "../utils/storage";

const History = () => {
  const navigate = useNavigate();

  const [history, setHistory] =
    useState([]);

  useEffect(() => {
    setHistory(
      getInterviewHistory()
    );
  }, []);

  const clearHistory = () => {
    localStorage.removeItem(
      "interviewHistory"
    );

    setHistory([]);
  };

  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <button
        onClick={() =>
          navigate("/")
        }
        style={{
          padding: "10px 16px",
          border: "none",
          borderRadius: "8px",
          background: "#6d4aff",
          color: "white",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        ← Back to Dashboard
      </button>

      <h1>
        Interview History
      </h1>

      <p
        style={{
          color: "#666",
          marginBottom: "20px",
        }}
      >
        View and manage your
        previous interviews
      </p>

      <button
        onClick={clearHistory}
        style={{
          background: "#ef4444",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
          marginBottom: "25px",
        }}
      >
        🗑 Delete History
      </button>

      <div
        className="card"
        style={{
          padding: "25px",
        }}
      >
        {history.length === 0 ? (
          <h3>
            No Interview History
            Found
          </h3>
        ) : (
          <>
            <h3>
              Total Interviews:
              {history.length}
            </h3>

            <p>
              History available.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default History;