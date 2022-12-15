// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

const twoSum = (arr, sum) => {
	let pairs = [];
	let nums = {};
	for (let num1 of arr) {
		const num2 = sum - num1;
		if (nums[num2]) {
			pairs.push([num1, num2]);
		} else {
			nums[num1] = 1;
		}
	}
	return pairs;
};

console.log(twoSum([1, 2, 2, 3, 4], 4), [
	[2, 2],
	[3, 1],
]);
