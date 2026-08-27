# Notification Service

This kata introduces **Outside-in TDD**. Instead of starting with the smallest unit and building up (like katas 1 and 2), you'll start from the user's perspective and work inward, discovering your dependencies as you go.

### What is Outside-in TDD?

In Inside-out TDD, you build small pieces first and compose them later. In Outside-in TDD, you start by describing the behaviour you want from the system's edge — then you discover what collaborators are needed to make that behaviour work.

The flow is:

1. Write an acceptance test describing the desired behaviour from the outside
2. Run it — see it fail
3. In the test, identify what dependencies your service needs. Inject mocks for those dependencies.
4. Write just enough production code to make the test pass (using the mocked dependencies)
5. Pick one mock and TDD a real implementation using Red-Green-Refactor
6. Replace the mock with the real implementation
7. Run the acceptance test — see it still passes
8. Repeat steps 5–7 for each mock

### Why Outside-in?

* **Forces you to think about behaviour first** — what does the system do, not how does it do it?
* **Discovers architecture naturally** — dependencies emerge from requirements, not assumptions
* **Keeps you focused** — you only build what the outer test demands
* **Teaches dependency injection** — mocking only works when dependencies are injectable

### Strong-Style Pairing

For this kata, use **strong-style pairing**: "For an idea to go from your head into the computer, it must go through someone else's hands."

This means:
- The **navigator** has the idea and tells the driver what to do
- The **driver** only types what they're told — they don't write code from their own ideas
- Swap roles every 10–15 minutes

This is harder than ping-pong pairing! The navigator must communicate clearly, and the driver must trust the process. It works particularly well for Outside-in TDD because the navigator can focus on the big picture while the driver handles the syntax.

## Kata

**Focus:** Outside-in TDD, mocking & strong-style pairing

**Task:**

You are building a notification service for an e-commerce platform. When a customer places an order, the system must send them a confirmation via their preferred channel (email or SMS).

### Requirements

Given an order ID, the notification service should:

1. Look up the order details
2. Look up the customer's notification preferences
3. Render the `"order-confirmation"` template with the customer's name and order total
4. Send the notification via the preferred channel (email or SMS)

There is only one notification type: order confirmations. The template name is always `"order-confirmation"`. Your service's job is purely orchestration — calling the right dependencies in the right order with the right data.

### Constraints

Your service depends on four external systems. Their interfaces are provided in `task.ts` — you **cannot** modify them. Your service must accept these as injected dependencies.

```typescript
interface OrderRepository {
  findById(orderId: string): Order | null;
}

interface CustomerPreferences {
  getPreferences(customerId: string): { channel: "email" | "sms"; }
}

interface TemplateEngine {
  render(templateName: string, data: Record<string, string>): string;
}

interface NotificationSender {
  sendEmail(to: string, subject: string, body: string): void;
  sendSms(to: string, body: string): void;
}
```

### Acceptance Criteria

**Happy path — email:**
* Given a valid order ID where the customer prefers email
* The template engine is called with `"order-confirmation"` and `{ customerName: "...", orderTotal: "..." }`
* The email sender is called with the customer ID, subject `"Order Confirmation — #[orderId]"`, and the rendered template body

**Happy path — SMS:**
* Given a valid order ID where the customer prefers SMS
* The SMS sender is called with the customer ID and the rendered template body (no subject)

**Error cases:**
* If the order doesn't exist, throw an error: `"Order not found: [orderId]"`
* If the customer has no preferences, default to email

### What to assert

The key assertion in this kata is not a return value — it's that the **sender was called correctly**. Your tests should verify:
- Which method was called (`sendEmail` vs `sendSms`)
- What arguments it received (to, subject, body)

### Example

A customer "Alice" (ID: "CUST-1") places order "ORD-123" for £49.99. Her preferences say "email". The service should:

1. Call `orderRepo.findById("ORD-123")` → `{ id: "ORD-123", customerId: "CUST-1", total: 49.99 }`
2. Call `customerPrefs.getPreferences("CUST-1")` → `{ channel: "email" }`
3. Call `templateEngine.render("order-confirmation", { customerName: "Alice", orderTotal: "£49.99" })` → `"Hi Alice, your order for £49.99 has been confirmed!"`
4. Call `sender.sendEmail("CUST-1", "Order Confirmation — #ORD-123", "Hi Alice, your order for £49.99 has been confirmed!")`

Your test should mock steps 1–3 and **assert** that step 4 happened with the correct arguments.

## Hints

<details>
<summary>What should my first test look like?</summary>

Write a test that describes the full happy path from the outside: "given a valid order, a notification is sent via the customer's preferred channel." Mock all four dependencies. Assert that the sender was called with the right arguments.
</details>

<details>
<summary>How do I mock in Jest?</summary>

Use `jest.fn()` to create mock functions, or create simple objects that implement the interface:

```typescript
const mockOrderRepo: OrderRepository = {
  findById: jest.fn().mockReturnValue({ id: "ORD-1", customerId: "CUST-1", total: 29.99 })
};
```

Then assert calls with `expect(mockSender.sendEmail).toHaveBeenCalledWith(...)`.
</details>

<details>
<summary>When do I stop mocking?</summary>

Your acceptance test should pass entirely with mocks first. That proves your service orchestrates correctly. Then you can TDD real implementations of each dependency if time allows — but the orchestration logic is the main lesson here.
</details>
