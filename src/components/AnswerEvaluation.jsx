import { useInterview } from "../context/InterviewContext";

const AnswerEvaluation = () => {

  const {
    eyeContact,
    confidenceScore,
    speechRate,
    fillerCount,
    transcript,
  } = useInterview();

  const communicationScore =
    Math.max(
      0,
      Math.round(
        confidenceScore -
        fillerCount * 2
      )
    );

  const depthScore =
    Math.min(
      100,
      Math.round(
        transcript.split(" ").length * 2
      )
    );

  const technicalScore =
    transcript.length > 20
      ? 70
      : 0;

  return (
    <div className="card">

      <h3>Answer Evaluation</h3>

      <div className="evaluation-item">
        <span>
          Technical Accuracy
        </span>

        <strong>
          {technicalScore}%
        </strong>
      </div>

      <div className="evaluation-item">
        <span>
          Communication
        </span>

        <strong>
          {communicationScore}%
        </strong>
      </div>

      <div className="evaluation-item">
        <span>
          Depth of Answer
        </span>

        <strong>
          {depthScore}%
        </strong>
      </div>

      <div className="evaluation-item">
        <span>
          Confidence
        </span>

        <strong>
          {confidenceScore}%
        </strong>
      </div>

    </div>
  );
};

export default AnswerEvaluation;