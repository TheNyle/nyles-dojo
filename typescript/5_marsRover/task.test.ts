import { Rover } from "./task";
describe("Rover", () => {
  it("has a rover", () => {
    expect(Rover).toBeDefined();
  });

  it("has a position and direction", () => {
    const rover = new Rover([0, 0], "N");

    expect(rover).toHaveProperty("position"); // [x,y]
    expect(rover).toHaveProperty("direction");
    expect(Array.isArray(rover.position)).toBeTruthy();
    expect(rover.position.length).toBe(2);
  });
});
