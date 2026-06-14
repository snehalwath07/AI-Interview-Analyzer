export const calculateAnswerScore = ({
  technical = 0,
  communication = 0,
  depth = 0,
}) => {
  return Math.round(
    (technical +
      communication +
      depth) / 3
  );
};