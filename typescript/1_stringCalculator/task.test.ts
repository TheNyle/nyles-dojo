import { stringCalculator } from "./task";

describe("String calculator function", () => {
  it("an empty string returns `0`", () => {
    expect(stringCalculator('')).toBe(0);
  });

  it("returns the input string as a number", () => {
    expect(stringCalculator('3')).toBe(3);
  });

  it("return a sum of comma separated numbers", () => {
    expect(stringCalculator('3,2,1')).toBe(6);
  });

  it("handles newline delimiters", () => {
    console.log(`3\n2,1`);
    expect(stringCalculator(`3\n2,1`)).toBe(6);
  });
});
