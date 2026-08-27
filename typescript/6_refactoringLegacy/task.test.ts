import { DiscountCodes, MemberTier, OrderProcessor } from "./legacy";

describe("Template", () => {
  test("template", () => {
    const op = new OrderProcessor();

    const res = op.process(
      [
        {
          product_name: "product",
          price: 100.0,
          qty: 1,
        },
      ],
      DiscountCodes.WELCOME10
    );

    expect(res.t).toBe(90);
  });
});
