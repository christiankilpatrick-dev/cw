// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// go through Array, if its odd --> is it the lowest odd? push lowest odd
// if even, push even

const sortArray = (arr) => {
	let output = [];
	let evens = arr.filter((x) => x % 2 === 0);
	let sortedOdds = arr.filter((x) => x % 2 !== 0).sort((a, b) => a - b);
	let evenCount = 0;
	let oddCount = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			output.push(evens[evenCount]);
			evenCount++;
		} else {
			output.push(sortedOdds[oddCount]);
			oddCount++;
		}
	}
	return output;
};

const sortedOdds = (arr) => {
	let sorted = arr.filter((x) => x % 2 !== 0).sort((a, b) => a - b);
	return arr.map((x) => (x % 2 === 0 ? x : sorted.shift()));
};

console.log(sortedOdds([7, 1]), [1, 7]);
console.log(sortedOdds([5, 8, 6, 3, 4]), [3, 8, 6, 5, 4]);
console.log(
	sortedOdds([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]),
	[1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
);
console.log(sortedOdds([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
console.log(sortedOdds([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
