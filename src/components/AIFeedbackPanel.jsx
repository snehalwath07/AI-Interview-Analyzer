import { useInterview } from "../context/InterviewContext";

const AIFeedbackPanel = () => {

  const {
    eyeContact,
    confidenceScore,
    speechRate,
    fillerCount,
    transcript,
  } = useInterview();

  const hasInterviewData =
    transcript.length > 20;

  return (
    <div className="card">

      <h3>AI Feedback</h3>

      {!hasInterviewData ? (

        <p>
          Start answering questions to
          generate personalized feedback.
        </p>

      ) : (

        <>
          {eyeContact >= 80 && (
            <p>
              ✅ Strong eye contact maintained
              throughout the interview.
            </p>
          )}

          {eyeContact < 80 && (
            <p>
              ⚠ Try maintaining better eye
              contact with the camera.
            </p>
          )}

          {confidenceScore >= 75 && (
            <p>
              ✅ Confidence level appeared
              strong and stable.
            </p>
          )}

          {confidenceScore < 75 && (
            <p>
              ⚠ Improve confidence by speaking
              more clearly and steadily.
            </p>
          )}

          {fillerCount > 5 && (
            <p>
              ⚠ Reduce filler words such as
              "um", "uh", and "like".
            </p>
          )}

          {fillerCount <= 5 && (
            <p>
              ✅ Minimal filler words detected.
            </p>
          )}

          {speechRate < 90 && (
            <p>
              ⚠ Speak slightly faster to
              improve engagement.
            </p>
          )}

          {speechRate > 180 && (
            <p>
              ⚠ Slow down your speaking pace
              for better clarity.
            </p>
          )}

          {speechRate >= 90 &&
           speechRate <= 180 && (
            <p>
              ✅ Speech pace was appropriate.
            </p>
          )}

        </>
      )}

    </div>
  );
};

export default AIFeedbackPanel;