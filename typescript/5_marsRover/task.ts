type Direction = "N" | "E" | "S" | "W";
type Instruction = "M" | "L" | "R";
type DirectionConfig = Record<
  Direction,
  { coord: number; move: number; leftTurn: Direction; rightTurn: Direction }
>;

const directionConfig: DirectionConfig = {
  N: { coord: 1, move: 1, leftTurn: "W", rightTurn: "E" },
  E: { coord: 0, move: 1, leftTurn: "N", rightTurn: "S" },
  S: { coord: 1, move: -1, leftTurn: "E", rightTurn: "W" },
  W: { coord: 0, move: -1, leftTurn: "S", rightTurn: "N" },
};

export class Rover {
  constructor(
    private coordinates: [number, number],
    private direction: Direction
  ) {}

  get position() {
    return { coords: this.coordinates, direction: this.direction };
  }

  instruct(instructions: Instruction[]) {
    for (const instruction of instructions) {
      switch (instruction) {
        case "M":
          const moveDirection = directionConfig[this.direction].coord;
          const amountToMove = directionConfig[this.direction].move;

          this.coordinates[moveDirection] += amountToMove;
          break;
        case "L":
          this.direction = directionConfig[this.direction].leftTurn;
          break;
        case "R":
          this.direction = directionConfig[this.direction].rightTurn;
        default:
          break;
      }
    }
  }
}
