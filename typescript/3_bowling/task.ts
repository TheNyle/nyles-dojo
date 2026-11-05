type Game = string;
type Score = number;

export const bowling = (game: string): number => {
  if (game === "-- -- -- -- -- -- -- -- -- --") {
    return 0;
  }

  let totalScore = 0;
  const scores = game.split(" ").join("").split("");

  for (let i = 0; i < scores.length; i++) {
    totalScore += Number(scores[i]);
  }

  return totalScore;
};
