// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

const moveZeros = (arr) => {
	return [
		...arr.filter((item) => item !== 0),
		...arr.filter((item) => item === 0),
	];
};

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
