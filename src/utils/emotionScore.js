export const getEmotionScore = (
  emotion
) => {
  const scores = {
    happy: 90,
    neutral: 80,
    confident: 95,
    nervous: 60,
    sad: 40,
    angry: 30,
  };

  return scores[
    emotion?.toLowerCase()
  ] || 70;
};