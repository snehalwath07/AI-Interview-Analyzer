export const calculateInterviewScore = ({
  eyeContact,
  speechRate,
  fillerCount,
  answerScore,
}) => {

  const fillerScore =
    Math.max(
      0,
      100 - fillerCount * 5
    );

  return Math.round(
    (
      eyeContact * 0.30 +
      speechRate * 0.20 +
      fillerScore * 0.20 +
      answerScore * 0.30
    )
  );
};