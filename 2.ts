const test_1 = ["TH19", "SG20", "TH2"];
const test_2 = ["TH10", "TH3Netflix", "TH1", "TH7"];

console.log(test_1.sort());
console.log(test_2.sort());

export function sortArray(list: Array<string>): Array<string> {
  return [...list].sort();
}
