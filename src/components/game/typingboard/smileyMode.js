export const smileyMode = (wpm, accuracy) => {
  if (wpm === 0) return "ð";
  if (wpm > 100) return "ðŠ";
  if (wpm > 80) return "ð Boss";
  if (wpm > 50) return "ðĪ";
  if (wpm > 20) return "ðē";
  if (wpm > 10) return "ðĪŠ";
  if (wpm < 10) return "ð­";
};
