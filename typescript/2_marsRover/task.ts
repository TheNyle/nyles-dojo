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

export type Move = {
  N: { x: 0; y: 1 };
  E;
  S: { x: 0; y: -1 };
  W;
};

type MoveProps = {
  position: Position;
  direction: Direction;
};

const move = ({ position, direction }: MoveProps) => {
  let x = position.x;
  let y = position.y;

  if (direction === "N") {
    y++;
  }
  if (direction === "E") {
    x++;
  }
  if (direction === "S") {
    y -= 1;
  }
  if (direction === "W") {
    x -= 1;
  }

  return { x, y };
};

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

  if (!instructions?.length) {
    return { position, direction };
  }

  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i];

    if (instruction === "L") {
      direction = TurnLeftMap[direction];
      continue;
    }

    if (instruction === "R") {
      direction = TurnRightMap[direction];
      continue;
    }

    if (instruction === "M") {
      position = move({ position, direction });
    }
  }

  return { position, direction };
};

// Naive option:

// for (let i = 0; i < instructions?.length; i++) {
//   const val = instructions[i];

//   // update position and direction based on the instruction given

//   // update position
//   position = { ...position,  }

//   // update direction
// }
