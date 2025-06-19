# Video Rental

This kata focuses on Outside-in TDD and leans into Domain-Driven Design (DDD). You will be given a number of acceptance criteria, and you should write your software beginning from the **user's** perspective.

### What is Outside-in TDD?

While traditional TDD starts with the smallest units (inside-out), Outside-in TDD begins from the user's perspective. You start by writing acceptance tests that describe complete user behaviors, then work inward, creating only the code necessary to make those tests pass.
The flow is:

1. Write an acceptance test describing user behavior
1. Run acceptance test - see it fails
1. In the test, think about what dependencies will be needed to make the test pass (Inject them into your service).
1. Run acceptance test - see it passes
1. Create real implementations of each dependency - using Red-Green-Refactor TDD
1. Replace all of the mocks with the real implementations
1. Run acceptance test - see it passes

### Benefits of Outside-in TDD

* **User-focused design:** You build exactly what users need, not what you think they might need.
* **Natural architecture emergence:** Dependencies and interfaces are discovered organically rather than assumed upfront.
* **Reduced over-engineering:** You only create code that's actually required by real usage scenarios.
* **Better separation of concerns:** The outside-in flow naturally leads to loosely coupled, highly cohesive components.
* **Living documentation:** Your tests describe real user scenarios, making the codebase more maintainable.

## Kata

**Focus:** Outside-in TDD & Domain-Driven Design (DDD)

**Task:**

You are building a system for a video rental store. Customers can rent movies, return them, and receive receipts. The system needs to track inventory, calculate pricing, and handle late fees. For this challenge, we will simulate user stories with a set of acceptance critera.

### KATA-001 - Customers rent a single movie

As a store clerk
I want to process a movie rental for a customer
So that they receive a receipt and the inventory is updated

**Acceptance Criteria:**
* Customer provides their ID and movie title
* System checks if movie is available
* System calculates rental price based on movie type
* System generates a receipt with customer name, movie title, rental date, due date, and price
* System updates inventory (removes movie from available stock)

### KATA-002 - Customer rents multiple movies

As a store clerk
I want to process multiple movie rentals in one transaction
So that customers can rent several movies at once

**Acceptance Criteria:**
* Customer can rent multiple movies in a single transaction
* Receipt shows all movies with individual prices and total
* All movies are removed from available inventory
* If any movie is unavailable, the entire transaction fails

### KATA-003 - Customer returns movies

As a store clerk
I want to process movie returns
So that inventory is updated and late fees are calculated

**Acceptance Criteria:**
* Customer provides their ID and returned movies
* System calculates late fees for overdue movies
* System adds movies back to available inventory
* System generates return receipt showing any late fees owed

### Business Rules

**Movie Types and Pricing**
* New Release: £3.00 per day, due in 1 day
* Regular: £2.00 per day, due in 3 days
* Children: £1.50 per day, due in 5 days

**Late Fees**
* New Release: £3.00 per day late
* Regular: £1.50 per day late
* Children: £1.50 per day late

**Customer Information**
Customers have:
* ID (unique identifier)
* Name
* Rental history
