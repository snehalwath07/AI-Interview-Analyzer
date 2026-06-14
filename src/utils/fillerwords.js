const fillerWords = [
  "um",
  "uh",
  "like",
  "actually",
  "basically",
  "you know",
];

export const countFillers = (text) => {
  const lowerText = text.toLowerCase();

  let count = 0;

  fillerWords.forEach((word) => {
    const matches =
      lowerText.match(
        new RegExp(word, "g")
      );

    if (matches) {
      count += matches.length;
    }
  });

  return count;
};