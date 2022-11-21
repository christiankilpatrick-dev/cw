// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

const sumOfMinimums = (arr) => {
	let mins = [];
	arr.forEach((x) => mins.push(Math.min(...x)));
	return mins.reduce((a, c) => (a += c));
};

console.log(
	sumOfMinimums([
		[1, 2, 3, 4, 5],
		[5, 6, 7, 8, 9],
		[20, 21, 34, 56, 100],
	]),
	26
);
