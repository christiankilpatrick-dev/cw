// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Array size is at least 1.
// All numbers will be positive.

const rowWeights = (arr) => {
	let row1 = [];
	let row2 = [];
	arr.forEach((x, i) => (i % 2 ? row2.push(x) : row1.push(x)));
	return [
		row1.reduce((a, c) => (a += c), 0),
		row2.reduce((a, c) => (a += c), 0),
	];
};

console.log(rowWeights([13, 27, 49]), [62, 27]);
console.log(rowWeights([50, 60, 70, 80]), [120, 140]);
console.log(rowWeights([80]), [80, 0]);
