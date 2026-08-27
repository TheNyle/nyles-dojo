# Nyle's Dojo

Welcome to Nyle's Dojo. Take your shoes off.

### What's a Kata?

Kata is a Japanese word meaning "form". It is a pattern of martial arts movements that are designed to be repeated and practiced.

The primary intention of these katas is to practice Test-Driven Development (TDD) and learn new methods of pairing.

### Further Reading

* [Pairing](./docs/PAIRING.md)
* [Test-Driven Development (TDD)](./docs/TDD.md)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- A pair partner (recommended!)

### Setup

```bash
cd typescript
npm install
```

### Running Tests

```bash
npm test           # run all tests once
npm run test:watch # run tests in watch mode (re-runs on file changes)
```

### How to Work Through the Katas

Work through the katas in order — they're designed to build on each other. Each kata has its own `README.md` with detailed instructions. You'll find:

- `task.ts` — an empty file where you'll write your implementation
- `task.test.ts` — a template test file to get you started

Open the kata's README, read the requirements, then write your first failing test.

## Katas

### 1. String Calculator

**Focus:** TDD, Red-Green-Refactor & ping-pong pairing

**Task:**

Implement a function that takes 2 comma-separated numbers and returns the sum. An empty string should return `0`.

### 2. Bowling

**Focus:** TDD, Red-Green-Refactor & ping-pong pairing

**Task:**

Create a piece of software that tracks the score of a game of 10-pin bowling.

### 3. Video Rental

**Focus:** Outside-in TDD & DDD

**Task:**

You are building a system for a video rental store. Customers can rent movies, return them, and receive receipts.

### 4. Refactoring Legacy Code

**Focus:** Using unit tests to document and understand legacy code

**Task:**

Wrap the legacy code in unit tests until you're confident you understand what it does. Then, fix any bugs you may have found and refactor for readability and efficiency.

### 5. Mars Rover

**Focus:** TDD & Data structures

**Task:**

Implement the control software for a rover deployed to Mars. The rover can only receive basic instruction that allow it to move on a grid. The instructions are move (`M`), turn left (`L`) and turn right (`R`). Based on these instructions we need to be able to track the rovers movedment and direction.
