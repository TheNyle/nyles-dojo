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

## Kata

**Focus:** TDD, Red-Green-Refactor & ping-pong pairing

**Task:**

Implement a function that takes 2 comma-separated numbers and returns the sum. An empty string should return `0`.

The function should be able to handle any number of comma-separated numbers

The function should handle newlines (`\n`) as a delimiter (`1\n2,3` → `6`)

The function should support custom delimiters (`1;2` → `3`)
