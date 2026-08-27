# Space Flight Booking System

Welcome to **Lunar Lines** — the first commercial space tourism company offering flights to the Moon and orbital trips around Earth.

Your job is to build the booking system.

## Kata

**Task:**

Build a system that manages passenger bookings for commercial space flights. The system must enforce safety rules, calculate pricing, handle cancellations, and manage a waitlist.

### Entities

**Spacecraft**

| Name | Seats | Max Weight | Can Reach | Premium Seats |
|------|-------|-----------|-----------|---------------|
| Artemis I | 12 | 1,200kg | Moon, Orbital | 4 |
| Starliner | 6 | 700kg | Orbital | 2 |

**Destinations**

| Name | Min Age | Medical Clearance Required | Base Price |
|------|---------|---------------------------|-----------|
| Moon | 18 | Yes | £250,000 |
| Orbital | 12 | No | £80,000 |

**Flights** have a destination, an assigned spacecraft, and a status: `open`, `full`, or `launched`.

**Passengers** have a name, age, weight, and loyalty tier (None, Silver, Gold, Platinum).

### Requirements

#### 1. Booking a flight

Given one or more passengers, book them onto a flight. A booking is confirmed if:

- All passengers meet the destination's minimum age
- All passengers pass medical clearance (for destinations that require it)
- The flight has enough seats available
- Total passenger weight (existing + new) does not exceed spacecraft's max weight
- Passengers under 16 must be accompanied by an adult (18+) on the same booking

If any rule fails, the entire booking is rejected. No partial bookings.

#### 2. Pricing

The finance team has already built and deployed a fare calculator that handles all pricing logic. It's in [`fareCalculator.ts`](./fareCalculator.ts). **Your system must use this module for all price calculations** — finance will not approve any other pricing implementation in production.

The fare calculator handles:
- Base price (determined by destination)
- **Group discount:** 4 or more passengers on a single booking get 10% off
- **Loyalty discount:** Silver 5%, Gold 10%, Platinum 15%
- Discounts do not stack — the best available discount is applied per passenger
- **Premium upgrade:** Passengers can upgrade to a premium seat for a 25% surcharge on their (discounted) price. Limited to the spacecraft's premium seat allocation.

#### 3. Cancellation

- A passenger can cancel if the flight status is `open`
- Cancelled passengers receive a full refund
- If a cancellation causes a group booking to drop below 4 passengers, the group discount is removed and remaining passengers are charged the difference
- If an adult cancels and that leaves an under-16 unaccompanied, the under-16's booking is also cancelled (with refund)

#### 4. Waitlist

- If a flight is full (by seats), passengers can join a waitlist
- When a seat becomes available (via cancellation), the first eligible waitlisted passenger is offered the seat
- "Eligible" means they still pass all the rules (including weight limit)
- If the first waitlisted passenger would exceed the weight limit, skip to the next eligible passenger

### External Services

Your booking system depends on three external services. These exist outside your system — you cannot control their implementation.

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

A booking should:
1. Check medical clearance (if required by destination)
2. Process payment
3. Confirm the booking
4. Send a confirmation notification

A cancellation should:
1. Process the refund
2. Send a cancellation notice
3. Offer the seat to the next eligible waitlisted passenger (with notification)

### Example Scenario

**Flight MN-001:** Artemis I → Moon, 10 seats remaining, current weight: 600kg

**Booking request:** 4 passengers
- Alex (age 35, 80kg, Gold loyalty)
- Sam (age 42, 75kg, no loyalty)
- Jordan (age 38, 90kg, no loyalty)
- Taylor (age 29, 68kg, Silver loyalty)

**Validation:**
- All over 18 ✓
- All pass medical clearance ✓
- 4 seats available (10 remaining) ✓
- Weight: 600 + 80 + 75 + 90 + 68 = 913kg (under 1,200) ✓
- No under-16s ✓

**Pricing:**
- Group of 4 → 10% group discount available
- Alex: Gold (10%) vs Group (10%) → 10% off → £225,000
- Sam: Group (10%) → £225,000
- Jordan: Group (10%) → £225,000
- Taylor: Silver (5%) vs Group (10%) → Group is better → £225,000
- **Total: £900,000**

**Then Sam cancels:**
- Sam gets full refund: £225,000
- Group is now 3 passengers → group discount removed
- Remaining passengers repriced:
  - Alex: Gold (10%) → £225,000 (no change, Gold still applies)
  - Jordan: No discount → £250,000 (owes £25,000 extra)
  - Taylor: Silver (5%) → £237,500 (owes £12,500 extra)
- Waitlist is checked for next eligible passenger
