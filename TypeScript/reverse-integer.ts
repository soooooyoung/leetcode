/**
 * String Method
 */
function reverseString(x: number): number {
  const reversed = x.toString().split("").reverse().join("");
  const negative = reversed.includes("-");
  const newNum = Number(reversed.replace("-", ""));
  if (newNum > Math.pow(2, 31) - 1) {
    return 0;
  }

  return negative ? -newNum : newNum;
}
