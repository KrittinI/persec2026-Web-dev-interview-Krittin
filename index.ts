import { isValidParentheses } from "./1.ts";
import { sortArray } from "./2.ts";
import { autoComplete } from "./3.ts";
import { numberToRoman, romanToNumber } from "./4.ts";
import { descendingDigits } from "./5.ts";
import { tribonacci } from "./6.ts";

console.log("Run test ข้อที่ 1 ...");
console.log(isValidParentheses("()"));
console.log(isValidParentheses("([]]"));
console.log(isValidParentheses("([{}])"));
console.log(isValidParentheses("([[{}]]]"));
console.log(isValidParentheses(")"));
console.log(isValidParentheses("(]}])"));
console.log(isValidParentheses("([)]"));
console.log(isValidParentheses("{"));
console.log("-------------------\n");

console.log("Run test ข้อที่ 2 ...");
const test_1 = ["TH19", "SG20", "TH2"];
const test_2 = ["TH10", "TH3Netflix", "TH1", "TH7"];
console.log(sortArray(test_1));
console.log(sortArray(test_2));
console.log("-------------------\n");

console.log("Run test ข้อที่ 3 ...");
console.log(
  autoComplete("th", ["Mother", "Think", "Worthy", "Apple", "Android"], 2)
);
console.log("-------------------\n");
console.log("Run test ข้อที่ 4 ...");
console.log(numberToRoman(1989));
console.log(romanToNumber("MCMLXXXIX"));
console.log(numberToRoman(2000));
console.log(romanToNumber("MM"));
console.log(numberToRoman(68));
console.log(romanToNumber("LXVIII"));
console.log(numberToRoman(109));
console.log(romanToNumber("CIX"));

for (let i = 1; i < 4000; i++) {
  console.log(
    `Test ${i}: number eq ${i}`,
    `Roman number is ${numberToRoman(i)}`,
    `Convert: back to number eq ${i} ${romanToNumber(numberToRoman(i)) === i}`
  );
}

console.log(`Test 7: number eq 0`, numberToRoman(0) === "");
console.log("Test 8: number negative", numberToRoman(-1) === "");
console.log("Test 9: number not integer", numberToRoman(1.5) === "");
console.log(
  "Test 10: number larger than 4000",
  numberToRoman(4000) === "Not support larger number"
);
console.log("Test 11: number is NaN", numberToRoman(NaN) === "");
console.log("-------------------\n");

console.log("Run test ข้อที่ 5 ...");
console.log(descendingDigits(3008));
console.log(descendingDigits(1989));
console.log(descendingDigits(2679));
console.log(descendingDigits(9163));
console.log("-------------------\n");

console.log("Run test ข้อที่ 6 ...");
console.log(tribonacci([1, 5], 5));
console.log(tribonacci([1, -5, 10], 5));
console.log(tribonacci([1, 3, 5], 5));
console.log(tribonacci([2, 2, 2], 3));
console.log(tribonacci([10, 10, 10], 4));
console.log("-------------------\n");
