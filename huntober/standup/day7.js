// Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

//P- array of arrays of integers
//R- number --> amount of unique arrays that can be formed by using 1 num from each subarray
//E- [[1,2],[4, 4],[5,6]] - 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

const solve = (arr) => {
	let output = [];
	//  get unique values in each sub array
	for (let i = 0; i < arr.length; i++) {
		output.push([...new Set(arr[i])]);
	}
	return output.map((x) => x.length).reduce((a, c) => (a *= c));
};

console.log(solve([[1, 2], [4], [5, 6]]), 4);
console.log(
	solve([
		[1, 2],
		[4, 4],
		[5, 6, 6],
	]),
	4
);
console.log(
	solve([
		[1, 2],
		[3, 4],
		[5, 6],
	]),
	8
);
console.log(
	solve([
		[1, 2, 3],
		[3, 4, 6, 6, 7],
		[8, 9, 10, 12, 5, 6],
	]),
	72
);