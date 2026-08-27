# Refactoring Legacy Code

Unit tests aren't just useful for shiny new greenfield projects. They can also be an incredibly useful tool for helping to document and understand legacy code.

## Kata

**Focus:** Using unit tests to document and understand legacy code

**Task:**

You have joined a new company, `Nyle's Discount Dojo Supplies`. You are on the Order Processing team, and you have been tasked with making some improvements to the `OrderProcessor` class.

On opening the [file](./legacy.ts), you see that this was clearly written by a lunatic, but it's currently processing a million orders per day so it must work.

1. The first thing you need to do is understand __how__ this thing works. Instead of diving into the code and trying to decipher the inner-workings, you should spend some time wrapping the code in as many unit tests as you can think of.

    The more edge-cases you can capture with unit tests, the better you will understand the current functionality. These tests will also act as a safety net when you come to make changes to the code.

    Be descriptive in the naming of your unit tests. There are a number of facets to this piece of software, so you'll thank yourself later when it comes to refactoring.

    To get you started, your Product manager gives you the following overview of what the `OrderProcessor` does:

    > The Order Processor takes a list of items (each with a `product_name`, `price`, and `qty`) and optionally a `DiscountCode` and a `MemberTier`. It calculates the total basket value (price × quantity for each item), applies a bulk discount for items with 3 or more quantity (one unit free), applies any discount codes to the subtotal, then applies member savings based on tier. It returns the final total, the number of distinct items, and any member savings applied.
    >
    > Discount codes don't apply to baskets under £20. Member savings are: Silver gets £5 off orders over £50 (after discount), Gold gets £10 off orders over £50 or £5 off everything else. Bronze gets nothing.
    >
    > The processor also keeps a running history of orders so we can pull a summary of total revenue, order count, and items sold.

    🐞 Keep an eye out for pesky bugs. When you identify a bug with a unit test, mark it in the test description and come back to it later.

2. It's now time to refactor. The code is impossible to read and isn't the most efficient. Make the code more readable and use your unit tests as a safety net. Feel free to update the language of your unit tests as things become clearer.

3. Once you've performed the refactor and all of your tests are passing, go back through the code and fix any bugs that you identified in the first step.

## Hints

<details>
<summary>How do I test code I don't understand?</summary>

Start with what you *do* know from the PM's description. Write tests for the obvious happy path first, then explore edge cases by experimenting with different inputs.
</details>

<details>
<summary>How do I know if something is a bug?</summary>

If the code's behaviour contradicts the PM's description, that's a bug. Write a test that documents the *expected* behaviour — it should fail against the current code.
</details>

<details>
<summary>How should I refactor?</summary>

Rename one variable at a time. Run your tests after each rename to make sure nothing breaks. Once naming is clear, look for structural improvements like simplifying nested conditionals.
</details>
