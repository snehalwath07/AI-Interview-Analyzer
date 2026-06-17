const fillerwords = [
  "um",
  "umm",
  "uh",
  "uhh",
  "hmm",
  "hmmm",
  "erm",
  "like",
  "actually",
  "basically",
  "you know",
  "sort of",
  "kind of",
];

export const countFillers = (text) => {
  const lowerText = text.toLowerCase();

  let count = 0;

  fillerwords.forEach((word) => {
    const regex = new RegExp(
      `\\b${word}\\b`,
      "gi"
    );

    const matches =
      lowerText.match(regex);

    if (matches) {
      count += matches.length;
    }
  });

  return count;
};