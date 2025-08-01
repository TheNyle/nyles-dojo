type Direction = "N" | "E" | "S" | "W";

export class Rover {
    constructor(
        private coordinates: [number, number],
        private direction: Direction
    ) {
    }

    get position() {
        return {coords: this.coordinates, direction: this.direction}
    }

    instruct(instructions: string[]) {
        const instOne = instructions[0];

        if (instOne === 'M') {
            this.coordinates = [this.coordinates[0], this.coordinates[1] + 1];
        }
    }

}

