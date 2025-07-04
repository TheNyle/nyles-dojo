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

    expect(response.t).toBeDefined();
    expect(response.u).toBeDefined();
  });

  test("processes multiple item orders without discount", () => {
    const response = target.process([
      { product_name: "test product", price: 20 },
      { product_name: "another product", price: 5 },
    ]);

    expect(response.t).toBe(25);
    expect(response.u).toBe(2);
  });

  test("processes an order with a welcome discount code", () => {
    const response = target.process([
      { product_name: "a product", price: 10 },
      { product_name: "a product", price: 20 }
    ], DiscountCodes.WELCOME10);

    expect(response.t).toBe(27);
    expect(response.u).toBe(2);
  })

  test("applies 30% discount to items with BLACKFRIDAY30", () => {
    const response = target.process([
      { product_name: "product 1", price: 10 },
      { product_name: "product 2", price: 20 }
    ], DiscountCodes.BLACKFRIDAY30);

    expect(response.t).toBe(21);
    expect(response.u).toBe(2);
  })

  test("applies 15% discount to items with NEWYEAR15", () => {
    const response = target.process([
      { product_name: "product 1", price: 10 },
      { product_name: "product 2", price: 20 }
    ], DiscountCodes.NEWYEAR15);

    expect(response.t).toBe(25.5);
    expect(response.u).toBe(2);
  });
});
