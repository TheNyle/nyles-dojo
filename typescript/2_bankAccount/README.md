# Bank Account

This kata is aimed at teaching a slightly different approach to TDD. __The Outside-in__ or __London School__ method of TDD.

The focus of this style is to start with a high-level test that makes use of the language the business uses to describe functionality. To begin with, the focus is **not** on the inner workings of the app, but the overarching behaviour. This starting test can also be described as an Integration or an Acceptance test.

Once the high-level test is complete (and failing), it will continue to fail throughout the development process until you know that the required business acceptance criteria have been met.

The rest of the development will carried out using the classic Red-Green-Refactor style of TDD.

## Kata

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
