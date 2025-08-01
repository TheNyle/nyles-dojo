type Direction = "N" | "E" | "S" | "W";
type Instruction = "M" | "L" | "R";

const directionMap = {
    N: 1,
    E: 0,
    S: 1,
    W: 0
}

const instructionMap = {
    N: 1,
    E: 1,
    S: -1,
    W: -1
}

export class Rover {
    constructor(
        private coordinates: [number, number],
        private direction: Direction
    ) {
    }

    get position() {
        return {coords: this.coordinates, direction: this.direction}
    }

    instruct(instructions: Instruction[]) {
        for (const instruction of instructions) {
            switch (instruction) {
                case "M":
                    const moveDirection = directionMap[this.direction];
                    const amountToMove = instructionMap[this.direction];

                    this.coordinates[moveDirection] += amountToMove;

                    break;
                default:
                    break;
            }
        }
    }

}

