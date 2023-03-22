// Return the first n Leonardo numbers as an array (vector<int> in C++)

// Input
// n : The number of Leonardo numbers to be shown
// L0 : The initial value of L(0)
// L1 : The initial value of L(1)
// add : The add number
// Examples
// input  : n = 5 , L0 = 1 , L1 = 1 , add = 1
// output : [ 1, 1, 3, 5, 9 ]

// input  : n = 5 , L0 = 0 , L1 = 0 , add = 2
// output : [ 0, 0, 2, 4, 8 ]

// input  : n = 10 , L0 = 0 , L1 = 1 , add = 4
// output : [ 0, 1, 5, 10, 19, 33, 56, 93, 153, 250 ]

// input  : n = 5 , L0 = 0 , L1 = 0 , add = 0
// output : [ 0, 0, 0, 0, 0 ]

function L(n, L0, L1, add) {
  const output = [L0, L1];

  for (let i = 2; i < n; i++) {
    output.push(output[i - 2] + output[i - 1] + add);
  }
  return output;
}
