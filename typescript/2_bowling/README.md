# Bowling

Using all of the practices learned in the String Calculator kata, apply them to a more complex problem space, a game of Bowling.

## Kata

**Focus:** TDD, DDD, Red-Green-Refactor & ping-pong pairing

**Task:**

Create a piece of software that tracks the score of a game of 10-pin bowling. the rules of bowling are as follows:

* The game consists of 10 frames.
    * In each frame the player has two rolls to knock down 10 pins.
    * The score for the frame is the total number of pins knocked down, plus bonuses for strikes and spares.
* A spare is when the player knocks down all 10 pins in two rolls.
    * The bonus for that frame is the number of pins knocked down by the next roll.
* A strike is when the player knocks down all 10 pins on his first roll.
    * The frame is then completed with a single roll.
    * The bonus for that frame is the value of the next two rolls.
* In the tenth frame a player who rolls a spare or strike is allowed to roll the extra balls to complete the frame.
    * However no more than three balls can be rolled in tenth frame.
