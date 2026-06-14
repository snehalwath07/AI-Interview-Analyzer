export const cleanTranscript = (
  text
) => {
  return text
    .replace(/\s+/g, " ")
    .replace(/\n/g, " ")
    .trim();
};