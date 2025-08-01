type Direction = "N" | "E" | "S" | "W";
type Instruction = "M" | "L" | "R";

const directionMap = {
        N: 1,
        E: 0,
        S: 1,
        W: 0
    }
export class Rover {
    constructor(
        private coordinates: [number, number],
        private direction: Direction
    ) {}



    get position() {
        return {coords: this.coordinates, direction: this.direction}
    }

    instruct(instructions: Instruction[]) {
        for(const instruction of instructions) {
            switch(instruction) {
                case "M":
                    this.coordinates[directionMap[this.direction]] += 1

                    break;
                default:
                    break;
            }
        }
    }

}

