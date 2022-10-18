// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

const sumArr = (arr) => {
	return arr.reduce((acc, value) => (acc += Number(value)), 0);
};

console.log(sumArr([9, 3, '7', '3']), 22);
console.log(sumArr(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
console.log(sumArr(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 41);
