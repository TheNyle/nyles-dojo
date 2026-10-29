// STATE
// --------------
// 1. Direction
// 2. Current position (x, y)

// INPUT
// --------------
// Starting position
// Starting direction
// Instructions

// OUTPUTS
// --------------
// Ending position
// Ending direction

// CASES TO HANDLE
// --------------
// No input
// Negative coordinates

export type Position = {
  x: number;
  y: number;
};

export type Direction = "N" | "E" | "W" | "S";
export type Turn = "L" | "R";

enum TurnLeftMap {
  N = "W",
  W = "S",
  S = "E",
  E = "N",
}

enum TurnRightMap {
  N = "E",
  E = "S",
  S = "W",
  W = "N",
}

// export type Move = {
//   N: { x: 0; y: 1 };
//   E;
//   S: { x: 0; y: -1 };
//   W;
// };

export type Instructions = string;

export type RoverInputs = {
  startingPosition: Position;
  startingDirection: Direction;
  instructions?: Instructions;
};

export const Rover = ({
  instructions,
  startingPosition,
  startingDirection,
}: RoverInputs) => {
  let position = startingPosition;
  let direction = startingDirection;

  if (instructions === "M") {
    position = { ...startingPosition, y: startingPosition.y + 1 };
  }

  if (instructions === "M M") {
    position = { ...startingPosition, y: startingPosition.y + 2 };
  }

  if (instructions === "L") {
    direction = TurnLeftMap[direction];
  }

  if (instructions === "R") {
    direction = TurnRightMap[direction];
  }

  // if (instructions === "R" && startingDirection === "N") {
  //   direction = "E";
  // }

  // if (instructions === "L" && startingDirection === "N") {
  //   direction = "W";
  // }

  // if (instructions === "R" && startingDirection === "S") {
  //   direction = "W";
  // }

  // if (instructions === "L" && startingDirection === "S") {
  //   direction = "E";
  // }

  if (!instructions) {
    return { position, direction };
  }

  return { position, direction };
};

// Naive option: conditional for each direction and turn.
// Option 1: TurnMap - Object that stores the resulting direction of the specified turn
// Option 2: DirectionMap -

// for (let i = 0; i < instructions?.length; i++) {
//   const val = instructions[i];

//   // update position and direction based on the instruction given

//   // update position
//   position = { ...position,  }

//   // update direction
// }
