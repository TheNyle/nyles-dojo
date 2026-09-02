# Bowling

Using all of the practices learned in the String Calculator kata, apply them to a more complex problem space, a game of Bowling.

## Kata

**Focus:** TDD, DDD, Red-Green-Refactor & ping-pong pairing

**Task:**

Create a piece of software that tracks the score of a game of 10-pin bowling. The rules of bowling are as follows:

* The game consists of 10 frames.
    * In each frame the player has two rolls to knock down 10 pins.
    * The score for the frame is the total number of pins knocked down, plus bonuses for strikes and spares.
* A spare is when the player knocks down all 10 pins in two rolls.
    * The bonus for that frame is the number of pins knocked down by the next roll.
* A strike is when the player knocks down all 10 pins on their first roll.
    * The frame is then completed with a single roll.
    * The bonus for that frame is the value of the next two rolls.
* In the tenth frame a player who rolls a spare or strike is allowed to roll the extra balls to complete the frame.
    * However no more than three balls can be rolled in tenth frame.

Some example scores are:

```text
X X X X X X X X X X X X          12 rolls: 12 strikes                       10 frames × 30 = 300
9- 9- 9- 9- 9- 9- 9- 9- 9- 9-    20 rolls: 10 pairs of 9 and a miss         10 frames × 9  = 90
5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5   21 rolls: 10 spares, with a final 5        10 frames × 15 = 150
```

Notation: `X` = strike, `/` = spare, `-` = miss (0 pins), and a digit = that many pins.

## Hints

<details>
<summary>Where do I start?</summary>

Start with the simplest possible game: all gutter balls (every roll is 0). What should the total score be?
</details>

<details>
<summary>How do I handle spares and strikes?</summary>

Don't try to handle them from the start. Get a basic game working first (no bonuses), then add spare logic, then strike logic — one test at a time.
</details>

<details>
<summary>The 10th frame is confusing</summary>

Handle it last. Get frames 1–9 working correctly first. The 10th frame is just a special case of allowing extra rolls when the player earns bonus balls.
</details>
