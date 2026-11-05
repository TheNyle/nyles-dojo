import { bowling } from "./task";

describe("bowling", () => {
  test("returns 0 when no pins are knocked down for a whole game", () => {
    expect(bowling("-- -- -- -- -- -- -- -- -- -- ")).toBe(0);
  });

  test("returns the total of a game with no misses, spares or strikes", () => {
    expect(bowling("11 11 11 11 11 11 11 11 11 11 ")).toBe(20);
  });
});
