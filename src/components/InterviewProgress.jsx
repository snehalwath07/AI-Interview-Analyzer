import { useInterview } from "../context/InterviewContext";

const InterviewProgress = () => {

  const {
    currentQuestion,
    questions,
  } = useInterview();

  const progress = Math.round(
    ((currentQuestion + 1) /
      questions.length) *
      100
  );

  return (
    <div className="progress-card">

      <h3>Interview Progress</h3>

      <div className="progress-info">

        <span>
          {currentQuestion + 1}
          {" / "}
          {questions.length}
          {" Questions"}
        </span>

        <span>
          {progress}%
        </span>

      </div>

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
          }}
        ></div>

      </div>

    </div>
  );
};

export default InterviewProgress;