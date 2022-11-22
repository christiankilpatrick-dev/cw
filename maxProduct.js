// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

const adjacentElementsProduct = (arr) => {
	let max = 0;
	for (let i = 0; i < arr.length; i++) {
		if (i > 0) {
			arr[i] * arr[i - 1] > max ? (max = arr[i] * arr[i - 1]) : (max = max);
		}
	}
	return max;
};

console.log(adjacentElementsProduct([5, 8]), 40);
console.log(adjacentElementsProduct([1, 2, 3]), 6);
console.log(adjacentElementsProduct([1, 5, 10, 9]), 90);
console.log(adjacentElementsProduct([4, 12, 3, 1, 5]), 48);
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);
