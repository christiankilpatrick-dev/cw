// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

function maxTriSum(numbers) {
	return [...new Set(numbers)]
		.sort((a, b) => a - b)
		.slice(-3)
		.reduce((acc, el) => acc + el);
}

console.log(maxTriSum([3, 2, 6, 8, 2, 3]), 17);

console.log(axTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]), 18);

console.log(maxTriSum([-7, 12, -7, 29, -5, 0, -7, 0, 0, 29]), 41);
