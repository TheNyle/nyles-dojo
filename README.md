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

### 0. Space Flight Booking System

**Focus:** Baseline — no guidance, just build it

**Task:**

Build a booking system for Lunar Lines, the first commercial space tourism company. Handle passenger bookings, pricing, cancellations, and waitlists. You'll revisit this at the end of the course with all the skills you've learned.

### 1. String Calculator

**Focus:** TDD, Red-Green-Refactor & ping-pong pairing

**Task:**

Implement a function that takes a string of comma-separated numbers and returns the sum. An empty string should return `0`.

### 2. Mars Rover

**Focus:** TDD & clean design

**Task:**

Implement the control software for a rover deployed to Mars. The rover receives basic instructions to move (`M`), turn left (`L`) and turn right (`R`) on a grid. Track its position and direction.

### 3. Bowling

**Focus:** TDD, Red-Green-Refactor & ping-pong pairing

**Task:**

Create a piece of software that tracks the score of a game of 10-pin bowling.

### 4. Notification Service

**Focus:** Outside-in TDD, mocking & strong-style pairing

**Task:**

Build a notification service that coordinates multiple external dependencies to send order confirmations to customers via their preferred channel.

### 5. Video Rental

**Focus:** Domain-Driven Design & TDD

**Task:**

Build a system for a video rental store. Model the domain — movies, customers, rentals, pricing rules, and late fees — using the language of the business.

### 6. Refactoring Legacy Code

**Focus:** Using unit tests to document and understand legacy code

**Task:**

Wrap the legacy code in unit tests until you're confident you understand what it does. Then, fix any bugs you may have found and refactor for readability and efficiency.

### 7. Space Flight Booking System (Revisited)

**Focus:** Applying everything — TDD, DDD, mocking, clean design, legacy integration

**Task:**

Return to the Space Booking system from week 0. This time, approach it with all the techniques you've learned. Integrate with the pre-built fare calculator, mock the external services, model the domain properly, and build it test-first.
