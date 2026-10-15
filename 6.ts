export function tribonacci(numList: Array<number>, n: number): Array<number> {
  if (numList.length < 3 || n < 0 || !Number.isInteger(n)) {
    return [];
  }

  if (numList.some((num) => num < 0)) {
    return [];
  }

  if (n <= numList.length) {
    return numList.slice(0, n);
  }

  const length = numList.length;
  const nextNum =
    numList[length - 3] + numList[length - 2] + numList[length - 1];

  return tribonacci([...numList, nextNum], n);
}

console.log(tribonacci([1, 3, 5], 5));
console.log(tribonacci([2, 2, 2], 3));
console.log(tribonacci([10, 10, 10], 4));
