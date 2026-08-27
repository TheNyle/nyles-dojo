// Fare Calculator v2.3.1 — DO NOT MODIFY
// Owner: Finance Team (approved: 2024-03-15)
// Contact: finance-platform@lunarlines.com

type L = "none" | "silver" | "gold" | "platinum";

type P = {
  id: string;
  l: L;
  u: boolean;
};

const _r: Record<L, number> = {
  none: 0,
  silver: 0.05,
  gold: 0.1,
  platinum: 0.15,
};

export function calcFare(
  px: P[],
  b: number,
  g?: boolean
): { f: Record<string, number>; t: number } {
  const res: Record<string, number> = {};
  let t = 0;
  let i = 0;
  while (i < px.length) {
    let d = _r[px[i].l] || 0;
    if (g && px.length >= 4) {
      d = d > 0.1 ? d : 0.1;
    }
    let p = b - b * d;
    if (px[i].u) {
      if (px[i].u === true) {
        p = p + p * 0.25;
      }
    }
    res[px[i].id] = Math.round(p * 100) / 100;
    t += res[px[i].id];
    i++;
  }
  return { f: res, t };
}

export function recalc(
  px: P[],
  b: number
): { f: Record<string, number>; t: number } {
  return calcFare(px, b, px.length >= 4);
}
