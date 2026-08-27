# String Calculator

This simple kata is not intended to challenge your software-writing skills, but to force you to work in a different way.

Focus on the `Red-Green-Refactor` methodology. This means the order of operations for implementation are:

1. Write a failing test (red)
1. Write the smallest amount of code to make that test pass (green)
1. Once all tests are green, refactor if necessary
1. Repeat

For this kata, you should also make use of the ping-pong method of pairing. Given two engineers (A & B) the sequence of writing code is:

* A writes a failing test
* B writes just enough code to make the test pass
* B writes a new failing test
* A writes just enough code to make the test pass
* A writes a new failing test
* and so on...

Focus on writing a test that coveres the simplest case possible, and then the smallest amount of code to make the test pass.

## Kata

**Focus:** TDD, Red-Green-Refactor & ping-pong pairing

**Task:**

Implement a function that takes a string of comma-separated numbers and returns the sum.

An empty string should return `0`, and a single number returns itself.

The function should be able to handle any number of comma-separated numbers.

The function should handle newlines (`\n`) as a delimiter (`1\n2,3` → `6`).

The function should support custom delimiters (`1;2` → `3`).

## Hints

<details>
<summary>Where do I start?</summary>

Write a test for the simplest case: what should your function return when given an empty string?
</details>

<details>
<summary>How do I handle custom delimiters?</summary>

Think about how a user might specify a custom delimiter. One common approach is a special prefix in the input string — but there are others. Discuss with your pair what feels right.
</details>

<details>
<summary>I'm writing too much code at once</summary>

If your implementation handles more than the single failing test in front of you, delete it and write only what's needed to go green. The refactor step is where you generalise.
</details>
