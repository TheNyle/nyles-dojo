import { Direction, Position, Rover } from "./task";

type TestInput = {
  instructions: string;
  startingDirection: Direction;
  result: Direction;
};

describe("Mars Rover", () => {
  test("returns the starting position and direction when no instructions are provided", () => {
    expect(
      Rover({ startingPosition: { x: 1, y: 0 }, startingDirection: "N" }),
    ).toStrictEqual({ position: { x: 1, y: 0 }, direction: "N" });
  });

  // test.each<Omit<TestInput, "result"> & { result: Position }>([
  //   { instructions: "M", startingDirection: "N", result: { x: 0, y: 1 } },
  //   { instructions: "M", startingDirection: "E", result: { x: 1, y: 0 } },
  //   { instructions: "M", startingDirection: "S", result: { x: 0, y: -1 } },
  //   { instructions: "M", startingDirection: "W", result: { x: -1, y: 0 } },
  // ])(
  //   "startingDirection $startingDirection and instructions $instructions changes direction to $result",
  //   ({ instructions, startingDirection, result }) => {
  //     expect(
  //       Rover({
  //         startingPosition: { x: 0, y: 0 },
  //         startingDirection,
  //         instructions,
  //       }),
  //     ).toStrictEqual({ position: result, direction: startingDirection });
  //   },
  // );

  test("moves forward when instruction is M", () => {
    expect(
      Rover({
        startingPosition: { x: 0, y: 0 },
        startingDirection: "N",
        instructions: "M",
      }),
    ).toStrictEqual({ position: { x: 0, y: 1 }, direction: "N" });
  });

  test("moves forward twice when instruction is M M", () => {
    expect(
      Rover({
        startingPosition: { x: 0, y: 0 },
        startingDirection: "N",
        instructions: "M M",
      }),
    ).toStrictEqual({ position: { x: 0, y: 2 }, direction: "N" });
  });

  test.each<TestInput>([
    { instructions: "R", startingDirection: "N", result: "E" },
    { instructions: "R", startingDirection: "E", result: "S" },
    { instructions: "R", startingDirection: "S", result: "W" },
    { instructions: "R", startingDirection: "W", result: "N" },
    { instructions: "L", startingDirection: "N", result: "W" },
    { instructions: "L", startingDirection: "W", result: "S" },
    { instructions: "L", startingDirection: "S", result: "E" },
    { instructions: "L", startingDirection: "E", result: "N" },
  ])(
    "startingDirection $startingDirection and instructions $instructions changes direction to $result",
    ({ instructions, startingDirection, result }) => {
      expect(
        Rover({
          startingPosition: { x: 0, y: 0 },
          startingDirection,
          instructions,
        }),
      ).toStrictEqual({ position: { x: 0, y: 0 }, direction: result });
    },
  );

  // test multiple turns
  test.each<TestInput>([
    { instructions: "R R", startingDirection: "N", result: "S" },
    { instructions: "R R R R", startingDirection: "N", result: "N" },
    { instructions: "R L", startingDirection: "N", result: "N" },
    { instructions: "L L", startingDirection: "N", result: "S" },
    { instructions: "L L L L", startingDirection: "N", result: "N" },
    { instructions: "L R", startingDirection: "N", result: "N" },
  ])(
    "startingDirection $startingDirection and instructions $instructions changes direction to $result",
    ({ instructions, startingDirection, result }) => {
      expect(
        Rover({
          startingPosition: { x: 0, y: 0 },
          startingDirection,
          instructions,
        }),
      ).toStrictEqual({ position: { x: 0, y: 0 }, direction: result });
    },
  );

  test("changes direction to E and moves forward", () => {
    expect(
      Rover({
        startingPosition: { x: 0, y: 0 },
        startingDirection: "N",
        instructions: "R M",
      }),
    ).toStrictEqual({ position: { x: 1, y: 0 }, direction: "E" });
  });
});
