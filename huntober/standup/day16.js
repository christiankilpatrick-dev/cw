// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// If the average length is not an integer, use Math.round().
// The input array's length > 1

const average = (arr) => {
	let lengths = [];
	arr.forEach((x) => lengths.push(x.length));
	let avg = Math.ceil(lengths.reduce((a, c) => a + c) / lengths.length);
	return arr.map((x) => x[0].repeat(avg));
};

console.log(average(['u', 'y']), ['u', 'y']); // average length is 1
console.log(average(['aa', 'bbb', 'cccc']), ['aaa', 'bbb', 'ccc']); // average length is 3
console.log(average(['aa', 'bb', 'ddd', 'eee']), ['aaa', 'bbb', 'ddd', 'eee']); // average length is 2.5 round up to 3
