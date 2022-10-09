// I need twin functions, a function that swaps a given primitive value in a given 1-dimensional array to an index to the left, and another that swaps it to the right.
// If the given value is on the edge of the array and can't move in that direction, don't move it.
// The array passed in should be mutated by this function. Scandalous, I know.

const myArray = ['abc', 'xyz', 1, 2, 'Hey!'];

const moveLeft = (arr, str) => {
	for (let i = 0; i < arr.length; i++) {
		const index = arr.indexOf(str);
		if (index !== 0) {
			const neighbor = arr[index - 1];
			arr.splice(index - 1, 2, str, neighbor);
		}
		return arr;
	}
};

const moveRight = (arr, str) => {
	for (let i = 0; i < arr.length; i++) {
		const index = arr.indexOf(str);
		if (index !== arr.length - 1) {
			const neighbor = arr[index + 1];
			arr.splice(index, 2, neighbor, str);
		}
		return arr;
	}
};
console.log(moveLeft(myArray, 'xyz'), ['xyz', 'abc', 1, 2, 'Hey!']);
console.log(moveLeft(myArray, 'xyz'), ['xyz', 'abc', 1, 2, 'Hey!']);
console.log(moveRight(myArray, 2), ['xyz', 'abc', 1, 'Hey!', 2]);
console.log(moveRight(myArray, 2), ['xyz', 'abc', 1, 'Hey!', 2]);
