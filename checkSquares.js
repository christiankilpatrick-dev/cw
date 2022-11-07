// Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

// Your function should return true if all elements in the array are square numbers and false if not.

// An empty array should return undefined / None / nil /false (for C). You can assume that all array elements will be positive integers.

const isSquare = (arr) => {
	return !arr[0]
		? undefined
		: arr.every((x) => Math.sqrt(x) % 1 === 0)
		? true
		: false;
};

console.log(isSquare([1, 4, 9, 16]), true);
console.log(isSquare([3, 4, 7, 9]), false);
console.log(isSquare([]), undefined);
console.log(isSquare([1, 2, 4, 15]), false);
