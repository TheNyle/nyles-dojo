import {Rover} from "./task";

describe("Rover", () => {
    it("has a rover", () => {
        expect(Rover).toBeDefined();
    });

    it("has a position and direction", () => {
        const rover = new Rover([0, 0], "N");

        expect(rover.position).toEqual({coords: [0, 0], direction: "N"})
    });

    it("gives rover move instruction and validates new position", () => {
        const rover = new Rover([0, 0], "N");

        expect(rover.position).toEqual({coords: [0, 0], direction: "N"})

        rover.instruct(['M'])

        expect(rover.position).toEqual({coords: [0, 1], direction: "N"})

    })
});
