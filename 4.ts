const RomanToNumberMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const digitChar = ["I", "V", "X"];
const tenChar = ["X", "L", "C"];
const hundredChar = ["C", "D", "M"];
const thousandChar = ["M"];

const digitPattern = {
  0: "",
  1: "0",
  2: "00",
  3: "000",
  4: "01",
  5: "1",
  6: "10",
  7: "100",
  8: "1000",
  9: "02",
};

export function romanToNumber(roman: string): number {
  let total = 0;

  if (!roman) {
    return total;
  }

  for (let i = 0; i < roman.length; i++) {
    const currentChar = roman[i];
    const nextChar = roman[i + 1];
    if (!RomanToNumberMap[currentChar]) {
      return 0;
    }

    if (!nextChar || !RomanToNumberMap[nextChar]) {
      total += RomanToNumberMap[currentChar];
      continue;
    }

    if (
      checkInvalidTwoDigits(
        RomanToNumberMap[currentChar],
        RomanToNumberMap[nextChar]
      )
    ) {
      return 0;
    }

    if (RomanToNumberMap[currentChar] >= RomanToNumberMap[nextChar]) {
      total += RomanToNumberMap[currentChar];
    } else {
      total += RomanToNumberMap[nextChar] - RomanToNumberMap[currentChar];
      i++;
    }
  }
  return total;
}

function checkInvalidTwoDigits(curr: number, next: number): boolean {
  if (curr === 5 || curr === 50 || curr === 500) {
    if (next > curr) {
      return true;
    }
  }

  if (curr === 1 && next > 10) {
    return true;
  }

  if (curr === 10 && next > 100) {
    return true;
  }

  if (curr === 100 && next > 1000) {
    return true;
  }

  return false;
}

export function numberToRoman(n: number): string {
  if (n >= 4000) {
    return "Not support lager number";
  }

  if (!Number.isInteger(n) || n < 0) {
    return "";
  }
  let roman = "";

  const input = String(n).padStart(4, "0");

  const digits = [
    { value: Number(input[0]), chars: thousandChar },
    { value: Number(input[1]), chars: hundredChar },
    { value: Number(input[2]), chars: tenChar },
    { value: Number(input[3]), chars: digitChar },
  ];

  for (const { value, chars } of digits) {
    for (const ch of digitPattern[value]) {
      roman += chars[ch];
    }
  }

  return roman;
}

console.log(numberToRoman(0));
// console.log(romanToNumber("MCMLXXXIX"));
// console.log(numberToRoman(2000));
// console.log(romanToNumber("MM"));
// console.log(numberToRoman(68));
// console.log(romanToNumber("LXVIII"));
// console.log(numberToRoman(109));
// console.log(romanToNumber("CIX"));
