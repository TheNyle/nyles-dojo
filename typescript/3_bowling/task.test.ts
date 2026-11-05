import { bowling } from "./task";

describe("bowling", () => {
  test("returns 0 when no pins are knocked down for a whole game", () => {
    expect(bowling("-- -- -- -- -- -- -- -- -- -- ")).toBe(0);
  });
});
