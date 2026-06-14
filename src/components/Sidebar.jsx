import { useInterview } from "../context/InterviewContext";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { currentQuestion, questions } = useInterview();

  const progressPercentage = Math.round(
    ((currentQuestion + 1) / questions.length) * 100
  );

  return (
    <div className="sidebar">

      <div className="sidebar-header">

        <div className="logo-box">
          🎥
        </div>

        <div>
          <h2>AI Interview</h2>
          <p>Analyzer</p>
        </div>

      </div>

      <div className="sidebar-menu">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "menu-item active"
              : "menu-item"
          }
        >
          <span>🏠</span>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/questions"
          className={({ isActive }) =>
            isActive
              ? "menu-item active"
              : "menu-item"
          }
        >
          <span>🤖</span>
          <span>AI Questions</span>
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            isActive
              ? "menu-item active"
              : "menu-item"
          }
        >
          <span>📊</span>
          <span>Analytics</span>
        </NavLink>

        <NavLink
          to="/reports"
          className={({ isActive }) =>
            isActive
              ? "menu-item active"
              : "menu-item"
          }
        >
          <span>📄</span>
          <span>Reports</span>
        </NavLink>

        <NavLink
          to="/resume"
          className={({ isActive }) =>
            isActive
              ? "menu-item active"
              : "menu-item"
          }
        >
          <span>📋</span>
          <span>Resume Match</span>
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) =>
            isActive
              ? "menu-item active"
              : "menu-item"
          }
        >
          <span>🕘</span>
          <span>History</span>
        </NavLink>

        <NavLink
          to="/practice"
          className={({ isActive }) =>
            isActive
              ? "menu-item active"
              : "menu-item"
          }
        >
          <span>🎮</span>
          <span>Practice Zone</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive
              ? "menu-item active"
              : "menu-item"
          }
        >
          <span>⚙️</span>
          <span>Settings</span>
        </NavLink>

      </div>

      <div className="progress-card">

        <h4>Interview Progress</h4>

        <div className="progress-info">
          <span>
            {currentQuestion + 1} / {questions.length} Questions
          </span>

          <span>{progressPercentage}%</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${progressPercentage}%`,
            }}
          ></div>
        </div>

        <ul className="question-list">

          <li>✅ Introduction</li>

          <li>✅ Tell me about yourself</li>

          <li>✅ Why do you want this role?</li>

          <li>✅ Describe a challenge</li>

          <li className="active-question">
            🔵 Current Question
          </li>

        </ul>

      </div>

    <div className="tips-card">

  <div className="tips-header">
    🤖 AI Live Tips
  </div>

  <div className="tips-content">

    <div className="robot-icon">
      🤖
    </div>

    <div>

      <p>
        Maintain eye contact and
        speak confidently.
      </p>

      <small>
        Keep answers concise and
        avoid filler words.
      </small>

    </div>

  </div>

</div>

    </div>
  );
};

export default Sidebar;