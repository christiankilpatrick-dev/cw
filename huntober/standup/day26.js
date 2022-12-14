// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

const majority = (nums) => {
	let csh = {};
	for (let i = 0; i < nums.length; i++) {
		csh[nums[i]] = csh[nums[i]] + 1 || 1;
	}
	let max = Math.max(...Object.values(csh));
	return Number(Object.keys(csh).find((key) => csh[key] === max));
};

console.log(majority([3, 2, 3]), 3);
console.log(majority([2, 2, 1, 1, 1, 2, 2]), 2);
