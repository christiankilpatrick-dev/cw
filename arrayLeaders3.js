// Given an array/list [] of integers , Find all the LEADERS in the array.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.

// Returned Array/list should store the leading numbers in the same order in the original array/list .

// Input >> Output Examples
// arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}

var arrayLeaders = (numbers) => {
  const sumOfAllAfter = [];

  let sum = 0;
  for (let i = numbers.length - 1; i >= 0; i--) {
    sumOfAllAfter[i] = sum;
    sum += numbers[i];
  }

  return numbers.filter((num, i) => num > sumOfAllAfter[i]);
};
