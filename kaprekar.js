// A number is a Kaprekar number if its square can be split up into two parts which sum up to the original number. (https://en.wikipedia.org/wiki/Kaprekar_number )

// For example, the following are Kaprekar numbers:

// 9: 9^2=81 and 8+1=9.
// 45: 45^2=2025 and 20+25=45
// 2223: 2223^2=4941729 and 494+1729=2223
// Create a function that - if the input is a Kaprekar number - outputs the index that splits the square into the two parts that sum to the original number. For non-Kaprekar numbers, the output should be -1.

// E.g Given an input of 2223, the square will be 4941729. 4941729 has to be split before the 3rd index to get 494 and 1729, which sum to the original number 2223. So for 2223, the function should output 3.

function kaprekarSplit(n) {
  const digits = (n ** 2).toString();

  let index = -1;
  while (index++ < digits.length) {
    const first = digits.substring(0, index);
    const last = digits.substring(index);

    if (+first + +last === n) return index;
  }

  return -1;
}
