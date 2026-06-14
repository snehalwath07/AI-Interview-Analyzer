import { useInterview } from "../context/InterviewContext";

const AIOverlay = () => {
  const {
    eyeContact,
    emotion,
    confidenceScore,
  } = useInterview();

  return (
    <div className="ai-overlay">
      <div>👁 Eye Contact: {eyeContact}%</div>
      <div>😊 Emotion: {emotion}</div>
      <div>🎯 Confidence: {confidenceScore}%</div>
    </div>
  );
};

export default AIOverlay;