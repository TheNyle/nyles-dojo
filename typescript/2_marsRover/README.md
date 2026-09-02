# Mars Rover

## Kata

**Focus:** TDD, Red-Green-Refactor & data structures

**Task:**

Implement the control software for a rover deployed to Mars. The rover can only receive basic instructions that allow it to move on a grid. The instructions are move forwards (`M`), turn left (`L`) and turn right (`R`). Based on these instructions we need to be able to track the rover's movement and direction.

Create a `Rover` with the following requirements:

* The Rover should be capable of being told its start position
* The Rover should receive a set of instructions which can be one of:
    * Move forwards (`M`)
    * Turn left (`L`)
    * Turn right (`R`)
* After completing the set of movement instructions, the Rover should report its current position on the grid and the cardinal direction it is facing.

## Examples

| Start X | Start Y | Facing | Instructions | End X | End Y | Facing |
|---|---|---|---|---|---|---|
| 0 | 0 | N | `M` | 0 | 1 | N |
| 0 | 0 | N | `R M` | 1 | 0 | E |
| 1 | 2 | N | `L M L M L M L M` | 1 | 2 | N |
| 0 | 0 | N | `M M R M M` | 2 | 2 | E |

## Hints

<details>
<summary>Where do I start?</summary>

What's the simplest thing a rover can do? It exists at a position. Write a test that creates a rover and checks its starting position.
</details>

<details>
<summary>How do I handle turning?</summary>

Think about the relationship between directions. What data structure lets you move between N, E, S, W in a predictable way?
</details>

<details>
<summary>How do I handle movement?</summary>

Movement depends on direction. A rover facing north moves differently to one facing east. Consider how you map a direction to a change in coordinates.
</details>
