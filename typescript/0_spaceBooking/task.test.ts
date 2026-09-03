// 1. Booking a flight
// Given one or more passengers, book them onto a flight. A booking is confirmed if:

// All passengers meet the destination's minimum age
// All passengers pass medical clearance (for destinations that require it)
// The flight has enough seats available
// Total passenger weight (existing + new) does not exceed spacecraft's max weight
// Passengers under 16 must be accompanied by an adult (18+) on the same booking
// If any rule fails, the entire booking is rejected. No partial bookings.

// PLAN
// --------------------------
// 1. Create a type for Spacecraft
// 2. Create a type for Destination
// 3. Create a type for Flights
// 4. Create a type for Passenger

type Spacecraft = {
  name: string;
  seats: number;
  maxWeight: {
    value: number;
    unit: string;
  };
  // canReach: Destination[];
};

// 1. Happy path. User can successfully book a flight.
//   a. Check every passenger and destination

import { spaceBooking } from "./task";

type LoyaltyTier = "None" | "Sliver" | "Gold" | "Platinum";

// Passengers have a name, age, weight, and loyalty tier (None, Silver, Gold, Platinum).
const mockPassengers = [
  { name: "John Smith 1", age: 45, weight: 90, loyaltyTier: "None" },
  { name: "John Smith 2", age: 46, weight: 91, loyaltyTier: "Silver" },
  { name: "John Smith 3", age: 47, weight: 92, loyaltyTier: "Gold" },
  { name: "John Smith 4", age: 48, weight: 93, loyaltyTier: "Platinum" },
];

const mockFlightDetails = [
  { spaceCraft: "Artemis I", destination: "Moon" },
  { spaceCraft: "Artemis I", destination: "Orbital" },
  { spaceCraft: "Starliner", destination: "Moon" },
  { spaceCraft: "Starliner", destination: "Orbital" },
];

describe("Space Booking", () => {
  test.each(mockPassengers)(
    "User can sucessfully book a flight",
    (passenger) => {
      // const { name, age, weight, loyaltyTier } = passenger;

      for (let i = 0; i < mockFlightDetails.length; i += 1) {
        const { spaceCraft, destination } = mockFlightDetails[i];

        expect(spaceBooking(spaceCraft, destination, passenger)).toBe(
          `Space Craft: ${spaceCraft} - Destination: ${destination} - Passenger: ${passenger}`,
        );
      }
    },
  );
});
