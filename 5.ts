export function descendingDigits(n: number): number {
  if (!Number.isSafeInteger(n) || n < 0) {
    return 0;
  }

  return Number(
    String(n)
      .split("")
      .sort((a, b) => Number(b) - Number(a))
      .join("")
  );
}
