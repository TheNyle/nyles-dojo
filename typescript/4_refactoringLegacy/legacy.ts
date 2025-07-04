export enum DiscountCodes {
  BLACKFRIDAY30 = "BLACKFRIDAY30",
  WELCOME10 = "WELCOME10",
  NEWYEAR15 = "NEWYEAR15",
}

export class OrderProcessor {
  private c = new Map<DiscountCodes, number>([
    [DiscountCodes.BLACKFRIDAY30, 0.3],
    [DiscountCodes.WELCOME10, 0.1],
    [DiscountCodes.NEWYEAR15, 0.15],
  ]);

  process(
    a: {
      product_name: string;
      price: number;
    }[],
    j?: DiscountCodes
  ): {
    t: number;
    u: number;
  } {
    let b = 0;
    let i = 0;
    while (i < a.length) {
      b += a[i].price;
      i++;
    }
    let m = 0;
    if (j) {
      if (this.c.size > 0) {
        if (this.c.has(j)) {
          const u = this.c.get(j);
          if (u) {
            if (b >= 20) {
              m = u * b;
            }
          }
        }
      }
    }
    return {
      t: b - m,
      u: a.length,
    };
  }
}
