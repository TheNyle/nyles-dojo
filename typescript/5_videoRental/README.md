# Video Rental

This kata focuses on **Domain-Driven Design (DDD)**. You'll model a rich business domain — pricing rules, inventory management, and transactions — using the language of the business.

### What is DDD?

Domain-Driven Design is an approach where the structure of your code mirrors the language and concepts of the business domain. Instead of thinking in terms of technical layers (controllers, services, repositories), you think in terms of **domain objects** that represent real concepts.

Key principles:

* **Ubiquitous language:** Use the same terms in your code as the business uses. If the business says "rental," your code has a `Rental` — not a `Transaction` or `Record`.
* **Rich domain models:** Business logic lives inside domain objects, not in a separate "service" layer. A `Movie` knows its pricing rules. A `Rental` knows whether it's overdue.
* **Encapsulation:** Domain objects protect their own invariants. You can't create an invalid rental or a negative price.
* **Value objects:** Small, immutable concepts like `Money`, `DateRange`, or `MovieType` that carry meaning beyond raw primitives.

### Approach

Use whichever TDD style you're comfortable with (inside-out or outside-in — you've practiced both now). The focus here is on **modelling the domain well**, not on a specific testing technique.

Ask yourself:
- What are the key nouns in this domain? (These become your classes/types)
- What are the business rules? (These become methods on your domain objects)
- What language does the business use? (This becomes your naming)

## Kata

**Focus:** Domain-Driven Design & TDD

**Task:**

You are building a system for a video rental store. Customers can rent movies, return them, and receive receipts. The system needs to track inventory, calculate pricing, and handle late fees.

### User Stories

#### KATA-001 — Customer rents a single movie

As a store clerk
I want to process a movie rental for a customer
So that they receive a receipt and the inventory is updated

**Acceptance Criteria:**
* Customer provides their ID and movie title
* System checks if movie is available
* System calculates rental price based on movie type
* System generates a receipt with customer name, movie title, rental date, due date, and price
* System updates inventory (removes movie from available stock)

#### KATA-002 — Customer rents multiple movies

As a store clerk
I want to process multiple movie rentals in one transaction
So that customers can rent several movies at once

**Acceptance Criteria:**
* Customer can rent multiple movies in a single transaction
* Receipt shows all movies with individual prices and total
* All movies are removed from available inventory
* If any movie is unavailable, the entire transaction fails (no partial rentals)

#### KATA-003 — Customer returns movies

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

| Type | Daily Rate | Rental Period |
|------|-----------|---------------|
| New Release | £3.00/day | 1 day |
| Regular | £2.00/day | 3 days |
| Children's | £1.50/day | 5 days |

**Late Fees**

| Type | Late Fee |
|------|----------|
| New Release | £3.00 per day |
| Regular | £1.50 per day |
| Children's | £1.50 per day |

**Invariants:**
* A movie cannot be rented if it's not in stock
* A transaction either fully succeeds or fully fails — no partial rentals
* Late fees are calculated from the day after the due date
* A customer must exist to process a rental

### Domain Concepts

Consider how you might model these:
* **Movie** — has a title and a type that determines pricing
* **Customer** — has an ID, a name, and rental history
* **Rental** — connects a customer to a movie with dates; knows whether it's overdue
* **Receipt** — a record of a transaction (rental or return)
* **Inventory** — tracks which movies are available

These are suggestions, not prescriptions. Let your tests drive the design.

## Hints

<details>
<summary>Where do I start?</summary>

Start with the simplest user story (KATA-001) and the simplest business rule within it. What's the first test? Perhaps: "renting a regular movie for 1 day costs £2.00."
</details>

<details>
<summary>How do I handle pricing?</summary>

Pricing depends on movie type. Consider whether the movie itself should know its price, or whether a separate pricing concept handles it. Either can work — let your tests guide you.
</details>

<details>
<summary>When should I refactor toward DDD concepts?</summary>

Don't introduce domain objects before you need them. Write tests, make them pass with simple code, then refactor when you see duplication or unclear naming. The domain model emerges through refactoring, not upfront planning.
</details>
