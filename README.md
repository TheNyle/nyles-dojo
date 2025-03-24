# Nyle's Dojo

Welcome to Nyle's Dojo. Take your shoes off.

### What's a Kata?

Kata is a Japanese word meaning "form". It is a pattern of martial arts movements that are designed to be repeated and practiced.

The primary intention of these katas is to practice Test-Driven Development (TDD) and learn new methods of pairing.

### Further Reading

* [Pairing](./docs/PAIRING.md)
* [Test-Driven Development (TDD)](./docs/TDD.md)

## Katas

### 1. String Calculator

**Focus:** TDD, Red-Green-Refactor & ping-pong pairing

**Task:**

Implement a function that takes 2 comma-separated numbers and returns the sum. An empty string should return `0`.

The function should be able to handle any number of comma-separated numbers

The function should handle newlines (`\n`) as a delimiter (`1\n2,3` → `6`)

The function should support custom delimiters (`1;2` → `3`)

### 2. Bank Account

**Focus:** Outside-in TDD, basic OOP, immutability

**Task:**

Implement a `BankAccount` class that supports a `deposit(amount)`, `withdraw(amount)`, and `printStatement()` method.

Start with the following integration test:

```
Given a bank account with no transactions
When I deposit 1000 on "2024-03-21"
And I deposit 2000 on "2024-03-22"
And I withdraw 500 on "2024-03-23"
Then the printed statement should be:

Date       | Amount | Balance
2025-03-23 | -500   | 2500
2025-03-22 | 2000   | 3000
2025-03-21 | 1000   | 1000
```

Then break the problem down into smalled units, and solve them in a classic TDD fashion until the Acceptance test is passing.

### 3. Refactoring Legacy Code

**Focus:** Using unit tests to document and understand legacy code

**Task:**

Wrap the legacy code in unit tests until you're confident you understand what it does. Then, fix any bugs you may have found and refactor for readability and efficiency.

### 4. Mars Rover

**Focus:** 

**Task:**

xxx

### 5. DDD & TDD

**Focus:** 

**Task:**

xxx

### 6. Outisde-in TDD

**Focus:** 

**Task:**

xxx