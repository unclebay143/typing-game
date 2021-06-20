export const smileyMode = (wpm, accuracy) => {
  console.log(wpm > 20);
  if (wpm === 0) return "👋";
  if (wpm > 100) return "💪";
  if (wpm > 80) return "😜 Boss";
  if (wpm > 50) return "🤗";
  if (wpm > 20) return "😲";
  if (wpm > 10) return "🤪";
  if (wpm < 10) return "😭";
};
