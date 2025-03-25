# Video Rental

This kata focuses on combining TDD with Domain-Driven Design (DDD).

Build this piece of software as if you were building it in the usual style of Ports & Adapters. Instead of HTTP entrypoint, the entrypoint will be the test framework.

Think about what entities make up this service, and how they collaborate.

As always, everything must be TDD

## Kata

**Focus:** DDD & TDD

**Task:**

You are building a video rental system where customers can rent movies. The store has some strict rules:

* A customer can only have up to 3 active rentals.
* A customer with an overdue rental cannot rent new movies.
* A rental is considered overdue if it is not returned by its due date.
* When renting a movie, the due date is set based on the rental period.
* A rental must be marked as returned when a customer finishes watching.