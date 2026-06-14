export const calculateConfidenceScore = ({
  eyeContact = 0,
  speechRate = 0,
  fillerScore = 0,
  answerScore = 0,
}) => {
  return Math.round(
    eyeContact * 0.35 +
    speechRate * 0.20 +
    fillerScore * 0.20 +
    answerScore * 0.25
  );
};