// Today's task is to write a function that will check equality between 2 arrays with a particular structure.

// The arrays will:
// Be of equal size
// Will each contain some number (X) arrays
// Each inner array will contain that same number (X) primitive elements
// All the nested primitives within each array must strictly match to return a true result. Any mismatches will return false.

// For example:
// each of these arrays have 3 nested arrays of 3 strings each
const arr1 = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
];
const arr2 = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
];
const arr3 = [
	['a', 'B', 'c'],
	['d', 'E', 'f'],
	['g', 'H', 'i'],
];
const arr4 = [
	['a', 'b', 'c'],
	['g', 'h', 'i'],
	['d', 'e', 'f'],
];

// if we were to use our function to compare all the possible pairs
// ONLY arr1 vs arr2 would return true

const compareArrays = (array1, array2) => {
	if (JSON.stringify(array1) == JSON.stringify(array2)) {
		return true;
	} else {
		return false;
	}
};

console.log(compareArrays(arr1, arr2), true);
console.log(compareArrays(arr1, arr3), false);
console.log(compareArrays(arr1, arr4), false);
