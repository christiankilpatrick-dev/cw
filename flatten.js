// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

var flatten = function (array) {
	return array.reduce(function (a, z) {
		return a.concat(z);
	}, []);
};

console.log(flatten([1, 2, 3]), [1, 2, 3]);
console.log(
	flatten([
		[1, 2, 3],
		['a', 'b', 'c'],
		[1, 2, 3],
	]),
	[1, 2, 3, 'a', 'b', 'c', 1, 2, 3]
);
console.log(flatten([[[1, 2, 3]]]), [[1, 2, 3]]);
