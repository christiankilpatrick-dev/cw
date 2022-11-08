// Task
// Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

// Notes
// Multiple correct answers may be possible. In this case, return any one of them.
// The given index will be inside the given array.
// The given array will, therefore, never be empty.

function leastLarger(a, i) {
	let arr = a.filter((item) => item > a[i]).sort((a, b) => a - b);
	return a.lastIndexOf(arr[0]);
}

console.log(leastLarger([4, 1, 3, 5, 6], 0), 3);
console.log(leastLarger([4, 1, 3, 5, 6], 4), -1);
console.log(leastLarger([1, 3, 5, 2, 4], 0), 3);
