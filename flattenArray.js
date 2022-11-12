// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

function flattenAndSort(array) {
	let output = [];
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array[i].length; j++) {
			output.push(array[i][j]);
		}
	}
	return output.sort((a, b) => a - b);
}

console.log(
	flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]),
	[1, 2, 3, 4, 5, 6, 7, 8, 9]
);
