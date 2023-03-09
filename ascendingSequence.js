// You are given a positive integer n. We intend to make some ascending sequences according to the following rules:

// Make a sequence of length 1: [ n ]

// Or, insert a number to the left side of the sequence. But this number can not exceed half of the first number of the sequence.

// Follow rule 2, continue insert number to the left side of the sequence.

// Your task is to count the number of all possible sequences, and return it.

function makeSequences(n) {
  const result = [1];

  for (let i = 1; i <= n; i++) {
    result.push(i % 2 ? result[i - 1] : result[i / 2] + result[i - 1]);
  }

  return result.pop();
}
