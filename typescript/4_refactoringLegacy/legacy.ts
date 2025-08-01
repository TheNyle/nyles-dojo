export enum DiscountCodes {
  BLACKFRIDAY30 = "BLACKFRIDAY30",
  WELCOME10 = "WELCOME10",
  NEWYEAR15 = "NEWYEAR15",
}

export class OrderProcessor {
  private discountCodesMap = new Map<DiscountCodes, number>([
    [DiscountCodes.BLACKFRIDAY30, 0.3],
    [DiscountCodes.WELCOME10, 0.1],
    [DiscountCodes.NEWYEAR15, 0.15],
  ]);

  process(
    orderItems: {
      product_name: string;
      price: number;
    }[],
    discountCode?: DiscountCodes
  ): {
    totalCost: number;
    numberOfItems: number;
  } {
    const totalPrice = orderItems.reduce(
      (total, item) => total + item.price,
      0
    );

    if (totalPrice < 20 || !discountCode || !this.discountCodesMap.size) {
      return {
        totalCost: totalPrice,
        numberOfItems: orderItems.length,
      };
    }

    const discountCodeValue = this.discountCodesMap.get(discountCode);
    const discountApplied = discountCodeValue
      ? discountCodeValue * totalPrice
      : 0;

    return {
      totalCost: totalPrice - discountApplied,
      numberOfItems: orderItems.length,
    };
  }
}
