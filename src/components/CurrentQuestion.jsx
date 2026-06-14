import { useInterview } from "../context/InterviewContext";

const CurrentQuestion = () => {
  const {
    currentQuestion,
    setCurrentQuestion,
    questions,
    interviewStarted,
  } = useInterview();

  const nextQuestion = () => {
    if (
      currentQuestion <
      questions.length - 1
    ) {
      setCurrentQuestion(
        currentQuestion + 1
      );
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(
        currentQuestion - 1
      );
    }
  };

  return (
    <div className="card current-question-card">

      <div className="question-top">

        <h3>Current Question</h3>

        <span>
          {currentQuestion + 1}/
          {questions.length}
        </span>

      </div>

      <h2>
        {questions[currentQuestion]}
      </h2>

      <div className="question-buttons">

        <button
          onClick={prevQuestion}
          disabled={false}
        >
          Previous
        </button>

        <button
          onClick={nextQuestion}
          disabled={false}
        >
          Next
        </button>

      </div>

    </div>
  );
};

export default CurrentQuestion;