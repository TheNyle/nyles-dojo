export enum DiscountCodes {
  BLACKFRIDAY30 = "BLACKFRIDAY30",
  WELCOME10 = "WELCOME10",
  NEWYEAR15 = "NEWYEAR15",
}

export enum MemberTier {
  BRONZE = "BRONZE",
  SILVER = "SILVER",
  GOLD = "GOLD",
}

export class OrderProcessor {
  private c = new Map<DiscountCodes, number>([
    [DiscountCodes.BLACKFRIDAY30, 0.3],
    [DiscountCodes.WELCOME10, 0.1],
    [DiscountCodes.NEWYEAR15, 1.15],
  ]);

  private h: { d: string; t: number; n: number }[] = [];

  process(
    a: {
      product_name: string;
      price: number;
      qty: number;
    }[],
    j?: DiscountCodes,
    k?: MemberTier
  ): {
    t: number;
    u: number;
    s: number;
  } {
    let b = 0;
    let i = 0;
    let q = 0;
    while (i < a.length) {
      let p = a[i].price * a[i].qty;
      if (a[i].qty >= 3) {
        p = p - a[i].price;
      }
      b += p;
      q += a[i].qty;
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
    let s = 0;
    if (k) {
      if (k === MemberTier.BRONZE) {
        s = 0;
      } else if (k === MemberTier.SILVER) {
        if (b - m > 50) {
          s = 5;
        }
      } else if (k === MemberTier.GOLD) {
        s = b - m > 50 ? 10 : 5;
      }
    }
    const f = b - m - s;
    this.h.push({ d: new Date().toISOString().split("T")[0], t: f, n: q });
    return {
      t: f,
      u: a.length,
      s,
    };
  }

  summary(): {
    orders: number;
    revenue: number;
    items: number;
  } {
    let r = 0;
    let n = 0;
    let i = 0;
    while (i < this.h.length) {
      r += this.h[i].t;
      n += this.h[i].n;
      i++;
    }
    return {
      orders: this.h.length,
      revenue: r,
      items: n,
    };
  }

  reset(): void {
    this.h = [];
  }
}
