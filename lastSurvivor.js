// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.

// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'

function lastSurvivor(string, indices) {
	const arr = [...string];
	for (const i of indices) arr.splice(i, 1);
	return arr[0];
}

console.log(lastSurvivor('abc', [1, 1]), 'a');

console.log(lastSurvivor('kbc', [0, 1]), 'b');

console.log(lastSurvivor('zbk', [2, 1]), 'z');

console.log(lastSurvivor('c', []), 'c');
