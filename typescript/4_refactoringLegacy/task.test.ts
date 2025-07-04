import { OrderProcessor, DiscountCodes } from "./legacy";

describe("OrderProcessor", () => {
  let target: OrderProcessor;

  beforeEach(() => {
    target = new OrderProcessor()
  })
  test("processes an order", () => {
     const response = target.process([{
        product_name: 'test product',
        price: 20
     }]);

     expect(response.t).toBeDefined()
     expect(response.u).toBeDefined()
  });
});
