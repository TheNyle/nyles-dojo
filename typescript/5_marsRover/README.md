# Mars Rover



## Kata

**Focus:** TDD, Red-Green-Refactor & data structures

**Task:**

Implement the control software for a rover deployed to Mars. The rover can only receive basic instruction that allow it to move on a grid. The instructions are move forwards (`M`), turn left (`L`) and turn right (`R`). Based on these instructions we need to be able to track the rovers movement and direction.

Create a `Rover` with the following requirements:

* The Rover should be capable of being told its start position
* The Rover should receive a set of instructions which can be one of:
    * Move forwards (`M`)
    * Turn left (`L`)
    * Turn right (`R`)
* After completing the set of movement instructions, the Rover should report it's current position on the grid and the cardinal direction it is facing.


// xy
// MLRMMMRRL


// 0
// cardinal direction
// position on the grid x,y

// N
// E
// S
// W

// 0,0 // N

// N
// 2

// N
// 0,2


// L,L

// W,S

// S
// 0,2

// "0,2 N"
// { coords: "0,1", direction: "N" }
