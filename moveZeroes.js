//Same problem as the other 'moving zeros' file, but this time the array must be mutated in place and returned.

const moveZeros = (nums) => {
	for (let i = nums.length; i--; ) {
		if (nums[i] === 0) {
			nums.splice(i, 1);
			nums.push(0);
		}
	}
	return nums;
};

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
