export const calculateEyeContactScore = (
  eyeFrames,
  totalFrames
) => {
  if (!totalFrames) return 0;

  return Math.round(
    (eyeFrames / totalFrames) * 100
  );
};