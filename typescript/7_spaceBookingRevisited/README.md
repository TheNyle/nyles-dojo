# Space Flight Booking System (Revisited)

This is the capstone. Back in [Kata 0](../0_spaceBooking/README.md) you built the **Lunar Lines** booking system with no guidance — just to see how you'd approach it. Now you'll build it again, but this time bringing everything you've practiced: TDD, clean design, domain-driven modelling, mocking, and integrating with pre-built and legacy code.

Don't copy your Kata 0 solution. Start fresh and let your tests drive the design.

## Kata

**Focus:** Applying everything — TDD, DDD, mocking, clean design, legacy integration

**Task:**

Build the booking system for Lunar Lines. The requirements are the same as Kata 0 — passenger bookings, pricing, cancellations, and a waitlist — but the *way* you build it is the point.

The full domain requirements (entities, booking rules, cancellation, waitlist) are unchanged from Kata 0. **Re-read them here:** [Kata 0 requirements](../0_spaceBooking/README.md#requirements).

### How to approach it

This kata is deliberately open. Use the techniques from the earlier katas rather than following a prescriptive script.

1. **Model the domain (DDD — Kata 5).** What are the nouns? `Flight`, `Spacecraft`, `Passenger`, `Booking`, `Waitlist`. What business rules belong on each? A `Flight` knows whether it has seats; a `Spacecraft` knows its weight and premium-seat limits. Use the language of the business.

2. **Build test-first (TDD — Katas 1–3).** Start with the simplest rule (e.g. "a passenger below the minimum age is rejected") and grow outward one failing test at a time. Don't design the whole thing up front.

3. **Work outside-in and mock the external services (Kata 4).** The booking system depends on three external services you don't control. Inject them and mock them in your tests — assert that they were *called correctly*, not just their return values.

   ```typescript
   interface MedicalClearanceService {
     checkClearance(passengerId: string): boolean;
   }

   interface PaymentGateway {
     charge(passengerId: string, amount: number): { success: boolean; transactionId: string };
     refund(transactionId: string, amount: number): { success: boolean };
   }

   interface NotificationService {
     sendBookingConfirmation(passengerId: string, flightId: string, details: string): void;
     sendCancellationNotice(passengerId: string, flightId: string): void;
     sendWaitlistOffer(passengerId: string, flightId: string): void;
   }
   ```

   These interfaces are provided in [`task.ts`](./task.ts).

4. **Integrate the pre-built fare calculator (legacy integration — Kata 6).** All pricing must go through [`fareCalculator.ts`](./fareCalculator.ts) — the same terse, finance-owned module from Kata 0. **You may not modify it.** Its interface won't match your domain model, so write an adapter that translates your clean `Passenger`/`Booking` objects into the shape the calculator expects, and translates its `{ f, t }` result back. Keep the ugliness contained behind that adapter.

   > Reminder: the calculator floors the discount at 10% for eligible groups of 4+, applies a flat 25% premium surcharge to anyone flagged for upgrade, and knows **nothing** about seat limits. Enforcing the premium-seat cap is your system's job. See the [Kata 0 pricing section](../0_spaceBooking/README.md#2-pricing) for the full contract.

### What "done" looks like

- A rich domain model where behaviour lives on the objects that own it — not in one giant service function.
- All external services injected and mocked in tests.
- Pricing delegated entirely to `fareCalculator.ts` through an adapter you own.
- A test suite that reads like a specification of the business rules, built up red-green-refactor.

## Hints

<details>
<summary>Where do I start?</summary>

Don't start with pricing or the waitlist. Start with the single simplest booking rule you can name and test — for example, "a passenger under the destination's minimum age is rejected." Get that green, then add the next rule.
</details>

<details>
<summary>How do I stop the fare calculator's ugliness leaking everywhere?</summary>

Write one adapter (e.g. a `PricingService` or `FareAdapter`) that is the *only* code in your system that imports `fareCalculator.ts`. It maps your domain objects to the calculator's `P[]`/`b`/`g` inputs and maps `{ f, t }` back to your domain. Test it directly, then mock or use it from the rest of your system.
</details>

<details>
<summary>How do I test the "charge, confirm, notify" sequence?</summary>

Inject mocks for the payment gateway and notification service. Assert the booking calls `charge` before `sendBookingConfirmation`, and that it doesn't confirm if the charge fails. This is the outside-in mocking discipline from Kata 4.
</details>

<details>
<summary>This feels like a lot at once</summary>

It is — that's why it's last. Slice it thin. One rule, one test, one green bar at a time. The domain model and the architecture will emerge from the tests, exactly as in the earlier katas.
</details>
