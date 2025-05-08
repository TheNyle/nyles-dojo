export function sumNumbers(input: string) {
  if (input === "") {
    return 0;
  }

  const numbers = input.replace(/[\n;-]/g, ",").split(",");

  const sum = numbers.reduce((acc, cur) => {
    return Number(acc) + Number(cur);
  }, 0);

  return sum;
}
