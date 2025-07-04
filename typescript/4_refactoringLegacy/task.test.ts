import { DiscountCodes, OrderProcessor } from "./legacy";

describe("OrderProcessor", () => {
  let target: OrderProcessor;

  beforeEach(() => {
    target = new OrderProcessor();
  });
  test("processes an order", () => {
    const response = target.process([
      { product_name: "test product", price: 20 },
    ]);

    expect(response.totalCost).toBeDefined();
    expect(response.numberOfItems).toBeDefined();
  });

  test("processes multiple item orders without discount", () => {
    const response = target.process([
      { product_name: "test product", price: 20 },
      { product_name: "another product", price: 5 },
    ]);

    expect(response.totalCost).toBe(25);
    expect(response.numberOfItems).toBe(2);
  });


  test.each([
    { input: DiscountCodes.WELCOME10, expected: { amount: 27, number: 2 } },
    { input: DiscountCodes.NEWYEAR15, expected: { amount: 25.5, number: 2 } },
    { input: DiscountCodes.BLACKFRIDAY30, expected: { amount: 21, number: 2 } },
  ])('calculates with discount code $input', ({ input, expected }) => {

    const response = target.process([
      { product_name: "product 1", price: 10 },
      { product_name: "product 2", price: 20 }
    ], input);

    expect(response.totalCost).toBe(expected.amount)
    expect(response.numberOfItems).toBe(expected.number);

  });

  test("applies 15% discount to single EXPENSIVE item with NEWYEAR15", () => {
    const response = target.process([
      { product_name: "product expensive", price: 200 }
    ], DiscountCodes.NEWYEAR15);

    expect(response.totalCost).toBe(170);
    expect(response.numberOfItems).toBe(1);
  });

  test("applies NO discount to single LOW COST item with WELCOME10", () => {
    const response = target.process([
      { product_name: "product cheap", price: 10 }
    ], DiscountCodes.WELCOME10);

    expect(response.totalCost).toBe(10);
    expect(response.numberOfItems).toBe(1);
  });

  test("ignores invalid discount code", () => {
    const response = target.process([
      { product_name: "product expensive", price: 200 }
      // @ts-expect-error
    ], "NEWYEAR50");

    expect(response.totalCost).toBe(200);
    expect(response.numberOfItems).toBe(1);
  })
});
