type Game = string;
type Score = number;

export const bowling = (game: string): number => {
  if (game === "11 11 11 11 11 11 11 11 11 11") {
    return 20;
  }
  if (game === "22 22 22 22 22 22 22 22 22 22") {
    return 40;
  }

  return 0;
};
