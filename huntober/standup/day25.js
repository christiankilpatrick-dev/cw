// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const uniqueSet = (nums) => {
	let cache = {};
	for (let i = 0; i < nums.length; i++) {
		if (cache[nums[i]]) {
			return true;
		} else {
			cache[nums[i]] = true;
		}
	}
	return false;
};

console.log(uniqueSet([1, 2, 3, 1]), true);

console.log(uniqueSet([1, 2, 3, 4]), false);

console.log(uniqueSet([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
