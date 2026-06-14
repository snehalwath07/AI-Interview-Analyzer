export const generateReport = ({
  confidenceScore,
  eyeContact,
  speechRate,
  fillers,
  emotion,
}) => {
  return {
    confidenceScore,
    eyeContact,
    speechRate,
    fillers,
    emotion,

    generatedAt:
      new Date().toLocaleString(),

    recommendation:
      confidenceScore >= 80
        ? "Recommended"
        : "Needs Improvement",
  };
};