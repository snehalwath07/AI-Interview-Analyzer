export const calculateWPM = (
  transcript,
  seconds
) => {
  if (!transcript || seconds === 0) {
    return 0;
  }

  const words =
    transcript.trim().split(/\s+/).length;

  const minutes = seconds / 60;

  return Math.round(words / minutes);
};