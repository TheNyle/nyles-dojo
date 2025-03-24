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

    > The Order Processor takes a list of items (made up of an `product_name` and a `price`) and a `DiscountCode`. It finds the total value of your basket and applies any discount codes. It then returns a total cost and an item count. We don't give discounts on baskets worth less than 20.

    🐞 Keep an eye out for pesky bugs. When you identify a bug with a unit test. Mark it in the test description and come back to it later.

2. It's now time to refactor. The code is impossible to read and isn't the most efficient. Make the code more readable and use your unit tests as a safety net. Feel free to update the language of your unit tests as things become clearer.

3. Once you've performed the refactor and all of your tests are passing, go back through the code and fix any bugs that you identified in the first step.
