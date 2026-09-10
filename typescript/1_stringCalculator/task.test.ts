import { stringCalculator } from "./task";

describe("String calculator function", () => {
  it("an empty string returns `0`", () => {
    expect(stringCalculator('')).toBe(0);
  });

  it("returns the input string as a number", () => {
    expect(stringCalculator('3')).toBe(3);
  });
});
