// Your task is to sort an array of integer numbers by the product of the value and the index of the positions.

// For sorting the index starts at 1, NOT at 0!
// The sorting has to be ascending.
// The array will never be null and will always contain numbers.

// Input: 23, 2, 3, 4, 5
// Product of value and index:
// 23 => 23 * 1 = 23  -> Output-Pos 4
//  2 =>  2 * 2 = 4   -> Output-Pos 1
//  3 =>  3 * 3 = 9   -> Output-Pos 2
//  4 =>  4 * 4 = 16  -> Output-Pos 3
//  5 =>  5 * 5 = 25  -> Output-Pos 5

// Output: 2, 3, 4, 23, 5

const sortByValueAndIndex = (array) =>
	array
		.map((element, index) => [element * (index + 1), element])
		.sort((a, b) => a[0] - b[0])
		.map((element) => element[1]);

console.log(sortByValueAndIndex([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);

console.log(sortByValueAndIndex([23, 2, 3, 4, 5]), [2, 3, 4, 23, 5]);

console.log(sortByValueAndIndex([26, 2, 3, 4, 5]), [2, 3, 4, 5, 26]);

console.log(sortByValueAndIndex([9, 5, 1, 4, 3]), [1, 9, 5, 3, 4]);
