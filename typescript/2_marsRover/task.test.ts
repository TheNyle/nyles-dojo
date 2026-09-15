import { Rover } from "./task";

describe("Mars Rover", () => {
  test("returns the starting position and direction when no instructions are provided", () => {
    expect(
      Rover({ startingPosition: { x: 1, y: 0 }, startingDirection: "N" }),
    ).toStrictEqual({ position: { x: 1, y: 0 }, direction: "N" });
  });

  test("moves forward when instruction is M", () => {
    expect(
      Rover({
        startingPosition: { x: 0, y: 0 },
        startingDirection: "N",
        instructions: "M",
      }),
    ).toStrictEqual({ position: { x: 0, y: 1 }, direction: "N" });
  });

  test.each(["R", "L"])("changes direction", () => {
    expect(
      Rover({
        startingPosition: { x: 0, y: 0 },
        startingDirection: "N",
        instructions: "R",
      }),
    ).toStrictEqual({ position: { x: 0, y: 0 }, direction: "E" });
  });

  // test("changes direction to E and moves forward", () => {
  //   expect(
  //     Rover({
  //       startingPosition: { x: 0, y: 0 },
  //       startingDirection: "N",
  //       instructions: "RM",
  //     }),
  //   ).toStrictEqual({ position: { x: 1, y: 0 }, direction: "E" });
  // });
});
