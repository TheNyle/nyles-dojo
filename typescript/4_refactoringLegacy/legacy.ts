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
    let totalPrice = 0;
    let i = 0;
    while (i < orderItems.length) {
      totalPrice += orderItems[i].price;
      i++;
    }
    let discountApplied = 0;
    if (discountCode) {
      if (this.discountCodesMap.size > 0) {
        if (this.discountCodesMap.has(discountCode)) {
          const discountCodeValue = this.discountCodesMap.get(discountCode);
          if (discountCodeValue) {
            if (totalPrice >= 20) {
              discountApplied = discountCodeValue * totalPrice;
            }
          }
        }
      }
    }
    return {
      totalCost: totalPrice - discountApplied,
      numberOfItems: orderItems.length,
    };
  }
}
