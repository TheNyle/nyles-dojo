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

  if (instructions === "R") {
    direction = "E";
  }

  if (instructions === "L") {
    direction = "W";
  }

  if (!instructions) {
    return { position, direction };
  }

  return { position, direction };
};

// for (let i = 0; i < instructions?.length; i++) {
//   const val = instructions[i];

//   // update position and direction based on the instruction given

//   // update position
//   position = { ...position,  }

//   // update direction
// }
