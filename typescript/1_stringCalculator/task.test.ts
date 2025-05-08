import { sumNumbers } from "./task";

describe("sumNumbers()", () => {
  test("returns 0 for an empty string", () => {
    const result = sumNumbers("");

    expect(result).toBe(0);
  });

  test.each([
    "1",
    "2",
    "10"
  ])("returns itself if its a single digit", (input) => {
    const result = sumNumbers(input)

    expect(result).toBe(parseInt(input))
  })
  
  test.each([
    { input: '1,1', expected: 2},
    { input: '1,0', expected: 1},
    { input: '2,4', expected: 6},
  ])('returns the sum of two numbers correctly', ({ input, expected}) => {
    const result = sumNumbers(input);
    expect(result).toBe(expected);
  });

  test.each([
    { input: '1,1,1', expected: 3},
    { input: '1,2,1', expected: 4},
    { input: '100,200,300', expected: 600},
  ])("returns the sum of three numbers correctly", ({ input, expected}) => {
    const result = sumNumbers(input)
    expect(result).toBe(expected)
  })

  test.each([
    { input: '1', expected: 1},
    { input: '1,1', expected: 2},
    { input: '1,2,1', expected: 4},
    { input: '100,200,300,1', expected: 601},
    { input: '100,200,300,0,1000', expected: 1600},
  ])("returns sum of n numbers correctly", ({ input, expected}) => {
    const result = sumNumbers(input)
    expect(result).toBe(expected)
  });


  test.each([
    { input: '1', expected: 1},
    { input: '1\n2', expected: 3},
  ])("handles \\n as delimiter for two numbers", ({ input, expected}) => {
    const result = sumNumbers(input)
    expect(result).toBe(expected)
  });

  test.each([
    { input: '1', expected: 1},
    { input: '1\n2', expected: 3},
    { input: '1\n2\n3', expected: 6},
    { input: '1\n2\n10', expected: 13},
  ])("handles \\n as delimiter for n numbers", ({ input, expected}) => {
    const result = sumNumbers(input)
    expect(result).toBe(expected)
  });

  test.each([
    { input: '1\n2,3', expected: 6},
    { input: '1\n2,4', expected: 7},
    { input: '1\n2;4', expected: 7},
    { input: '1-2\n6', expected: 9},
  ])("handles mixed delimiters for 3 numbers", ({ input, expected}) => {
    const result = sumNumbers(input)
    expect(result).toBe(expected)
  });
});
