type Direction = "N" | "E" | "S" | "W";
type Instruction = "M" | "L" | "R";

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
        for(const instruction of instructions) {
            switch(instruction) {
                case "M":
                    this.coordinates[1] += 1

                    break;
                default:
                    break;
            }
        }
    }

}

