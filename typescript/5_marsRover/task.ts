type Direction = "N" | "E" | "S" | "W";

export class Rover {
  constructor(
    private coordinates: [number, number],
    private _direction: Direction
  ) {}

  get position() {
    return this.coordinates;
  }

  get direction() {
    return this._direction;
  }
}
