export const calculateConfidence = (
  eyeContact,
  fillerCount
) => {

  let confidence = 100;

  confidence -= fillerCount * 2;

  confidence -=
    (100 - eyeContact) * 0.5;

  confidence = Math.max(
    0,
    Math.min(100, confidence)
  );

  return Math.round(confidence);
};